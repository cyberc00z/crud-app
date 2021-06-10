import React from "react";
import {Image, View, Text, TouchableOpacity } from "react-native";
import PostIcon from "../images/icons/post.png";

export const navigationOptions = ({navigation}) => ({
    title:"DISCOVER",
    headerTitleStyle: {
      fontWeight:"500",
      fontSize:13
    },
    headerLeft: () => (
       <View style={{paddingLeft:15}} >
         <Image 
         source={require('../images/icons/categories.png')}
         style={{width:23, height:23}}
         />
       </View>
    ),
    headerRight: ()=>(
        <TouchableOpacity 
          onPress={()=>navigation.navigate("NewPost")}
        >
            <Image source={PostIcon} style={{width:23, height:23}} />
        </TouchableOpacity>
    )
});

export default class SearchScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Search Screen boyz</Text>
            </View>
        )
    }
}