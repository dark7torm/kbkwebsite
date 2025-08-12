import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';


export default function RosterScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText type="title">Roster Screen</ThemedText>
      <ThemedText>This is where the roster information will be displayed.</ThemedText>
      <ThemedView style={styles.dashboardContainer}>
              <ThemedText type="title" style={{ marginBottom: 16 }}>Dashboard</ThemedText>
              <View style={styles.dashboardRow}>
                <TouchableOpacity
                  style={styles.dashboardCard}
                  onPress={() => router.push('/')}
                  activeOpacity={0.8}
                >
                  <ThemedText type="subtitle">Home</ThemedText>
                  <ThemedText>Welcome to the Home section!</ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dashboardCard}
                  onPress={() => router.push('/roster')}
                  activeOpacity={0.8}
                >
                  <ThemedText type="subtitle">Roster</ThemedText>
                  <ThemedText>Our current roster organized by game.</ThemedText>
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
    backgroundColor: '#2e1503',
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
