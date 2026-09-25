import { Text, StyleSheet, View, Linking, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class ActionCards extends Component {
  render() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
      <View>
        <Text style={styles.headingText}>Blog Card</Text>
        <View style={[styles.card, styles.cardElevated]}> 
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    What's new about AI
                </Text>
            </View>
            <Image
            source={{
                uri: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
            }}
            style={styles.cardImage}
            />
            <View style={styles.bodyContainer}>
                <Text numberOfLines={3}>
                    July brought a wave of AI advances to support developers, simplify everyday life, and protect local communities. We gave developers faster, more efficient
                </Text>
            </View>
            <View style={styles.footerContainer}>
                <TouchableOpacity 
                onPress={() => openWebsite('https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-july-2026/')}
                >
                    <Text style={styles.socialLinks}>
                        Read more
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 370,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1,
        },
        shadowColor: "#333",
        shadowOpacity: 0.4
    },
    headerContainer: {
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "#000",
        fontSize: 16,
        fontWeight: "600",
    },
    cardImage: {
        height: 200,
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    socialLinks:{
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#888888',
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 6,
        elevation:2
    }
})