import { Slot, useRouter } from 'expo-router';
import { usePathname } from 'expo-router';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Linking } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ModalDropdown from 'react-native-modal-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import GooeyNav from '@/components/GooeyNav';

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

  const navItems = [
    { label: 'Roster', onPress: () => router.push('/roster/lol') },
    { label: 'Shop', onPress: () => router.navigate('/') },
    { label: 'Games', onPress: () => router.navigate('/') },
    { label: 'Calendar', onPress: () => router.navigate('/') },
    { label: 'Kobuko Art Museum', onPress: () => router.navigate('/') },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
      {/* Background gradient */}
      <LinearGradient
       colors={['#b6b065ff', '#8da68c', '#EAFBBB']}
    start={{x: 0.50, y: 1.00}}
    end={{x: 0.50, y: 0.00}}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      {/* Custom top nav bar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/')} activeOpacity={0.8}>
          <Image
            source={require('@/assets/images/luckypaws_white.png')}
            style={{ width: 150, height: 130, resizeMode: 'contain', marginLeft: -15, marginRight: 0 }}
          />
        </TouchableOpacity>

        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[60, 8]}
          particleR={80}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F']}
          style={{
            flex: 1,
            marginHorizontal: 20,
          }}
        />

        <TouchableOpacity onPress={() => Linking.openURL('https://x.com/KOBUKOS_BREWERY')} activeOpacity={0.8}>
          <FontAwesome name="twitter" size={28} color="#2d3d2c" />
        </TouchableOpacity>
      </View>
      
      {/* Page content wrapper with padding */}
      <View style={styles.contentContainer}>
        {/* Page content */}
        <Slot />
      </View>
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


