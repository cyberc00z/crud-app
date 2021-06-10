import React, { useState , useEffect} from 'react'
import {Input,Button} from "react-native-elements";
import {View,StyleSheet,KeyboardAvoidingView,Platform, Keyboard,Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { auth } from '../utils/firebase';

const LoginScreen = ({navigation})  => {

    const [email, setEmail] = useState('');
    const [passowrd, setPassword] = useState('');

    useEffect(() => {
        const cleanup = auth.onAuthStateChanged((authUser) => {
            if (authUser){
                navigation.navigate('Home');
            }
        });
        return cleanup
    }, [])

    const signIn = () => {
     console.log("Look at this bro!");
     navigation.navigate('Home')
    }
    return (
          <KeyboardAvoidingView
           behavior={Platform.OS==='android' ? "padding": "height"}
           style={styles.container}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>       
            <View style={styles.inner}>
                <Input placeholder="Email" autoFocus type="email"  />
                <Input placeholder="Password" autoFocus type="password" secureTextEntry />

            <Button contentStyle={styles.button}  title="Login" onPress={signIn}   />
            <Text onPress={()=>navigation.navigate('Forget_Password')} style={styles.text} >
                Forget Password ? 
            </Text>
            <Button onPress={() => navigation.navigate('Register')} contentStyle={styles.button}  title="Register" type="outline"   />

            <View style={{height: 100}} />
          </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        backgroundColor:"white"
    },
    inner: {
        width:300,
        marginTop:200,
    },
    button: {
        width:200,
        marginTop: 10,
    },
    text : {
       color:'#2C6BED',
       textAlign:'center',
       fontSize: 15
    }
})
