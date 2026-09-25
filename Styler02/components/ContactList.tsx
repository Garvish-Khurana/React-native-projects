import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'

export default class ContactList extends Component {
  render() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ]
    return (
      <View>
        <Text style={styles.headingText}>ContactList</Text>
        <ScrollView
        style={styles.container}
        scrollEnabled={false}
        >
            {contacts.map( ({uid, name, status, imageUrl}) => (
                <View key={uid} style={styles.userCrad}>
                    <Image
                    source={{
                        uri: imageUrl
                    }}
                    style={styles.userImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ) )}
        </ScrollView>
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
    container: {
        paddingHorizontal: 16,
        marginBottom: 3
    },
    userCrad: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 3,
        backgroundColor: "#b7b7b7",
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60/2,
        marginRight: 14
    },
    userName:{
        fontSize: 16,
        fontWeight: "bold",
        color: "#000"
    },
    userStatus:{
        fontSize: 12
    },
})