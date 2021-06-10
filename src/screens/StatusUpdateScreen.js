import React from "react";
import {View,Image ,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    headerRight: () => (
        <TouchableOpacity>
            <Text style={{fontSize:17,color:"#007AFF",}} >Send</Text>
        </TouchableOpacity>
    ),
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 13
    }
})

export default class StatusUpdateScreen extends React.Component {
    render(){
        return (
            <View>
            <Text>Thia ia Stratus Update </Text>
            </View>
        )
    }
}