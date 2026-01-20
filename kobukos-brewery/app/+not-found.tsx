import { Link, Stack } from 'expo-router';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.text}>In Construction</Text>
            <Image source={require('../assets/images/KOBUKORUN.gif')} resizeMode="cover" style={styles.image} />
          </View>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
