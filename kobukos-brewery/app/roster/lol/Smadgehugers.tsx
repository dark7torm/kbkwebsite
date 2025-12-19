

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 450;

export default function Smadgehugers() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>Smadgehugers</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Manager, Design Lead, and Glue Guy for Kobuko's Brewery </Text>
                <Text style={styles.paragraph}>
                    Generational scorer who brings it on ganking and may win MVP.
                </Text>
                <Text style={styles.paragraph}>
                    Smadgehugers won his first MVP, led the league in KP,
                    and was the best player on a 2-win team that made the KISA League Tournament Group Stage.
                    This was, by just about any measure, one of the most impressive individual
                    campaigns any jungler has ever had. Now, it raises a simple question: At only 
                    20 years old, how many more seasons can Smadgehugers submit at or near 
                    this level? Odds are, we haven’t even seen the best he has to offer—a terrifying 
                    predicament for every enemy jungler that already showed there’s no way to slow him down.
                </Text>
                <Text style={styles.paragraph}>
                    kappa bungus
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                <Text style={styles.sidebarTitle}></Text>
                <Tweet id="1896326736272658524" />
                <Tweet id="1896389921059066287" />
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