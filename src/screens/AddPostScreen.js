import React  from "react";
import {View,Image ,StyleSheet,TouchableOpacity, ToastAndroid} from "react-native";
import {TextInput,Button} from "react-native-paper";
//import { Button } from "galio-framework";

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
            ToastAndroid.showWithGravity(
            "Can't start a discussion without Title",
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            )
            return;
        }
        if (!desc){
            ToastAndroid.showWithGravity(
                "Can't start a discussion without enough details...",
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                )
            return;
        }
        try {
            this.setState({
                isLoading: true,
            });
            this.setState({
                isLoading: false,
                title: "",
                desc: ""
            });
            this.props.navigation.goBack();
        } catch (err){
            ToastAndroid.showWithGravity(
                err.message,
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
            );
            this.setState({
                isLoading: false
            });
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
                <TouchableOpacity>
                    <Button style={styles.button} icon="plus">media</Button>
                </TouchableOpacity>
               </View>
               <TouchableOpacity>
                    
                    <Button  onPress={this.onPostUpload}>Post</Button>       
               </TouchableOpacity>
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