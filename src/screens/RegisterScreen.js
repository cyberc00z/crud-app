import React from "react";
import {Keyboard, Platform, StyleSheet,View} from "react-native";
import {Button, Input}  from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const RegisterScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS==="android" ? "padding" :"height" }
        style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                 <Input placeholder="Full Name" autoFocus type="text"  />
                 <Input placeholder="Email" type="email"    />
                 <Input  placeholder="Password" type="password" secureTextEntry  />
                </View>
               <Button  containerStyle={styles.button} title="Create An account" />
               <View style={{height:100}} />  
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems:"center",
       justifyContent: "center",
       padding : 10,
       backgroundColor: "white"
    },
    inner: {
        width: 300,
        marginTop:200,
    },
    button: {
        width:200,
        marginTop: 10,
    }

})