

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 368;

export default function munchythemonster() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>MunchyTheMonster</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Whimsical Jungler </Text>
                <Text style={styles.paragraph}>
                    When it comes to pulling bans, MunchyTheMonster is unmatched.
                </Text>
                <Text style={styles.paragraph}>
                    He's whimsical. He's not MonsterTheMuncher. He's one of the best tank junglers from the hood of North York. Fighting his way
                    through racial discrimination and elo hell, MunchyTheMonster is Kobuko's Brewery's ever evolving jungler and hardest worker. 
                    Sometimes called "The Correlation", MunchyTheMonster's performance in the matches directly correlates with the crime rate in
                    his home neighborhood. The higher the crime rate, the better he plays. When not dominating the rift, Munchy is also known by 
                    his stage name as a successful rapper, "M and M", Munchy and Monster.
                </Text>
                <Text style={styles.paragraph}>
                    The True Gangster
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                    <View style={{ width: 400, marginLeft: 32, zIndex: 10, position: 'relative' }}>
                        <Tweet id="1891908537040724453" />
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
        backgroundColor: '#8da68c',
    },
    blogContent: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 24,
        backgroundColor: '#8da68c',
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
        backgroundColor: '#697e68ff',
        borderLeftWidth: 1,
        borderLeftColor: '#697e68ff',
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