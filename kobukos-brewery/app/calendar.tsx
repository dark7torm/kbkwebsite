import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import { Calendar as CalendarComponent } from 'react-native-calendars';

/**
 * CONFIG
 */
const START_GG_TOKEN = "282929bc662d26c8957f86b7fbff9c15";
const PLAYERS = [
  { id: "4337390", name: "ren" },
  { id: "62496", name: "oz" },
  { id: "4283134", name: "Cheezboom" }
];

/**
 * GraphQL query for past events
 */
const QUERY_PAST = `
query GetPlayerPlacingsSorted($playerId: ID!, $page: Int) {
  player(id: $playerId) {
    id
    gamerTag
    user {
      events(
        query: {
          page: $page
          perPage: 9
          sortBy: "startAt desc"
        }
      ) {
        nodes {
          id
          name
          startAt
          tournament {
            name
          }
          entrants(
            query: {
              page: 1
              perPage: 24
              sortBy: "standing.placement asc"
            }
          ) {
            nodes {
              participants {
                player {
                  id
                }
              }
              standing {
                placement
                isFinal
              }
            }
          }
        }
      }
    }
  }
}
`;

/**
 * GraphQL query for future events
 */
const QUERY_FUTURE = `
query GetPlayerFutureEvents($playerId: ID!) {
  player(id: $playerId) {
    id
    user {
      tournaments(
        query: {
          page: 1
          perPage: 50
          filter: {
            upcoming: true
          }
        }
      ) {
        nodes {
          id
          name
          startAt
          numAttendees
        }
      }
    }
  }
}
`;

/**
 * Types (minimal)
 */
type ResultRow = {
  tournament: string;
  event: string;
  date: number;
  placement: number | null;
  playerName: string;
};

export default function Calendar() {
  const [results, setResults] = useState<ResultRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  useEffect(() => {
    fetchData();
  }, [currentMonth]);

  function calculatePageNumber(viewedMonth: Date): number {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthNum = today.getMonth();
    
    const viewedYear = viewedMonth.getFullYear();
    const viewedMonthNum = viewedMonth.getMonth();
    
    // Calculate months difference
    const monthsDiff = (currentYear - viewedYear) * 12 + (currentMonthNum - viewedMonthNum);
    
    // Page 1 is current month, page 2 is previous month, etc.
    return monthsDiff + 1;
  }

  function isFutureMonth(month: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const firstDayOfMonth = new Date(month.getFullYear(), month.getMonth(), 1);
    firstDayOfMonth.setHours(0, 0, 0, 0);
    
    return firstDayOfMonth > today;
  }

  async function fetchData() {
    const isFuture = isFutureMonth(currentMonth);
    const currentPage = isFuture ? 1 : calculatePageNumber(currentMonth);
    const query = isFuture ? QUERY_FUTURE : QUERY_PAST;

    try {
      const allRows: ResultRow[] = [];

      // Fetch data for all players
      for (const player of PLAYERS) {
        const variables = isFuture 
          ? { playerId: player.id }
          : { playerId: player.id, page: currentPage };

        const res = await fetch("https://api.start.gg/gql/alpha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${START_GG_TOKEN}`,
          },
          body: JSON.stringify({
            query: query,
            variables: variables,
          }),
        });

        const json = await res.json();

        if (json.errors) {
          throw new Error(json.errors[0].message);
        }

        if (isFuture) {
          // For future events, query returns tournaments
          const tournaments = json.data.player.user.tournaments.nodes;

          for (const tournament of tournaments) {
            const eventDate = new Date(tournament.startAt * 1000);
            const utcYear = eventDate.getUTCFullYear();
            const utcMonth = eventDate.getUTCMonth();

            // Only show events in currently viewed month
            const sameMonth =
              utcYear === currentMonth.getFullYear() &&
              utcMonth === currentMonth.getMonth();

            if (!sameMonth) continue;

            allRows.push({
              tournament: tournament.name,
              event: tournament.name,
              date: tournament.startAt,
              placement: tournament.numEntrants,
              playerName: player.name,
            });
          }
        } else {
          // For past events, query returns events
          const events = json.data.player.user.events.nodes;

          for (const event of events) {
            // Find the entrant that contains this player
            const entrant = event.entrants.nodes.find((e: any) =>
              e.participants.some(
                (p: any) => String(p.player?.id) === String(player.id)
              )
            );
            if (!entrant) continue;
            const placement =
              entrant?.standing?.isFinal
              ? entrant.standing.placement
              : null;
            // Use UTC date to avoid timezone issues
            const eventDate = new Date(event.startAt * 1000);
            const utcYear = eventDate.getUTCFullYear();
            const utcMonth = eventDate.getUTCMonth();

            // Only show events in currently viewed month
            const sameMonth =
              utcYear === currentMonth.getFullYear() &&
              utcMonth === currentMonth.getMonth();

            if (!sameMonth) continue;
            allRows.push({
              tournament: event.tournament?.name ?? "Unknown Tournament",
              event: event.name,
              date: event.startAt,
              placement,
              playerName: player.name,
            });
          }
        }
      }

      setResults(allRows);

      // Create marked dates for calendar
      const marked: Record<string, {marked: boolean}> = {};
      allRows.forEach((item: any) => {
        const date = new Date(item.date * 1000);
        // Use local date string for calendar
        const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        marked[dateStr] = { marked: true };
      });
      setMarkedDates(marked);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </SafeAreaView>
    );
  }

  const isFuture = isFutureMonth(currentMonth);

  const filteredResults = selectedDate
    ? results.filter(item => {
        const date = new Date(item.date * 1000);
        const itemDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        return itemDate === selectedDate;
      })
    : isFuture
      ? results
      : results.filter(item => item.placement !== null && item.placement <= 3);

  const headerText = selectedDate ? "Results" : isFuture ? "Upcoming Events" : "Notable Results";

  return (
    <SafeAreaView style={styles.container}>
      

      <CalendarComponent
        markedDates={markedDates}
        onDayPress={(day: any) => setSelectedDate(day.dateString)}
        onMonthChange={(month: any) => {
          // month is like {year: 2025, month: 12, day: 1}
          setCurrentMonth(new Date(month.year, month.month - 1, 1));
          setSelectedDate(''); // Clear selected date to show all events for the month
        }}
        theme={{
          todayTextColor: '#00adf5',
          backgroundColor: '#f4f0e0',
          calendarBackground: '#f4f0e0',
          textDayFontFamily: 'System',
          textMonthFontFamily: 'System',
          textDayHeaderFontFamily: 'System',
          
        }}
        style={styles.calendar}
        
      />
      <Text style={styles.header}>{headerText}</Text>
      <FlatList
        data={filteredResults}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.playerName}>{item.playerName}</Text>
            <Text style={styles.title}>{item.tournament}</Text>
            <Text>{item.event}</Text>
            <Text>
              {isFuture ? "Entrants: " : "Placement: "}
              {item.placement !== null ? item.placement : "N/A"}
            </Text>
            <Text style={styles.date}>
              {new Date(item.date * 1000).toLocaleDateString()}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontFamily: "System",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  calendar: {
    fontFamily: "System",
    marginBottom: 20,
    backgroundColor: "#f4f0e0"
  },
  card: {
    fontFamily: "System",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
  },
  playerName: {
    fontFamily: "System",
    fontSize: 14,
    fontWeight: "600",
    color: "#2d3d2c",
    marginBottom: 4,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontFamily: "System",
    marginTop: 4,
    color: "#666",
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
