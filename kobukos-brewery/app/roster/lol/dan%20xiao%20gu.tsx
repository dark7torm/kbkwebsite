

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 450;

export default function danxiaogu() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>dan xiao gu</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>ADC, KOBUKO UCHIHA</Text>
                <Text style={styles.paragraph}>
                    Our Jolliest Yordle.
                </Text>
                <Text style={styles.paragraph}>
                    dan xiao gu, formerly known as KOBUKO UCHIHA and Aito is Kobuko's Brewery's ADC and burgeoning Yordle enthusiast.
                    Seen playing on his infamous account "fat and ugly#180KG", dan xiao gu smashes earlygame with his Draven and Aphelios, bringing 
                    an aggressive playstyle to the botlane. Born and raised in 'Sauga, dan xiao gu takes after his favorite NBA player Jason Tatum,
                    copying his catchphrases.

                </Text>
                <Text style={styles.paragraph}>
                    WE DID ITT
                </Text>
            </ScrollView>
            {/* Sidebar for Twitter embed */}
            <View style={styles.sidebar}>
                    <View style={{ width: 400, marginLeft: 32, zIndex: 10, position: 'relative' }}>
                        <Tweet id="1892653634543882481" />
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