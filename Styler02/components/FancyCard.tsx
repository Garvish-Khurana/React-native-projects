import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Trending places</Text>
        <View style={[ styles.card, styles.cardElevated ]}>
        <Image
        source={{
            uri:"https://assets.architecturaldigest.in/photos/68aee6b6c217baca2192039c/16:9/w_1920,c_limit/Untitled%20design%20-%202025-08-27T163622.470.png"
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>White Marble Mausoleum, Agra</Text>
            <Text style={styles.cardDescription}>The Taj Mahal is located in Agra, a city in the northern Indian state of Uttar Pradesh. It sits on the right bank of the Yamuna River.” 
            </Text>
            <Text style={styles.cardFooter}></Text>
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
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16

    },
    cardElevated: {
        backgroundColor: "#FFFFFF",
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: "#000",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 4,
    },
    cardLabel: {
        color: "#000",
        fontStyle: "italic",
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        height: 100,
        color: "#242B2E",
        fontSize: 12,
        marginBottom: 6,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: "#000"
    },
})