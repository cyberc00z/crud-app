import React from "react";
import {Text , TouchableOpacity, StyleSheet} from "react-native";

const Button = ({children, pressed}) => (
    <TouchableOpacity style={styles.button} onPress={pressed}>
         <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
)

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#ffffff",
        padding:10,
        paddingTop:7,
        paddingBottom: 7,
        borderRadius:4,
        opacity:0.9,
        shadowColor:"#000",
        shadowOffset: {width:0, height:0},
        shadowOpacity:0.4,
        shadowRadius:5
    },
    buttonText: {
        fontSize: 15,
       
    }
});