// 
import React from "react";
import {View ,  ScrollView  ,KeyboardAvoidingView} from "react-native";
import FormField from "./FormField";
import UploadImage from "../components/UploadImage";
import { Avatar } from "react-native-elements";
import CoverImage from "./CoverImage";
import { auth } from "../utils/firebase";


export default function EditProfileForm(props){
    return (
        <EditProfileFormInner {...props}  /> 
    );
}

class EditProfileFormInner extends React.Component{
    constructor(props){
        super(props);
        this.state = {...props}
    }
    componentDidMount(){
        this.props.registerSave(async ()=> {
            await this.props.user.update(this.state);
            this.props.changeUserData();
        });
    }

    _onUploadButtonPress(){
        console.log("onUploadButtonPress");
    }
    render(){
        return (
            <KeyboardAvoidingView style={{flex:1, backgroundColor:"#ffffff"}} >
            <ScrollView>
             <CoverImage source={{ uri : auth?.currentUser?.photoURL}} />
             <View
             style={{
                flexDirection:"row",
                alignItems: "center",
                paddingRight:15,
                paddingLeft: 15, 
                height: 200
             }}
             >
                   <UploadImage _onUploadButtonPress={this._onUploadButtonPress} />
              </View>
                <View style={{padding:15}}>
                   <FormField
                   value={this.state.name}
                   label={"Username"}
                   textContentType={"username"}
                   onChangeText={text=> this.setState({name:text})}
                   />
                   <FormField
                    value={this.state.url}
                    label={"Website"}
                    textContentType={"URL"}
                    onChangeText={text => this.setState({url:text})}
                   />
                   <FormField
                   value={this.state.bio}
                   label={"Bio"}
                   onChangeText={text => this.setState({bio: text})}
                   />
                   <FormField
                   value={this.state.email}
                   label={"Email"}
                   textContentType={"emailAddress"}
                   onChangeText={text => this.setState({email: text})}
                   />
                </View>
              </ScrollView>            
            </KeyboardAvoidingView>
        )
    }
}