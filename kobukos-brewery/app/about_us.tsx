import { ThemedText } from '@/components/ThemedText';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, ScrollView, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';


const windowWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: '1',
        title: 'About Kobuko\'s Brewery',
        content: 'Kobuko\'s Brewery is a team of friends who share a passion for both Kobuko and competition. Founded in 2025, our teams have expanded from just League of Legends to Super Smash Bros Melee and beyond. To us, Kobuko is more than just a mascot. He is a way of living.'
    },
    {
        id: '2',
        title: 'Our Mission',
        content: 'At Kobuko\'s Brewery, our mission to create a unique blend of players to procure a taste never before seen in Runeterra. Our Bandlebrew is top notch, with the most sour bandleberries being used to create a flavor that is both refreshing and invigorating.'
    },
    {
        id: '3',
        title: 'One Team, One Family',
        content: 'Our team at Kobuko\'s Brewery is more than just a group of players; we are a family. We support each other both in and out of the game, and we believe that this camaraderie is what sets us apart. Together, we strive for excellence and aim to bring home victories while embodying the spirit of Kobuko.'
    },

];

const images = [
    
    
    require('@/assets/images/about_us/DSCF2464.jpg'), 
    require('@/assets/images/about_us/IMG_0397.jpg'),
    require('@/assets/images/about_us/IMG_0412.jpg'),
    require('@/assets/images/about_us/IMG_0414.jpg'),
    
]

const images2 = [
  require('@/assets/images/about_us/91725FEC-30E0-459C-BEBF-640C5549C0C6.jpg'),
    require('@/assets/images/about_us/IMG_9658.jpg'),
    require('@/assets/images/about_us/20250111_164737.jpg'),
    require('@/assets/images/about_us/DSCF2542.jpg'),
]
/**
 * require('@/assets/images/about_us/91725FEC-30E0-459C-BEBF-640C5549C0C6.jpg'),
 *require('@/assets/images/about_us/20250110_225430.jpg'),
    require('@/assets/images/about_us/20250110_2254301.jpg'),
    require('@/assets/images/about_us/20250111_164737.jpg'),
    require('@/assets/images/about_us/IMG_1257.jpg'),
 */



export default function about_us() {
  const scrollRef1 = useRef<ScrollView | null>(null);
  const scrollX1 = useRef(new Animated.Value(0)).current;
  const currentIndex1 = useRef(0);

  const scrollRef2 = useRef<ScrollView | null>(null);
  const scrollX2 = useRef(new Animated.Value(0)).current;
  const currentIndex2 = useRef(0);

  useEffect(() => {
    const id1 = scrollX1.addListener(({ value }) => {
      currentIndex1.current = Math.round(value / windowWidth);
    });

    const interval1 = setInterval(() => {
      const next = (currentIndex1.current + 1) % images2.length;
      scrollRef1.current?.scrollTo({ x: next * windowWidth, animated: true });
    }, 3000);

    return () => {
      scrollX1.removeListener(id1);
      clearInterval(interval1);
    };
  }, [scrollX1]);

  useEffect(() => {
    const id2 = scrollX2.addListener(({ value }) => {
      currentIndex2.current = Math.round(value / windowWidth);
    });

    const interval2 = setInterval(() => {
      const next = (currentIndex2.current + 1) % images.length;
      scrollRef2.current?.scrollTo({ x: next * windowWidth, animated: true });
    }, 3000);

    return () => {
      scrollX2.removeListener(id2);
      clearInterval(interval2);
    };
  }, [scrollX2]);

  return (
    <View style={styles.contentSection}>
      <View style={styles.section}>
        <ThemedText type="title" style={styles.mainTitle}>
          {DATA[0].title}
        </ThemedText>
        <ThemedText style={styles.sectionText}>{DATA[0].content}</ThemedText>
        <View style={styles.spacer} />

        {/* Image carousel placed under DATA[0].content */}
        <View style={styles.imageRow}>
          <Image source={require('@/assets/images/KOBUKOGIF.gif')} style={styles.halfImage} resizeMode="cover" />
          <Image source={require('@/assets/images/20250110_210031.gif')} style={styles.halfImage} resizeMode="cover" />
        </View>

        <ThemedText type="title" style={styles.mainTitle}>
          {DATA[1].title}
        </ThemedText>
        <ThemedText style={styles.sectionText}>{DATA[1].content}</ThemedText>
        <View style={styles.spacer} />
        <View style={{ marginTop: 16, borderRadius: 10, overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ref={scrollRef1}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX1 } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          >
            {images2.map((src, i) => (
              <View key={i} style={[styles.slide, { width: windowWidth - 64 }]}>
                <Image source={src} style={{ width: '100%', height: 500, borderRadius: 10 }} resizeMode="cover" />
              </View>
            ))}
          </ScrollView>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
            {images2.map((_, i) => {
              const inputRange = [(i - 1) * windowWidth, i * windowWidth, (i + 1) * windowWidth];
              const opacity = scrollX1.interpolate({ inputRange, outputRange: [0.4, 1, 0.4], extrapolate: 'clamp' });
              const scale = scrollX1.interpolate({ inputRange, outputRange: [0.85, 1.2, 0.85], extrapolate: 'clamp' });
              return (
                <Animated.View
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    margin: 4,
                    backgroundColor: '#2d3d2c',
                    opacity,
                    transform: [{ scale }],
                  }}
                />
              );
            })}
          </View>
        </View>
        <ThemedText type="title" style={styles.mainTitle}>
          {DATA[2].title}
        </ThemedText>
        <ThemedText style={styles.sectionText}>{DATA[2].content}</ThemedText>
        <View style={styles.spacer} />
        <View style={{ marginTop: 16, borderRadius: 10, overflow: 'hidden', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ref={scrollRef2}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX2 } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          >
            {images.map((src, i) => (
              <View key={i} style={[styles.slide, { width: windowWidth - 64 }]}>
                <Image source={src} style={{ width: '100%', height: 500, borderRadius: 10 }} resizeMode="cover" />
              </View>
            ))}
          </ScrollView>

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
            {images.map((_, i) => {
              const inputRange = [(i - 1) * windowWidth, i * windowWidth, (i + 1) * windowWidth];
              const opacity = scrollX2.interpolate({ inputRange, outputRange: [0.4, 1, 0.4], extrapolate: 'clamp' });
              const scale = scrollX2.interpolate({ inputRange, outputRange: [0.85, 1.2, 0.85], extrapolate: 'clamp' });
              return (
                <Animated.View
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    margin: 4,
                    backgroundColor: '#2d3d2c',
                    opacity,
                    transform: [{ scale }],
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
      
    </View>
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
    color: '#2d3d2c',
    fontSize: 35,
    fontFamily: 'System',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20
  },
  subtitle: {
    color: '#2d3d2c',
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 20,
    minHeight: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  sectionText: {
    color: '#2d3d2c',
    fontFamily: 'System',
    fontSize: 24,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row', // Aligns children horizontally
    justifyContent: 'space-between', // Distributes space evenly between images
    padding: 10,
    width: '100%',
    height: 160
  },
  imageWrapper: {
    width: windowWidth / 2 - 15, // Roughly 50% of screen width minus padding/margin
    height: 300, // Set a fixed height or use aspectRatio
    // You can also use flex: 1 here if you want them to take equal space
  },
  image: {
    width: '100%',
    height: '100%',
    // If you prefer to maintain aspect ratio dynamically without a fixed height,
    // you would need to know the ratio and use the aspectRatio prop:
    // aspectRatio: 1.5, // e.g., for a 3:2 image
  },
  slide: {
    width: '100%', // Each image takes full screen width for paging
    justifyContent: 'center',
    alignItems: 'center',
  }
  ,
  spacer: {
    height: 24,
  }
  ,
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  halfImage: {
    width: '49%',
    height: 400,
    borderRadius: 10,
  }
});
