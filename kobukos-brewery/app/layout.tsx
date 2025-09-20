import { Slot, useRouter } from 'expo-router';
import { usePathname } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Linking, Animated } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ModalDropdown from 'react-native-modal-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const isRosterPage = pathname?.startsWith('/roster');
  const scrollY = new Animated.Value(0);

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const gameRoutes: { [key: string]: string } = {
    'League Of Legends': "/roster/lol",
    'Super Smash Brothers Melee': '/roster/ssbm'
  };

  const handleSelect = (index: string, value: string) => {
    router.push(gameRoutes[value] as any);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f4f0e0' }}>
      {/* Custom top nav bar */}
      <Animated.View style={[styles.header, { opacity: headerOpacity }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.8}>
            <Image
              source={require('@/assets/images/luckypaws_green.png')}
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
                textStyle={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}
                dropdownStyle={{ 
                  width: 300, 
                  height: 'auto', 
                  backgroundColor: 'transparent', 
                  borderRadius: 8,
                  marginTop: 8,
                  borderWidth: 1,
                  
                }}
                dropdownTextStyle={{ 
                  color: '#2d3d2c', 
                  fontSize: 20, 
                  fontFamily: 'System',
                  backgroundColor: 'transparent',
                  paddingVertical: 12,
                  paddingHorizontal: 16
                }}
                dropdownTextHighlightStyle={{ 
                  color: '#e0cba8',
                  backgroundColor: '#2d3d2c'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/shop')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Shop</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Games</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Calendar</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>Kobuko Art Museum</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 24, fontFamily: 'System', fontWeight: '400' }}>About Us</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => Linking.openURL('https://x.com/KOBUKOS_BREWERY')} activeOpacity={0.8}>
          <FontAwesome name="twitter" size={28} color="#2d3d2c" />
        </TouchableOpacity>
      </Animated.View>
      
      {/* Page content wrapper with padding */}
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        style={styles.contentContainer}
      >
        <Slot />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 24,
    paddingTop: 0,
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'transparent'
  },
  contentContainer: {
    flex: 1,
    marginTop: 100, // This matches the header height
    width: '100%',
    height: '100%',
  },
});


