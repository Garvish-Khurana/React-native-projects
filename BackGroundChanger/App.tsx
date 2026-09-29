import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
SafeAreaProvider} from 'react-native-safe-area-context';
import { useState } from 'react';

function App() {
  const [ bgcolor,setBgColor] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = "#";

    for(let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random() * 16)];
    }

    setBgColor(color);
  }

  return (
    <SafeAreaProvider style={ {backgroundColor: bgcolor} }>
      <StatusBar barStyle='light-content'/>
      <View style={[styles.container]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnTxt: {
    fontSize: 24,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  bg:{
    backgroundColor:"#010101"
  }
})

export default App;
