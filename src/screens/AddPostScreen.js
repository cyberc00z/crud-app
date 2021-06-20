import React, { useState } from "react";
import {View,StyleSheet,TouchableOpacity, ToastAndroid, Alert,Image} from "react-native";
import {TextInput} from "react-native-paper";
import {auth, db} from "../utils/firebase";
import firebase from "firebase";
import {Button} from "galio-framework";

export const navigationOptions = ({navigation}) => ({
    title:"NEW POST",
    headerLeft: () => (
        <TouchableOpacity
        style={{paddingLeft: 15}}
        onPress={()=>navigation.goBack()}
        >
         <Image 
         style={{width:24, height:24}}
         source={require("../images/icons/close.png")}
         />
        </TouchableOpacity>
    ),
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 15,
        textAlign:"center"
    }
});

const AddPostScreen = ({navigation}) => {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const onPostUpload = () => {
        if (!title){
            Alert.alert("Cann't start a discussion without a Title");
            return;
        }
        if (!desc){
            Alert.alert("Cann't Start a discussion without a description");
            return;
        }
        return (
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                title: title,
                desc:desc ,
                email: auth.currentUser.email,
                displayName: "C3P0",
                photoURL: "https://source.unsplash.com/random" 
            }).then(() => {
                navigation.goBack();
                setTitle("");
                setDesc("");
            }).catch((error) => {
                JSON.stringify(error);
                console.log(error);
                Alert.alert(error.message);
            })
        )
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.addPostContent}>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.textInputTitle}
                placeholder="Title"
                autoCapitalize="sentences"
                autoFocus={true}
                maxLength={80}
                numberOfLines={3}
                textAlignVertical="top"
            />
            <TextInput
                value={desc}
                onChangeText={(text)=> setDesc(text)}
                style={styles.textInputDesc}
                placeholder="Details in 300 words max."
                autoCapitalize="sentences"
                maxLength={300}
                multiline={true}
                numberOfLines={8}
                textAlignVertical="top"
            />
           </View>
            <TouchableOpacity>
            <Button style={styles.button} onPress={onPostUpload}  type="solid" capitalize shadowColor shadowless>Login</Button>    
            </TouchableOpacity>     
        </View>
        
    );
}

export default AddPostScreen;

/*
export default class AddPostScreen  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            desc: "", 

            isLoading: false
        };
    }

    setTitle = (title) => {
        this.setState({
            title:title, 
        }); 
    };
    setDesc = (desc) => {
       this.setState({
           desc: desc
       })
    }
    
    onPostUpload = async () => {
        const {title, desc} = this.state;
        if (!title){
            Alert.alert("Cann't Start a Discussion without a Title");
            return;
        }  
        if (!desc){
            Alert.alert("Need Description...");
            return;
        }
        try {
            this.setState({
                isLoading: true,
            });
           
            this.setState({
                isLoading: false,
                title: '',
                desc: ''
            });
            this.props.navigation.goBack();
        } catch (err){
            console.log(err),
            ToastAndroid.showWithGravity(
                err.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            )
        }
        
    };

    render(){
        const {title , desc} = this.state;

    return (
            <View style={styles.container}>
                <View style={styles.addPostContent}>
                <TextInput
                    value={title}
                    onChangeText={(title) => this.setTitle(title)}
                    style={styles.textInputTitle}
                    placeholder="Title"
                    autoCapitalize="sentences"
                    autoFocus={true}
                    maxLength={80}
                    numberOfLines={3}
                    textAlignVertical="top"
                />
                <TextInput
                    value={desc}
                    onChangeText={(desc)=>this.setDesc(desc)}
                    style={styles.textInputDesc}
                    placeholder="Details in 300 words max."
                    autoCapitalize="sentences"
                    maxLength={300}
                    multiline={true}
                    numberOfLines={8}
                    textAlignVertical="top"
                />
               </View>
                <TouchableOpacity>
                <Button style={styles.button} onPress={this.onPostUpload}  type="solid" capitalize shadowColor shadowless>Login</Button>    
                </TouchableOpacity>     
            </View>
            
        );
    }
};
*/

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f2f2ff"
    },
    addPostContent: {
        backgroundColor:"#fff"
    },
    textInputTitle:{
        fontSize: 18,
        backgroundColor:"#fff"
    },
    textInputDesc:{
        fontSize:15,
        backgroundColor:"#fff"
    },
    button: {
        marginLeft:100
    }  
})