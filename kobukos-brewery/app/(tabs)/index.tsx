import { Image } from 'expo-image';
import { StyleSheet, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// 8da68c KOBUKO GREEN
// bb7140 KOBUKO ORANGE
export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8da68c', dark: '#8da68c' }}
      headerImage={
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
          <Image
            source={require('@/assets/images/Kobuko.png')}
            style={styles.reactLogo}
          />
          <View style={{ marginLeft: 24 }}>
                <ThemedText type="title" style={{ color: '#fff', fontSize: 32, fontFamily: 'Roligano-Light' }}>
                  Kobuko's Brewery
                </ThemedText>
                <ThemedText style={{ color: '#fff', fontSize: 18, marginTop: 8, fontFamily: 'Roligano-ThinItalic', fontStyle: 'italic' }}>
                  Crafted with passion in Bandle City
                </ThemedText>
          </View>
          <Image
            source={require('@/assets/images/Kobuko2.png')}
            style={styles.reactLogo}
          />
        </View>
      }
    >
      <ThemedView style={styles.dashboardContainer}>
        <ThemedText type="title" style={{ marginBottom: 16 }}>Dashboard</ThemedText>
        <View style={styles.dashboardRow}>
          <Pressable style={styles.dashboardCard} onPress={() => router.replace('/(tabs)')}>
            <ThemedText type="subtitle">Home</ThemedText>
            <ThemedText>Welcome to the Home section!</ThemedText>
          </Pressable>
          <Pressable style={styles.dashboardCard} onPress={() => router.replace('/(tabs)/explore')}>
            <ThemedText type="subtitle">Explore</ThemedText>
            <ThemedText>This app includes example code to help you get started.</ThemedText>
          </Pressable>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    marginTop: 24,
    marginBottom: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#000',
    shadowColor: '#000',
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
    backgroundColor: '#413939ff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
  reactLogo: {
    height: 300,
    width: 600,
    // Adjusted size to fit header
  },
});
