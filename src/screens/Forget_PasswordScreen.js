import React from "react";
import {Input, Button} from "react-native-elements";
import {View, StyleSheet,KeyboardAvoidingView, Platform, Keyboard,Text} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";

const Forget_PasswordScreen = ({navigation}) => {
      return (
          <KeyboardAvoidingView
          behavior={Platform.OS==='android' ? "padding" : "height"}
          style={styles.contianer}
          >
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                 <Input placeholder="Your Registered Email" autoFocus type="email" />
                 <Button contentStyle={styles.button} title="Send Code" />
                <View style={{height:100}} />
              </View>
           </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
      )    
}

export default Forget_PasswordScreen;

const styles = StyleSheet.create({
    contianer: {
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:"white"
    },
    inner: {
        width:300,
        marginTop:200,
    },
    button: {
        width: 200,
        marginTop:10,
    },
    text: {
        color: "#2C6BED",
        textAlign:'center',
        fontSize:15
}
})