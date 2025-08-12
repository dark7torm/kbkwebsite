import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';


export default function RosterScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8da68c' }}>
      <ThemedText type="title">Roster Screen</ThemedText>
      <ThemedText>This is where the roster information will be displayed.</ThemedText>
      <ThemedView style={styles.dashboardContainer}>  
        <ThemedText type="title" style={{ marginBottom: 16 }}>Games</ThemedText>
              <View style={styles.dashboardRow}>
                <TouchableOpacity
                  style={styles.dashboardCard}
                  onPress={() => router.push('/roster/lol')}
                  activeOpacity={0.8}
                >
                  <ThemedText type="subtitle">League Of Legends</ThemedText>
                  <ThemedText>Our NACL OQ Roster</ThemedText>
                  <Image
                    source={require('@/assets/images/lol.png')}
                    style={{ width: 50, height: 50, marginTop: 8, alignItems: 'center', alignContent: 'center' }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dashboardCard}
                  onPress={() => router.push('/roster/ssbm')}
                  activeOpacity={0.8}
                >
                  <ThemedText type="subtitle">Super Smash Bros. Melee</ThemedText>
                  <ThemedText>Our SSBM Roster</ThemedText>
                  <Image
                    source={require('@/assets/images/melee.webp')}
                    style={{ width: 100, height: 50, marginTop: 8, alignItems: 'center', alignContent: 'center'}}
                  />
                </TouchableOpacity>
              </View>
            </ThemedView>
    </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    marginTop: 24,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#283324ff',
    shadowColor: '#808080',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  dashboardCard: {
    flex: 1,
    backgroundColor: 'rgba(78, 57, 41, 1)',
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  
});
