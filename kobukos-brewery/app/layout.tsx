import { Slot, useRouter } from 'expo-router';
import { usePathname } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ModalDropdown from 'react-native-modal-dropdown';
import { FontAwesome } from '@expo/vector-icons';

export default function AppLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const isRosterPage = pathname?.startsWith('/roster');

  const gameRoutes: { [key: string]: string } = {
    'League Of Legends': "/roster/lol",
    'Super Smash Brothers Melee': '/roster/ssbm'
  };

  const handleSelect = (index: string, value: string) => {
    router.push(gameRoutes[value] as any);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#8da68c' }}>
      {/* Custom top nav bar */}
      <View style={{ width: '100%', backgroundColor: '#430c03', height: 100, flexDirection: 'row', alignItems: 'center', paddingLeft: 0, paddingRight: 24, paddingTop: 0, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.8}>
            <Image
              source={require('@/assets/images/luckypaws_white.png')}
              style={{ width: 150, height: 130, resizeMode: 'contain', marginLeft: -15, marginRight: 0 }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 36 }}>
            <TouchableOpacity>
              <ModalDropdown
                defaultValue='Roster'
                options={['League Of Legends', 'Super Smash Brothers Melee']}
                onSelect={handleSelect}
                showsVerticalScrollIndicator={false}
                renderButtonText={() => 'Roster'}
                textStyle={{ color: '#fff', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}
                dropdownStyle={{ 
                  width: 300, 
                  height: 'auto', 
                  backgroundColor: '#430c03', 
                  borderRadius: 8,
                  marginTop: 8,
                  padding: 8,
                }}
                dropdownTextStyle={{ 
                  color: '#fff', 
                  fontSize: 20, 
                  fontFamily: 'System',
                  backgroundColor: '#430c03',
                  paddingVertical: 12,
                  paddingHorizontal: 16
                }}
                dropdownTextHighlightStyle={{ 
                  color: '#e0cba8' 
                }}
              />
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
        <TouchableOpacity onPress={() => Linking.openURL('https://x.com/KOBUKOS_BREWERY')} activeOpacity={0.8}>
          <FontAwesome name="twitter" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      
      {/* Page content */}
      <Slot />
      {/* Bottom left and right images, fixed to bottom of page */}
  {/* <View style={{ position: 'absolute', left: 0, bottom: 0, width: 250, height: 200, overflow: 'hidden', zIndex: 0 }} pointerEvents="none"> */}
      {/* <View style={{ position: 'absolute', left: 0, bottom: 0, width: 250, height: 200, overflow: 'hidden', zIndex: 100 }} pointerEvents="none">
        <Image
          source={require('@/assets/images/Kobuko.png')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          contentFit="cover"
        />
      </View>
  {!isRosterPage && (
    <View style={{ position: 'absolute', right: 0, bottom: 0, width: 250, height: 200, overflow: 'hidden', zIndex: 0 }} pointerEvents="none">
      <Image
        source={require('@/assets/images/Kobuko2.png')}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        contentFit="cover"
      />
    </View>
  )}
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


