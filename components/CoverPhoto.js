import React from 'react'
import { StyleSheet, View, Image} from 'react-native';

export default function CoverPhoto() {
    return (
       <View style={styles.container}>
           <Image
           style={styles.image}
           source={{uri:"https://photos.smugmug.com/Popular-Prints/i-JWJpKbJ/0/40224786/X4/DSC02348-X4.jpg"}}
           resizeMode={"stretch"}
           />

           
       </View>
    )
}

const styles = StyleSheet.create({
    containter:{
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: "center"
    },
    image:{
        width: '100%',
        height: 200,
    }
})


