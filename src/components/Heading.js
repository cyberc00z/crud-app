import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Heading = ({children}) => (
    <View style={styles.container}>
        <Text style={styles.text} >{children}</Text>
    </View>
);

const styles = StyleSheet.create({
    
    container: {
        marginTop:15, 
        paddingRight:15, 
        paddingLeft:15
    },
    text: {
      fontSize:18, 
      fontWeight:"300",
      color: "#535B61"
    }
})

export default Heading;