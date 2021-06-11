import React from "react";
import {View, Animated} from "react-native";

const CoverImage = ({source}) => {
    
    return(
        <View style={{flex:1}}>
         <Animated.Image
           source={source}
           style={{
               width:"100%",
               height:200,
               zIndex:1,
               opacity:0.5,
               position:"absolute",
           }}

         />
        </View>
    )
}
export default CoverImage;