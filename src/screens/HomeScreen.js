import React from "react";
import {View, Text, StyleSheet,Image,TouchableOpacity} from "react-native";
import {Thumbnail} from "native-base"
import PostIcon from "../images/icons/post.png";
import ReplyIcon from "../images/icons/reply.png";


export const navigationOptions = ({navigation}) => ({
   title: "Home",
   headerTitleStyle:{
      fontWeight:"500",
      fontSize: 13
   },
   headerLeft: () => (
      <TouchableOpacity
      onPress={()=> navigation.navigate("Profile")}
      style={{paddingLeft: 15}}
      >
         <Thumbnail
         source={require('../images/assets/ss.jpg')}
         small         
         />

      </TouchableOpacity>
   ),
   headerRight: ()=> (
      <TouchableOpacity
      onPress={()=>navigation.navigate("NewPost")}
      style={{paddingRight: 15}}
      >
    <Image source={PostIcon} style={{width:23, height:23}} />
      </TouchableOpacity>
   )
})

export default class HomeScreen extends React.Component{
   render(){
      return (
         <View>
            <Text>
            </Text>
         </View>
      )
   }

}


const styles=StyleSheet.create({

})
