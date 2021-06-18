import React, { useState , useEffect} from 'react'
import {Button,Input,Block, theme} from "galio-framework";
import {View,Text,StyleSheet,KeyboardAvoidingView,Platform, Keyboard, ToastAndroid} from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { auth } from '../utils/firebase';


const LoginScreen = ({navigation})  => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        const cleanup = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if (authUser){
                 navigation.replace('BottomTabNavigator');
            }
        });
        return cleanup;
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email,password)
        .catch((error) => ( 
            JSON.stringify(error),
            ToastAndroid.showWithGravity(
                error.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        ));
    }
    return (
          <KeyboardAvoidingView
           behavior={Platform.OS==='android' ? "padding": "height"}
           style={styles.container}
          >
            <Block style={styles.inner}>
                <Input  placeholder="Email" type="email-address" autoFocus value={email}   onChangeText={(text) =>setEmail(text)} color={theme.COLORS.BLACK} style={{borderColor: theme.COLORS.INFO, fontSize:30}} placeholderTextColor={theme.COLORS.BLACK}  />
                <Input placeholder="Password" type="visible-password"   placeholderTextColor={theme.COLORS.BLACK} value={password} onChangeText={(text) => setPassword(text)} color={theme.COLORS.BLACK} onSubmitEditing={signIn} scrollEnabled />
           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
            <Button contentStyle={styles.button} onPress={signIn}  type="solid" capitalize shadowColor shadowless >Login</Button>
           </TouchableWithoutFeedback>
            {/*<TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
            <Button title="Forget Password ?" onPress={()=>navigation.navigate('ForgetPassword')} style={styles.text} type="clear" />
    </TouchableWithoutFeedback>*/}
             <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
                 <Text style={styles.text} >First Time? Create an Account </Text>
             </TouchableOpacity>
            <View style={{height: 100}} />
          </Block>

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
        backgroundColor:"#000"
    },
    inner: {
        width:300,
        marginTop:220,
        
    },
    button: {
        width:200,
        marginTop: 10,
        marginLeft:200,
    },
    text : {
       color:theme.COLORS.WARNING,
       textAlign:'center',
       fontSize: 13
    }
})
