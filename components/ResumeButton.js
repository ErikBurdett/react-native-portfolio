import React from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';


export default function ResumeButton(){
    return (
      <View style={styles.container}>
       <Button title="See My Resume" onPress={ ()=>{ Linking.openURL('https://docs.google.com/document/d/1fDcMZYf-CJKaJSnLwLrEPmHLchiAcvSDplsJKbeO1FU/edit?usp=sharing')}} />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    // flex: ,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: 'lightblue',
    borderWidth: 2,
    marginRight: 10,
    marginLeft: 10,
  },
});