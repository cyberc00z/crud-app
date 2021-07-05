import React from "react";
import {StyleSheet, ScrollView} from "react-native";
import { ListItem, Avatar } from "react-native-elements";



const CustomListItem = ({id, photoURL,displayName,timestamp,desc ,title ,expandPost,commentNum, Vote }) => {        
    return (
      <ScrollView>
        <ListItem key={id} bottomDivider style={styles.container} onPress={()=>expandPost(id,photoURL,displayName,timestamp,desc ,title, commentNum, Vote)} >
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
                <ListItem.Subtitle style={styles.num}>
                  {commentNum}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={styles.num}>
                  {Vote}
                </ListItem.Subtitle>
              <ListItem.Subtitle>
                posted by @{displayName}
              </ListItem.Subtitle>
              <ListItem.Subtitle>
                {timestamp?.toDate().toUTCString()} ago
              </ListItem.Subtitle>
            </ListItem.Content>

        </ListItem>
        </ScrollView>
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
    borderBottomColor:"rgb(255, 255, 255)",
    justifyContent:"center" 
  },
  num: {
     display:"none"
    //display:"flex",
    //flexDirection:"row"
  }

})