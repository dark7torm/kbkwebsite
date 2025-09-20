import { Image } from 'expo-image';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';


export default function ShopScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'f4f0e0'}}>
      <ThemedText type="title">Shop Screen</ThemedText>
      <ScrollView horizontal = {true} style={{ width: '100%', padding: 16, backgroundColor: '#f4f0e0' }}>
        <Image source={{ uri: '' }}  />
        <Image source={{ uri: '' }} />
        <Image source={{ uri: '' }}  />
      {/* Add more Image components as needed */}
    </ScrollView>
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
