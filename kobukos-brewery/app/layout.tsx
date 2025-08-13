import { Slot, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AppLayout() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: '#8da68c' }}>
      {/* Custom top nav bar */}
      <View style={{ width: '100%', backgroundColor: '#430c03', height: 100, flexDirection: 'row', alignItems: 'center', paddingLeft: 0, paddingRight: 24, paddingTop: 0 }}>
        <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/luckypaws_white.png')}
            style={{ width: 150, height: 130, resizeMode: 'contain', marginLeft: -15, marginRight: 0 }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 36 }}>
          <TouchableOpacity onPress={() => router.push('/roster')}>
            <ThemedText style={{ color: '#fff', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Roster</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('/')}>
            <ThemedText style={{ color: '#fff', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Games</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('/')}>
            <ThemedText style={{ color: '#fff', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Calendar</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.navigate('/')}>
            <ThemedText style={{ color: '#fff', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Kobuko Art Museum</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Page content */}
      <Slot />
      {/* Bottom left and right images, fixed to bottom of page */}
      {/* <View style={{ position: 'absolute', left: 0, bottom: 0, width: 250, height: 200, overflow: 'hidden', zIndex: 100 }} pointerEvents="none">
        <Image
          source={require('@/assets/images/Kobuko.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          contentFit="cover"
        />
      </View> */}
      {/* <View style={{ position: 'absolute', right: 0, bottom: 0, width: 250, height: 200, overflow: 'hidden', zIndex: 100 }} pointerEvents="none">
        <Image
          source={require('@/assets/images/Kobuko2.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          contentFit="cover"
        />
      </View> */}
    </View>
  );
}

// No dashboard styles needed
