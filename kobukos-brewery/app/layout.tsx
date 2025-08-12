import { Slot, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AppLayout() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#8da68c' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start', width: '100%', height: 200, padding: 0 }}>
        <View style={{ width: 500, height: '140%', overflow: 'hidden', marginLeft: 0, marginBottom: 0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}>
          <Image
            source={require('@/assets/images/Kobuko.png')}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, bottom: 0 }}
            contentFit="cover"
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', position: 'relative', minHeight: 100, height: '100%' }}>
          <Image
            source={require('@/assets/images/luckypaws.png')}
            style={{
              position: 'absolute',
              width: 510,
              height: 500,
              top: -150,
              left: 0,
              zIndex: -1,
            }}
            contentFit="cover"
          />
          <View style={{
            paddingVertical: 0,
            paddingHorizontal: 32,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 0,
          }}>
            <ThemedText type="title" style={{ color: '#5c2c09ff', fontSize: 75, fontFamily: 'Brush Script MT' }}>
              Kobuko's Brewery
            </ThemedText>
            {/* <ThemedText style={{ color: '#5c2c09ff', fontSize: 40, marginTop: 10, fontFamily: 'Weddingday', fontStyle: 'italic' }}>
              Crafted with passion in Bandle City
            </ThemedText> */}
          </View>
        </View>
        <View style={{ width: 500, height: '140%', overflow: 'hidden', marginLeft: 0, marginBottom: 0, borderBottomLeftRadius: 0, borderTopLeftRadius: 0 }}>
          <Image
            source={require('@/assets/images/Kobuko2.png')}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', left: 0, bottom: 0 }}
            contentFit="cover"
          />
        </View>
      </View>
      {/* Dashboard */}
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
      {/* Page content */}
      <Slot />
    </View>
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
