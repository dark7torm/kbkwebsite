
import { useFonts } from 'expo-font';
import AppLayout from './layout';

export default function RootLayout() {
  const [loaded] = useFonts({
    'Weddingday': require('../assets/fonts/Weddingday.ttf'),
  });
  if (!loaded) return null;
  return <AppLayout />;
}
