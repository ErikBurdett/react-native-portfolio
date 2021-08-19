import React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, } from 'react-native';

export default function NameandBio(){
    return (
        <View>  
            <Text style={styles.name}>~Hi, I'm Erik~</Text>
            <Text style={styles.bio}>Full Stack Web Dev - Copy Writer - Photographer - Content Creator</Text>
            <Text style={styles.skills}>React - Node - Python - SQL - Postgres - Docker - CSS - ANT design - Bootstrap - HTML - Javascript - Adobe Suite - Wordpress - Strapi.js - Gatsby.js Headless CMSs - Photography & Video - Writing - Copy Writing - Editing - Publishing - Social Media Management </Text>

            
        </View>
        
    )
}

const styles = StyleSheet.create({
    name:{
        // flex: 1,
        backgroundColor: '#2D2424',
        color: '#fff',
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: 'center',
        marginTop: 170,
        fontSize: 20,
        

    },
    bio:{
        backgroundColor: '#2D2424',
        color: '#fff',
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: 'center',
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center'

    },
    skills:{
        backgroundColor: '#2D2424',
        color: '#fff',
        alignSelf: 'center',
        justifyContent: "center",
        alignContent: 'center',
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        marginRight: 10,
        marginLeft: 10,

    }
});