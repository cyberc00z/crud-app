
import React from 'react'
import { TouchableOpacity,View, Text, ImageComponent } from 'react-native'
import {Image} from "react-native-elements"

import ReplyIcon from "../images/icons/reply.png";
import CategoriesIcon from "../images/icons/categories.png"
import PostIcon from "../images/icons/post.png";


export const navigationOptions = ({navigation}) => ({
    title: "NOTIFICATIONS",
    headerLeft: ()=> (
      <View style={{paddingLeft:15}}>
         <Image source={CategoriesIcon} style={{width:23, height:23}} />
      </View>
    ),   
    headerRight: () => (
      <TouchableOpacity onPress={()=>navigation.navigate("NewPost")} style={{paddingLeft:15}}>
        <Image source={PostIcon} style={{width:23, height:23}} />
      </TouchableOpacity>
    ),
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 13
    }
});

export default class NotificationsScreen extends React.Component{
    render(){
        return (
            <View>
                <Text>This is Notifications.</Text>
            </View>
        )
    }
}