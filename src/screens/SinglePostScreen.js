import React from "react";
import {SafeAreaView, View, StyleSheet} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

import ReplyIcon from "../images/icons/reply.png";

export const navigationOptions = ({navigation}) => ({
    title: "POST DETAIL",
    headerLeft: ()=> (
        <View style={{paddingLeft:15}}>
       <Button onPress={()=>navigation.goBack()}  />
        </View>
    ),
    headerTitleStyle: {
        fontWeight:"500",
        fontSize: 13
    }
});

export default class SinglePostScreen extends React.Component{
    render(){
        return(
            <View>
                This is Single Post Screen.
            </View>
        )
    }
}