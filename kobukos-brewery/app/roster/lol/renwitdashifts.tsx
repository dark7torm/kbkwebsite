

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 368;

export default function renwitdashifts() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>renwitdashifts</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Coach, Player, Shiftlord </Text>
                <Text style={styles.paragraph}>
                    The shiftiest player on the team, ren is known to be the wildcard on the roster.
                </Text>
                <Text style={styles.paragraph}>
                    Whether it was drafting the perfect counter to the enemies or filling in with his godlike Ezreal, 
                    renwitdashifts is the brains of the operation here at Kobuko's Brewery.
                    Known to outperform KBK's toplaner Jisung in solo queue, ren shows that he is a vital piece of the team
                    both on and off the Rift. Perfect draft reads, counterpicks, and a deep understanding of the game make
                    this team's head coach in contention for the best in NACL OQs. While OQs are off season, in shifty fashion, ren
                    competes in Super Smash Bros. Melee, where he is Boston's shiftiest Falco and member of the decorated duo ShiftBoom,
                    alongside fellow Boston smasher Cheezboom. 

                </Text>
                <Text style={styles.paragraph}>
                    In a world full of shiftless players, renwitdashifts stands
                    alone at the top.
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                    <View style={{ width: 400, marginLeft: 32, zIndex: 10, position: 'relative' }}>
                        <Tweet id="1890884734294565190" />
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