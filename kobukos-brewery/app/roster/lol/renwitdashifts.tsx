

import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import {Tweet} from 'react-tweet'

const SIDEBAR_WIDTH = 350;

export default function renwitdashifts() {
    return (
        <View style={styles.container}>
            {/* Main blog content */}
            <ScrollView style={styles.blogContent} contentContainerStyle={styles.blogContentInner}>
                <Text style={styles.title}>renwitdashifts</Text>
                <Text style={styles.subtitle}>Coach, League of Legends</Text>
                <Text style={styles.paragraph}>
                    Welcome to the renwitdashifts profile! This is a sample blog-style page. You can add long-form content here, such as stories, updates, or personal insights. The content area is scrollable, so you can write as much as you want.
                </Text>
                <Text style={styles.paragraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
                </Text>
                <Text style={styles.paragraph}>
                    More blog content goes here. Add images, links, or anything else you want to share with your audience.
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
        paddingBottom: 64,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 16,
        lineHeight: 24,
    },
    sidebar: {
        width: SIDEBAR_WIDTH,
        backgroundColor: '#697e68ff',
        borderLeftWidth: 1,
        borderLeftColor: '#697e68ff',
        padding: 0,
        zIndex: 1,
        alignItems: 'center',
    },
    sidebarTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#fff',
        zIndex: 1
    },
    twitterEmbed: {
        width: SIDEBAR_WIDTH - 32,
        height: 500,
        borderRadius: 8,
        overflow: 'hidden',
        zIndex: 1
    },
});