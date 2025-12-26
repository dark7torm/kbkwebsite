import { Slot, useRouter } from 'expo-router';
import { usePathname } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Linking, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
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
    <View style={{ flex: 1, backgroundColor: '#f4f0e0', zIndex: 1}}>
      {/* Custom top nav bar */}
      <View style={styles.header}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: '#f4f0e0' }]} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.8}>
            <Image
              source={require('@/assets/images/luckypaws_green.png')}
              style={{ width: 75, height: 50, resizeMode: 'contain', marginLeft: -8, marginRight: 0 }}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 18 }}>
            <TouchableOpacity>
              <ModalDropdown
                defaultValue='Roster'
                options={['League Of Legends', 'Super Smash Brothers Melee']}
                onSelect={handleSelect}
                showsVerticalScrollIndicator={false}
                renderButtonText={() => 'Roster'}
                textStyle={{ color: '#2d3d2c', fontSize: 16, fontFamily: 'System', fontWeight: '400' }}
                dropdownStyle={{ 
                  width: 300, 
                  height: 'auto', 
                  backgroundColor: '#f4f0e0', 
                  borderRadius: 8,
                  marginTop: 8,
                  borderWidth: 1,
                  
                }}
                dropdownTextStyle={{ 
                  color: '#2d3d2c', 
                  fontSize: 14, 
                  fontFamily: 'System',
                  backgroundColor: 'transparent',
                  paddingVertical: 8,
                  paddingHorizontal: 12
                }}
                
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/shop')}>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 16, fontFamily: 'System', fontWeight: '400' }}>Shop</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/calendar') }>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 16, fontFamily: 'System', fontWeight: '400' }}>Calendar</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/art_museum') }>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 16, fontFamily: 'System', fontWeight: '400' }}>Kobuko Art Museum</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('/about_us') }>
              <ThemedText style={{ color: '#2d3d2c', fontSize: 16, fontFamily: 'System', fontWeight: '400' }}>About Us</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => Linking.openURL('https://x.com/KOBUKOS_BREWERY')} activeOpacity={0.8}>
            <FontAwesome name="twitter" size={18} color="#2d3d2c" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Page content wrapper with padding */}
      <ScrollView
        scrollEventThrottle={16}
        style={styles.contentContainer}
      >
        <Slot />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 12,
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
    marginTop: 50, // This matches the header height
    width: '100%',
    height: '100%',
  },
  headerRight: {
    zIndex: 2,
    position: 'relative',
    paddingRight: 12,
  },
});


