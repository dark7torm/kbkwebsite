

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 450;

export default function papa() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>PAPA</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Midlaner and Roofing Expert </Text>
                <Text style={styles.paragraph}>
                    When it comes to the Midlane, PAPA handles business.
                </Text>
                <Text style={styles.paragraph}>
                    Winthrop's very own PAPA is KBK's midlane enthusiast. Known for his dislike of perilla leaves,
                    PAPA is a perrenial Challenger player with a deep champ pool. The 2025 White Boy of the Year
                    takes over the rift with picks like his signature Syndra, Kassadin and Kayle. PAPA continues to prove 
                    he is a top tier midlaner in the NACL OQs, and is a key piece of the Kobuko's Brewery roster. During the 
                    off season, PAPA tears apart the ACL with his team, PAPA's Chonccs.

                </Text>
                <Text style={styles.paragraph}>
                    If she separate the leaves, she a BOP
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                    <View style={{ width: 400, marginLeft: 32, zIndex: 10, position: 'relative' }}>
                        <Tweet id="1892650743670132872" />
                    </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    },
    blogContent: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 24,
        backgroundColor: 'transparent',
    },
    blogContentInner: {
        paddingBottom: 300,
    },
    title: {
        fontSize: 100,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginBottom: 8,
        color: '#2d3d2c',
        // textAlign: 'center',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
        color: '#2d3d2c',
    },
    divider: {
        height: 2,
        backgroundColor: '#2d3d2c',
        marginVertical: 12,
        width: '100%',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
        lineHeight: 24,
        color: '#2d3d2c',
    },
    sidebar: {
        width: SIDEBAR_WIDTH,
        height: '100%',
        backgroundColor: 'transparent',
        borderLeftWidth: 1,
        borderLeftColor: 'transparent',
        padding: 0,
        alignItems: 'center',
    },
    sidebarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#fff'
    },
    twitterEmbed: {
        width: SIDEBAR_WIDTH - 32,
        height: 500,
        borderRadius: 8,
        overflow: 'hidden',
    },
});