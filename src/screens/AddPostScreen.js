import React from "react";
import {View,StyleSheet,TouchableOpacity, ToastAndroid, Alert} from "react-native";
import {TextInput} from "react-native-paper";
import {auth, db} from "../utils/firebase";
import firebase from "firebase";
import {Button} from "../components/Button";

export const navigationOptions = ({navigation}) => ({
    title:"NEW POST",
    headerLeft: () => (
        
          <Button style={{paddingLeft: 15}} pressed={()=>navigation.goBack()} >
              Cancel
           </Button> 
    ),
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 15,
        textAlign:"center"
    }
});

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
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                title: title,
                desc:desc ,
                email: auth.currentUser.email,
                displayName: "C3P0",
                photoURL: "https://source.unsplash.com/random" 
            })
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
                    <Button style={{textAlign:"center"}} pressed={this.onPostUpload}>Post</Button>       
            </View>
            
        );
    }
};
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
        marginLeft:-250
    }  
})