import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({title}) =>{
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title: 'Howdy!',
};

const styles = StyleSheet.create({
    header: {
      height: 80,
      padding: 15,
      backgroundColor: '#2D2424',
    },
    text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
      marginTop: 22,
    },
  });
  
  export default Header;