import React, { useEffect, useState } from "react";
import {Block} from "galio-framework";;
import { StyleSheet,ScrollView, View, Text } from "react-native";
import ProfilePostItem from "./ProfilePostItem";
import {auth, db} from "../utils/firebase"


const ProfilePost = ({navigation}) => {
    
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const unsubscribe = db.collection("posts")
        .where("createdBy","==",auth.currentUser.email)
        .onSnapshot((snapshot) => 
        setPosts(
         snapshot.docs.map((doc) => ({
             id: doc.id,
             data: doc.data()
         }))   
        )
        )
        return unsubscribe;
    },[]);
    const expandPost = (id, photoURL,displayName,timestamp,desc ,title,commentNum, upVoteNum, downVoteNum) => {
        navigation.navigate("PostView", {
           id,
           photoURL,
           displayName,
           timestamp,
           desc,
           title,
           commentNum,
           upVoteNum,
           downVoteNum
        })
    }
    return (
        <Block>
            
            { 
                posts.map(({id, data : {
                 photoURL,displayName,timestamp,desc ,title , commentNum, upVoteNum, downVoteNum
                }}) => (
                   console.log(displayName),
                  
                  <ProfilePostItem key={id} id={id} photoURL={photoURL} title={title} displayName={displayName} timestamp={timestamp}  desc={desc} commentNum={commentNum} upVoteNum={upVoteNum} downVoteNum={downVoteNum} expandPost={expandPost} />
                
                )
               )}
              
               
         </Block> 
           
    )
}


export default ProfilePost;

const styles = StyleSheet.create({
    
})
