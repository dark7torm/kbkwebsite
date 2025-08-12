import { ThemedText } from '@/components/ThemedText';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
export default function LolRoster() {
    const router = useRouter();
  const playerRoles = [
    'Toplane',
    'Jungle',
    'Mid',
    'ADC',
    'Support',
  ];
  const playerNames = [
    'Jisung',
    'MunchyTheMonster',
    'PAPA',
    'dan xiao gu',
    'A Bee',
  ];
  const managementRoles = [
    'Coach',
    'Manager',
  ];
  const managementNames = [
    'renwitdashifts',
    'Smadgehugers',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <View style={styles.listColumn}>
          <ThemedText type="subtitle" style={styles.listTitle}>Players</ThemedText>
            {playerNames.map((name, idx) => (
            <TouchableOpacity key={name} style={styles.nameButton} activeOpacity={0.7} onPress={() => {router.push(`/roster/lol/${name}` as any)}}>
                <ThemedText style={styles.listItem}>
                  {playerRoles[idx]}: {name}
                </ThemedText>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.listColumn}>
          <ThemedText type="subtitle" style={styles.listTitle}>Coaching / Management</ThemedText>
          {managementNames.map((name, idx) => (
            <TouchableOpacity key={name} style={styles.nameButton} activeOpacity={0.7} onPress={() => {router.push(`/roster/lol/${name}` as any)}}>
              <ThemedText style={styles.listItem}>
                {managementRoles[idx]}: {name}
              </ThemedText>
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
    fontWeight: 'bold',
  },
  listItem: {
    fontSize: 18,
  },
  nameButton: {
    marginBottom: 8,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});