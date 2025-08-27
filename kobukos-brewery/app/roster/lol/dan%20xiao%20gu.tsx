

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 368;

export default function danxiaogu() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>Dan Xiao Gu</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Toplaner and Wendy's #1 Customer </Text>
                <Text style={styles.paragraph}>
                    In eternal pursuite of the NJuzz, Jisung takes time away from finding the love of his life to play toplane for Kobuko's Brewery.
                </Text>
                <Text style={styles.paragraph}>
                    Our favorite 4 for 4 enthusiast, Jisung is Kobuko's Brewery's toplaner and resident Wendy's connoisseur. 
                    Known for his prowess against top talent like Fudge and Niles, Jisung is no stranger to top talent. 
                    When he isn't terrorizing the 9-5ers in the depths of low diamond, he uses his spare time to scout the "fine shyts" on Hinge. 
                    His love life methods are eerily similar to his in-game philosophy, following the "Mamba Mentality", oftentimes stating that
                    "Hard work is more valuable than talent." 
                </Text>
                <Text style={styles.paragraph}>
                    Ladies, please contact us if you are interested in Jisung. He might even pay for dinner if he has money that day.
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                    <View style={{ width: 400, marginLeft: 32, zIndex: 10, position: 'relative' }}>
                        <Tweet id="1890906236637384713" />
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