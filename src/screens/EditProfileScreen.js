import React from "react";
import {View,  Text} from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

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
      <View style={{paddingLeft: 15}}>
          <Button onPress={()=>navigation.goBack()} title="Back" />
      </View>
    ),
    headerStyle:{
        paddingLeft:15,
        paddingRight:15,
    },
    headerTitleStyle:{
        fontWeight: "500",
        fontSize:13
    }
})

export default class EditProfileScreen extends React.Component{
    render(){
        return (
            <View>
                <Text>This is EditProfile.</Text>
            </View>
        )
    }
}