import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  withDelay,
  runOnJS,
  interpolate,
  Easing,
} from 'react-native-reanimated';

interface GooeyNavItem {
  label: string;
  onPress: () => void;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: string[];
  initialActiveIndex?: number;
  style?: any;
}

interface ParticleData {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  scale: number;
  color: string;
  rotate: number;
  delay: number;
}

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'],
  initialActiveIndex = 0,
  style
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [itemLayouts, setItemLayouts] = useState<{ [key: number]: { x: number, y: number, width: number, height: number } }>({});

  // Animation values
  const backgroundOpacity = useSharedValue(0);
  const backgroundScale = useSharedValue(0);
  const backgroundX = useSharedValue(0);
  const backgroundY = useSharedValue(0);
  const backgroundWidth = useSharedValue(0);
  const backgroundHeight = useSharedValue(0);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number): ParticleData => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    let rotate = noise(r / 10);
    const start = getXY(d[0], particleCount - i, particleCount);
    const end = getXY(d[1] + noise(7), particleCount - i, particleCount);

    return {
      id: Math.random(),
      startX: start[0],
      startY: start[1],
      endX: end[0],
      endY: end[1],
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
      delay: noise(timeVariance * 2)
    };
  };

  const handlePress = (index: number) => {
    if (activeIndex === index) return;

    const layout = itemLayouts[index];
    if (!layout) return;

    setActiveIndex(index);

    // Update background position and size
    backgroundX.value = withTiming(layout.x, { duration: 300 });
    backgroundY.value = withTiming(layout.y, { duration: 300 });
    backgroundWidth.value = withTiming(layout.width, { duration: 300 });
    backgroundHeight.value = withTiming(layout.height, { duration: 300 });

    // Animate background
    backgroundScale.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(1, { duration: 300, easing: Easing.out(Easing.quad) })
    );

    backgroundOpacity.value = withSequence(
      withTiming(0, { duration: 0 }),
      withTiming(1, { duration: 300 })
    );

    // Create particles
    const newParticles: ParticleData[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push(createParticle(i));
    }
    setParticles(newParticles);

    // Clear particles after animation
    setTimeout(() => {
      setParticles([]);
    }, animationTime * 2 + timeVariance);

    // Call the item's onPress function
    items[index].onPress();
  };

  const handleLayout = (index: number, event: any) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setItemLayouts(prev => ({
      ...prev,
      [index]: { x, y, width, height }
    }));
  };

  // Initialize background position for the active item
  useEffect(() => {
    if (itemLayouts[activeIndex]) {
      const layout = itemLayouts[activeIndex];
      backgroundX.value = layout.x;
      backgroundY.value = layout.y;
      backgroundWidth.value = layout.width;
      backgroundHeight.value = layout.height;
      backgroundScale.value = 1;
      backgroundOpacity.value = 1;
    }
  }, [itemLayouts, activeIndex]);

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: backgroundX.value,
    top: backgroundY.value,
    width: backgroundWidth.value,
    height: backgroundHeight.value,
    backgroundColor: 'white',
    borderRadius: 100,
    opacity: backgroundOpacity.value,
    transform: [{ scale: backgroundScale.value }],
    zIndex: 1,
  }));

  const ParticleComponent = ({ particle }: { particle: ParticleData }) => {
    const particleX = useSharedValue(particle.startX);
    const particleY = useSharedValue(particle.startY);
    const particleScale = useSharedValue(0);
    const particleOpacity = useSharedValue(0);

    useEffect(() => {
      // Animate particle movement
      particleX.value = withSequence(
        withDelay(particle.delay + 30,
          withTiming(particle.endX * 1.2, {
            duration: animationTime * 0.7,
            easing: Easing.bezier(0.55, 0, 1, 0.45)
          })
        ),
        withTiming(particle.endX, { duration: animationTime * 0.15 }),
        withTiming(particle.endX * 0.5, { duration: animationTime * 0.15 })
      );

      particleY.value = withSequence(
        withDelay(particle.delay + 30,
          withTiming(particle.endY * 1.2, {
            duration: animationTime * 0.7,
            easing: Easing.bezier(0.55, 0, 1, 0.45)
          })
        ),
        withTiming(particle.endY, { duration: animationTime * 0.15 }),
        withTiming(particle.endY * 0.5, { duration: animationTime * 0.15 })
      );

      // Animate particle scale and opacity
      particleScale.value = withSequence(
        withDelay(particle.delay,
          withTiming(particle.scale * 0.25, {
            duration: animationTime * 0.25,
            easing: Easing.bezier(0.55, 0, 1, 0.45)
          })
        ),
        withTiming(particle.scale, { duration: animationTime * 0.4 }),
        withTiming(particle.scale, { duration: animationTime * 0.2 }),
        withTiming(0, { duration: animationTime * 0.15 })
      );

      particleOpacity.value = withSequence(
        withDelay(particle.delay,
          withTiming(0, { duration: 0 })
        ),
        withTiming(1, { duration: animationTime * 0.38 }),
        withTiming(1, { duration: animationTime * 0.47 }),
        withTiming(0, { duration: animationTime * 0.15 })
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
      position: 'absolute',
      width: 20,
      height: 20,
      backgroundColor: particle.color,
      borderRadius: 10,
      left: '50%',
      top: '50%',
      marginLeft: -10,
      marginTop: -10,
      transform: [
        { translateX: particleX.value },
        { translateY: particleY.value },
        { scale: particleScale.value },
        { rotate: `${particle.rotate * (particleScale.value / particle.scale)}deg` }
      ],
      opacity: particleOpacity.value,
      zIndex: 2,
    }));

    return <Animated.View style={animatedStyle} />;
  };

  return (
    <View style={[{
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      paddingHorizontal: 16,
      paddingVertical: 8,
    }, style]}>
      {/* Background pill */}
      <Animated.View style={backgroundAnimatedStyle} />

      {/* Navigation items */}
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          onLayout={(event) => handleLayout(index, event)}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            marginHorizontal: 4,
            borderRadius: 100,
            zIndex: 3,
          }}
          activeOpacity={0.8}
        >
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: activeIndex === index ? '#000' : '#fff',
            textShadowColor: activeIndex === index ? 'transparent' : 'rgba(45, 61, 44, 0.2)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 1,
          }}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}

      {/* Particles */}
      {particles.map((particle) => (
        <ParticleComponent key={particle.id} particle={particle} />
      ))}
    </View>
  );
};

export default GooeyNav;