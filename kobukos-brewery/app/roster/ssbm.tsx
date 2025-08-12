
import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
export default function LolRosterScreen() {
  const router = useRouter();
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8da68c' }}>
      <ThemedText type="title">Super Smash Bros Melee Roster</ThemedText>
      <ThemedText>This is where the SSBM roster information will be displayed.</ThemedText>
      <ThemedView style={styles.dashboardContainer}>
        <ThemedText type="title" style={{ marginBottom: 16 }}></ThemedText>
        <View style={styles.dashboardRow}>
          <TouchableOpacity
            style={styles.dashboardCard}
            onPress={() => router.push('/roster')}
            activeOpacity={0.8}
          >
            <ThemedText type="subtitle">Roster Details</ThemedText>
            <Image
              source={require('@/assets/images/lol.png')}
              style={{ width: 50, height: 50, marginTop: 8, alignItems: 'center', alignContent: 'center' }}
            />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  dashboardContainer: {
    marginTop: 24,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#283324ff',
    shadowColor: '#808080',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  dashboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#283324ff',
    gap: 16,
  },
  dashboardCard: {
    flex: 1,
    backgroundColor: '#283324ff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 1 },
  },
}); 