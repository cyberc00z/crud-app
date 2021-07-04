import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {Card} from "react-native-elements";


const Repost = ({item}) => (
    <View style={styles.item}>
      <Text>
        Username: reposted your post {item.object.type}   
        </Text> 
       {item.object.type === "link" ? (
           <Card
           item={item}
           />
        ): null}
        {item.object.type === "post" ? (
            <View style={{marginLeft:58, marginTop:15}} >
                <Text>post</Text>
            </View>
        ): null}
        {item.object.type === "comment" ? (
            <View style={{marginLeft:58, marginTop:15}}>
               <Text>comment</Text>
            </View>
        ):null}
    </View>
);

export default Repost;

const styles = StyleSheet.create({
    item: {
        borderBottomWidth: 1,
        borderBottomColor:"#DADFE3",
        paddingTop:15,
        paddingBottom: 15,
        paddingLeft:12, 
        paddingRight: 12
    }
});
