import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

export default function Profilephoto(){
    return (
        <View style={styles.container}>  
            <Image
                style={styles.image}
                source={{uri:"https://photos.smugmug.com/TOME/i-vQR2MTp/0/56dff4ec/X2/self-X2.jpg"}}
                resizeMode={"cover"}
                />
                
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: 'center',
        

    },
    image: {
        width: 150,
        height: 150,
        borderColor: 'lightblue',
        borderWidth: 2,
        borderRadius: 75,
        marginTop: 180,
        
  },
});


