import React, { useState, useEffect } from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const scrollY = new Animated.Value(0);

  const fadeAnimation = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
 // EAFBBB, 646139
  return (
    
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        <Animated.View style={[styles.heroSection, { opacity: fadeAnimation }]}>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/Kobuko.png')}
              style={styles.sideImage}
              contentFit="contain"
            />
          </View>
          
          <View style={styles.titleContainer}>
            <ThemedText type="title" style={styles.mainTitle}>
              Kobuko's Brewery
            </ThemedText>
            <ThemedText style={styles.subtitle}>
              Crafted with passion in Bandle City
            </ThemedText>
          </View>

          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/Kobuko2.png')}
              style={styles.sideImage}
              contentFit="contain"
            />
          </View>
        </Animated.View>

        <View style={styles.contentSection}>
          {[1, 2, 3, 4, 5].map((section) => (
            <View key={section} style={styles.section}>
              <ThemedText style={styles.sectionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. {section}
              </ThemedText>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    minHeight: 400,
  },
  imageContainer: {
    width: '25%',
    height: 300,
  },
  sideImage: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 32,
  },
  mainTitle: {
    color: '#5c2c09ff',
    fontSize: 75,
    fontFamily: 'Brush Script MT',
    textAlign: 'center',
  },
  subtitle: {
    color: '#5c2c09ff',
    fontSize: 37,
    marginTop: 20,
    fontFamily: 'Palisade',
    fontWeight: '300',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  contentSection: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 20,
  },
  section: {
    backgroundColor: 'rgba(92, 44, 9, 0.1)',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  sectionText: {
    color: '#5c2c09ff',
    fontSize: 24,
    textAlign: 'center',
  },
});
