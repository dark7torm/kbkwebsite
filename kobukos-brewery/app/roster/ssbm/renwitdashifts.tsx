import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Tweet } from 'react-tweet'

const SIDEBAR_WIDTH = 450;

export default function renwitdashifts() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>ren</Text>
                <View style={styles.divider} />
                <Text style={styles.subtitle}>Shiftiest Falco</Text>
                <Text style={styles.paragraph}>
                    "The way he coaches AND plays is so shifty"
                </Text>
                <Text style={styles.paragraph}>
                    Kobuko's Brewery's very own renwitdashifts is the best half Japanese half White Falco
                    main who was born in Japan and runs Northeastern's weekly tournament Sconefest. When he's not
                    busy complaining about how terrible Falco is, ren is likely getting his ass beat by oz and shmeeli on
                    netplay. Calling his transition from head coach to melee competitor unprecedented would be an understatement.
                    Despite his lesser involvement with the league team nowadays, ren still shows off his prestine coaching
                    style with fellow teammate Jisung's Hinge account, recording 46 "good shots" and 35 denials on the season.


                </Text>
                
            </ScrollView>
            <View style={styles.sidebar}>
                                
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