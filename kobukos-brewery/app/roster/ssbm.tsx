import { ThemedText } from '@/components/ThemedText';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const managementNames = [
  'renwitdashifts',
  'Smadgehugers',
];

export default function SSBMRoster() {
  const router = useRouter();
  
  const playerNames = [
    'renwitdashifts'
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
              style={styles.nameButton} 
              activeOpacity={0.7} 
              onPress={() => router.push(getEncodedRoute(name) as any)}
            >
                <ThemedText style={styles.playerName}>
                  {name}
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
  playerName: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'System',
    color: '#2d3d2c',
  },
  playerRole: {
    fontSize: 14,
    fontFamily: 'System',
    color: '#2d3d2c',
    opacity: 0.8,
  },
  nameButton: {
    marginBottom: 12,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
});