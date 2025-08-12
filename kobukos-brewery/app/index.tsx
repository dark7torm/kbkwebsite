import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8da68c' }}>
            <View style={{ position: 'relative', width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', padding: 0 }}>
              <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', position: 'relative', minHeight: 100, height: '100%' }}>
                <View style={{
                  paddingVertical: 0,
                  paddingHorizontal: 32,
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginTop: 26,
                  marginBottom: 0,
                }}>
                  <ThemedText type="title" style={{ color: '#5c2c09ff', fontSize: 75, fontFamily: 'Brush Script MT', textAlign: 'center' }}>
                    Kobuko's Brewery
                  </ThemedText>
                  <ThemedText style={{ color: '#5c2c09ff', fontSize: 37, marginTop: 20, fontFamily: 'Palisade', fontWeight: '300', fontStyle: 'italic', textAlign: 'center' }}>
                    Crafted with passion in Bandle City
                  </ThemedText>
                </View>
              </View>
            </View>
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
