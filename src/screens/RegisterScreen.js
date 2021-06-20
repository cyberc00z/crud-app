import React from "react";
import {Alert, Keyboard,Platform , StyleSheet,ToastAndroid, TouchableOpacity } from "react-native";
import {KeyboardAvoidingView } from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";
import {Icon} from "native-base";
import {Button,Input,Block, theme} from "galio-framework";
import {auth} from "../utils/firebase";
import { ScreenStackHeaderLeftView } from "react-native-screens";

export const navigationOptions = ({navigation}) => ({
    title: "Create Account",
    headerStyle: {
        backgroundColor:"black",
    },
    headerTitleStyle: {
        color:"white",
        textAlign:"center"
    },
    headerLeft:() => {
        <TouchableOpacity onPress={()=>navigation.goBack()}>
           <Button icon="arrow-back" iconFamily="antDesign"  />
        </TouchableOpacity>
    }

})

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
