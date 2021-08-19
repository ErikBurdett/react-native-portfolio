import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Profilephoto from './components/Profilephoto';
import NameandBio from './components/NameandBio';
import CoverPhoto from './components/CoverPhoto';
import ResumeButton from './components/ResumeButton';
export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Howdy!"/>
      <CoverPhoto/>
      <Profilephoto/>
      <NameandBio/>
      <ResumeButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    
  },
  text: {
    
  }
});
