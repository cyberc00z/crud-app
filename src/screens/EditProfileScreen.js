import React from "react";
import {StatusBar,TouchableOpacity , Text} from "react-native";
import { Button,Icon } from "native-base";
import {CommonActions} from "@react-navigation/native";
import EditProfileForm from "../components/EditProfileForm";

export const navigationOptions = ({ navigation, route }) => ({
    title: "EDIT PROFILE",
    headerRight: ()=> (
     <TouchableOpacity
       style={{paddingRight:15}}
       onPress={()=>{
           route.params.saveFunc();
       }}
     >
         <Text>Save</Text>
     </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity style={{paddingLeft: 15}}>
          <Button iconLeft transparent >
             <Icon name="arrow-back" onPress={()=>navigation.goBack()} />
          </Button>
      </TouchableOpacity>
    ),
    headerTitleStyle:{
        fontWeight: "500",
        fontSize:13,
        textAlign:"center",
    }
})

export default class EditProfileScreen extends React.Component{
    componentDidMount(){
        this._navListener = this.props.navigation.addListener("didFocus", () => {
            StatusBar.setBarStyle("dark-content");
        });
    }
    
    render(){
        return (
            <EditProfileForm
            registerSave={saveFunc => {
                this.props.navigation.dispatch(CommonActions.setParams({saveFunc}));
            }}
            />
        );
    }
}