/**
 * user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = user.displayName;
  // "https://example.com/jane-q-user/profile.jpg"
  var photoURL = user.photoURL;
}, function(error) {
  // An error happened.
});
  
 */


import React from "react";
import {Keyboard,Platform,StatusBar ,StyleSheet,ToastAndroid,View} from "react-native";
import {KeyboardAvoidingView } from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {Button,Input,Block, theme} from "galio-framework";
import {auth} from "../utils/firebase";

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
                console.log(authUser);
                if(authUser){
                    this.props.navigation.navigate("Setup");
                }             
            }).catch((error) => {
                JSON.stringify(error)
                console.log(error);
                ToastAndroid.showWithGravity(
                   error.message,
                   ToastAndroid.CENTER,
                   ToastAndroid.LONG 
                )
            })
            
        )
    }

    render(){
        const {email, password }= this.state
        return (
            <KeyboardAvoidingView  behavior={Platform.OS==="android" ? "padding" :"height" }  style={styles.container} >
                
            <Block style={styles.inner}>
                <Input  placeholder="Email" type="email-address" autoFocus value={email}   onChangeText={(email) => this.setEmail(email)} color={theme.COLORS.BLACK} style={{borderColor: theme.COLORS.INFO, fontSize:30}} placeholderTextColor={theme.COLORS.BLACK}  />
                <Input placeholder="Password" type="visible-password" password={true}   placeholderTextColor={theme.COLORS.BLACK} value={password} onChangeText={(password) => this.setPassword(password)} color={theme.COLORS.BLACK} />
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
                    <Button shadowless color="info" capitalize  round  style={styles.button} onPress={this.onContinue}>Continue </Button>  
                </TouchableWithoutFeedback>
            </Block>
         
          </KeyboardAvoidingView>
        )
    }
}

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
        marginTop:170,
    },

    button: {
        width:200,
        marginTop: 10,
        marginLeft:40
    }

})
