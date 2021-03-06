import React from "react";
import {Image} from "react-native";

const Icon = ({name}) => {
    if (name == "home"){
        return (
            <Image
            source={require("../images/icons/home.png")}
            style={{width:20, height:20}}
            />
        );
    } else if (name == "notifications"){
        return (
            <Image
            source={require("../images/icons/notifications.png")}
            style ={{width: 20, height:20}}
            />
        );
    } else if (name == "search"){
        return (
            <Image
            source={require("../images/icons/search.png")}
            style={{width: 20, height: 20}}
            />
        );
    }
    else if (name=="post"){
        return (
            <Image
            source={require("../images/icons/post.png")}
            style={{width:20, height:20}}
            />
        )
    }
    
};

export default Icon;