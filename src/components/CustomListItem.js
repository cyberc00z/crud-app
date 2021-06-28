import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {StyleSheet, Text, View} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { db } from "../utils/firebase";



const CustomListItem = ({id, photoURL,displayName,timestamp,desc ,title, expandPost }) => {        
    return (
        <ListItem key={id} bottomDivider style={styles.container} onPress={()=>expandPost(id,photoURL,displayName,timestamp,desc ,title)} >
            <Avatar
              rounded
              size={50}
              source={{
                  uri: photoURL
              }}
            />
            <ListItem.Content>
              <ListItem.Title>
                {title}
              </ListItem.Title>
                <ListItem.Subtitle numberOfLines={2} ellipsizeMode="tail" >
                  {desc}
                </ListItem.Subtitle>
              <ListItem.Subtitle>
                posted by @{displayName}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                {timestamp?.toDate().toUTCString()} ago
              </ListItem.Subtitle>
            </ListItem.Content>

        </ListItem>
    )
}

export default CustomListItem;

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1, 
    flexDirection:"column",
    top:10,
    paddingBottom:5, 
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:"#bbb",
    justifyContent:"center" 
  }

})