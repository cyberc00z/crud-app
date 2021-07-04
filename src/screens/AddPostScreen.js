import React, { useState } from "react";
import {View,StyleSheet,TouchableOpacity,KeyboardAvoidingView, Alert,Image,SafeAreaView} from "react-native";
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
    const [upVoteNum, setUpVoteNum] = useState(1);
    const [downVoteNum , setDownVoteNum] = useState(0);
    const [commentNum, setCommentNum] = useState(0);

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
                createdBy: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                upVoteNum : upVoteNum,
                commentNum: commentNum,
                downVoteNum : downVoteNum
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
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView 
              behavior={Platform.OS==="android" ? "padding": "height"}
              style={styles.container}
            >
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
            <Button style={styles.button} onPress={onPostUpload}  type="solid" capitalize shadowColor shadowless>Post</Button>    
            </TouchableOpacity>   
            </KeyboardAvoidingView>  
        </SafeAreaView>
        
    );
}

export default AddPostScreen;

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