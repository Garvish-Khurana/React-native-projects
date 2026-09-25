import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText} >ElevatedCards</Text>
        <ScrollView horizontal={true} style={ styles.container }>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Tap</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>me</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>to</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>Scroll</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>more..</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    backgroundColor: "#991478",
    color: "#525722",
    fontWeight: "bold",
    paddingHorizontal: 14,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  card:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardElevated: {
    backgroundColor: "#CAD5E2",
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowColor: "#333",
    shadowOpacity: 0.4,
    shadowRadius: 2,
  }
})