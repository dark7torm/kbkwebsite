import { ThemedText } from '@/components/ThemedText';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'expo-image';

const managementRoles = [
  'Coach',
  'Manager',
];
const managementNames = [
  'renwitdashifts',
  'Smadgehugers',
];

export default function LolRoster() {
  const router = useRouter();
  const playerRoles = [
    'Toplane',
    'Jungle',
    'Mid',
    'Bot',
    'Support',
  ];
  const playerNames = [
    'Jisung',
    'MunchyTheMonster',
    'PAPA',
    'dan xiao gu',
    'A Bee',
  ];

  const getEncodedRoute = (name: string) => {
    return `/roster/lol/${encodeURIComponent(name)}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listColumn}>
          <ThemedText type="subtitle" style={styles.listTitle}>Players</ThemedText>
          {playerNames.map((name, idx) => (
            <TouchableOpacity 
              key={name} 
              style={styles.playerCard} 
              activeOpacity={0.7} 
              onPress={() => router.push(getEncodedRoute(name) as any)}
            >
              <LinearGradient
                colors={['#71906F', '#6c9969ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}
              >
                <View style={styles.playerInfo}>
                  <View style={styles.textContainer}>
                    <ThemedText style={styles.role}>
                      {playerRoles[idx]}
                    </ThemedText>
                    <ThemedText style={styles.playerName}>
                      {name}
                    </ThemedText>
                  </View>
                  {/* Placeholder for player image */}
                  <View style={styles.imageContainer}>
                    {/* <Image
                      source={require(`@/assets/images/players/${name}.png`)}
                      style={styles.playerImage}
                      contentFit="cover"
                    /> */}
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.listColumn}>
          <ThemedText type="subtitle" style={styles.listTitle}>Staff</ThemedText>
          {managementNames.map((name, idx) => (
            <TouchableOpacity 
              key={name} 
              style={styles.playerCard} 
              activeOpacity={0.7} 
              onPress={() => router.push(`/roster/lol/${name}` as any)}
            >
              <LinearGradient
                colors={['#71906F', '#6c9969ff']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardGradient}
              >
                <View style={styles.playerInfo}>
                  <View style={styles.textContainer}>
                    <ThemedText style={styles.role}>
                      {managementRoles[idx]}
                    </ThemedText>
                    <ThemedText style={styles.playerName}>
                      {name}
                    </ThemedText>
                  </View>
                  <View style={styles.imageContainer}>
                    {/* <Image
                      source={require(`@/assets/images/staff/${name}.png`)}
                      style={styles.playerImage}
                      contentFit="cover"
                    /> */}
                  </View>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingHorizontal: 0,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    gap: 32,
    paddingHorizontal: 32,
  },
  listColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  listTitle: {
    marginBottom: 12,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: '#2d3d2c',
  },
  pageTitle: {
    fontSize: 100,
    fontWeight: 'bold',
    fontFamily: 'System',
    color: '#2d3d2c',
    textAlign: 'center',
    marginBottom: 100,
  },
  playerCard: {
    width: '50%',
    height: 120,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    
  },
  cardGradient: {
    flex: 1,
    padding: 16,
  },
  playerInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  role: {
    color: '#2d3d2c',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  playerName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  playerRole: {
    color: '#2d3d2c',
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 2,
  },
  nameButton: {
    marginBottom: 12,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});