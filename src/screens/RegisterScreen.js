import React, { useState } from "react";
import {Keyboard, Platform,ToastAndroid ,StyleSheet,View} from "react-native";
import {Button, Input}  from "react-native-elements";
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { auth } from "../utils/firebase";



const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const registerUser = () => {
      auth.createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
          console.log(authUser);
      }).catch((error) => ToastAndroid.showWithGravity(
          error,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        ))
    }
    
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS==="android" ? "padding" :"height" }
        style={styles.container}
        >
            <StatusBar style="light" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              
                <View style={styles.inner}>
                 <Input value={name} onChangeText={(text)=>setName(text)} placeholder="Full Name" autoFocus type="text"  />
                 <Input placeholder="Email" type="email"  name={email} onChangeText={(text)=>setEmail(text)}   />
                 <Input  placeholder="Password" type="password" secureTextEntry name={password} onChangeText={(text)=>setPassword(text)}  />
                </View>
               <Button  containerStyle={styles.button} title="Create An account" onPress={registerUser}  />
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
