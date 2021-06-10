import React from "react";
import {ScrollView, Text} from "react-native";
import { Button } from "react-native-elements";

export const navigationOptions = ({ navigation }) => ({
   headerStyle: {
       backgroundColor: "transparent",
       borderBottomColor: "transparent",
    },
    headerRight: () => (
       <Button onPress={() => navigation.navigate("EditProfile")} style={{marginRight: 10}} title="Edit Profile" />
    ),
    headerTransparent: true,
    headerBackTitle: null
})

export default class ProfileScreen extends React.Component{
    render(){
        return (
            <ScrollView style={{flex:1}} >
              <Text>
                  This is Profile 
              </Text>
            </ScrollView>
        )
    }
}