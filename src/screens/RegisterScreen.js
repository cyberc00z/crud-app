import React, { useState, useEffect } from "react";
import {Alert, Keyboard,Platform , StyleSheet,ToastAndroid, TouchableOpacity } from "react-native";
import {KeyboardAvoidingView } from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {Button,Input,Block, theme} from "galio-framework";
import {auth, db} from "../utils/firebase";
import firebase from "firebase";


export const navigationOptions = ({navigation}) => ({
    title: "Create Account",
    headerStyle: {
        backgroundColor:"black",
    },
    headerTitleStyle: {
        color:"white",
        marginLeft:50,
    },

})

const RegisterScreen  = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const names = ["C3P0", "R2D2","WAR"];
    const onContinue = () => {
        return (
            auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                auth.currentUser.updateProfile({
                    displayName: names[Math.floor(Math.random() * names.length)],
                    photoURL: "https://source.unsplash.com/random"
                }).then((authUser) => {
                    console.log(authUser);
                }).catch((error) => {
                    JSON.stringify(error);
                    console.log("Profile Update Error : ", error.message);
                })
                
            }).catch((error) => {
                JSON.stringify(error);
                console.log(error);
                ToastAndroid.showWithGravity(
                    error.message,
                    ToastAndroid.CENTER,
                    ToastAndroid.LONG
                );
            })
        )
    }
   
    return (
        <KeyboardAvoidingView  behavior={Platform.OS==="android" ? "padding" :"height" }  style={styles.container} >
            
        <Block style={styles.inner}>
            <Input  placeholder="Your University Email" type="email-address" autoFocus value={email}   onChangeText={(text) => setEmail(text)} color={theme.COLORS.BLACK} style={{borderColor: theme.COLORS.INFO, fontSize:30}} placeholderTextColor={theme.COLORS.BLACK}  />
            <Input placeholder="Password"  password={true}   placeholderTextColor={theme.COLORS.BLACK} value={password} onChangeText={(text) => setPassword(text)} color={theme.COLORS.BLACK} />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                <Button shadowless color="info" capitalize  style={styles.button} onPress={onContinue}>Continue</Button>  
            </TouchableWithoutFeedback>
            
        </Block>
     
      </KeyboardAvoidingView>
    )
}
export default RegisterScreen;

/*
export default class RegisterScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password: "",
            username: "",
        }; 
    } 
    setEmail = (email) => {
        this.setState({
            email: email,
        })
    };
  
    setPassword = (password) => {
        this.setState({
            password: password,
        })
    }

    onContinue = async () => {
        const {email, password  } = this.state;
        return (
            auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                db.collection("Users").
                if(authUser){
                    this.props.navigation.navigate("BottomTabNavigator");
                }             
            }).catch((error) => {
                JSON.stringify(error)
                console.log(error);
                Alert.alert(error.message);
            })
        )
    }
    render(){
        const {email, password }= this.state
        return (
            <KeyboardAvoidingView  behavior={Platform.OS==="android" ? "padding" :"height" }  style={styles.container} >
                
            <Block style={styles.inner}>
                <Input  placeholder="Your University Email" type="email-address" autoFocus value={email}   onChangeText={(email) => this.setEmail(email)} color={theme.COLORS.BLACK} style={{borderColor: theme.COLORS.INFO, fontSize:30}} placeholderTextColor={theme.COLORS.BLACK}  />
                <Input placeholder="Password"  password={true}   placeholderTextColor={theme.COLORS.BLACK} value={password} onChangeText={(password) => this.setPassword(password)} color={theme.COLORS.BLACK} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                    <Button shadowless color="info" capitalize  style={styles.button} onPress={this.onContinue}>Continue </Button>  
                </TouchableWithoutFeedback>
                
            </Block>
         
          </KeyboardAvoidingView>
        )
    }
}
*/
const styles = StyleSheet.create({
    container: {
       flex:1,
       alignItems:"center",
       justifyContent: "center",
       padding : 10,
       backgroundColor: "#000"
    },
    inner: {
        width: 300,
        marginTop:160,
    },
    button: {
        width:200,
        marginTop: 10,
        marginLeft:40
    }

})
