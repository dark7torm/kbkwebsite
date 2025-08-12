
import { useFonts } from 'expo-font';
import AppLayout from './layout';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Weddingday': require('../assets/fonts/Weddingday.ttf'),
    'Wistania': require('../assets/fonts/Wistania.ttf'),
    'Palisade': require('../assets/fonts/Palisade.otf'),
    'MySunshine': require('../assets/fonts/MySunshine.ttf'),
  });
  if (!loaded) return null;
  return <AppLayout />;
}
