import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function ArtMuseum() {
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
