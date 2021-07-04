import React, {useState, useEffect, useCallback} from "react";
import { 
   Image,
   ScrollView,
   TouchableOpacity,
   ToastAndroid,
} from "react-native";
import {Avatar} from "react-native-elements"
import { auth, db } from "../utils/firebase";
import CustomListItem from "../components/CustomListItem";
import {Block} from "galio-framework";

export const navigationOptions = ({navigation}) => ({
   title: "Spancer",
   headerTitleStyle:{
      fontWeight:"500",
      fontSize: 20,
      textAlign:"center",
   },
   headerLeft: () => (
      <TouchableOpacity onPress={()=>(
         auth.signOut()
         .then(()=>navigation.replace("Login"))
         .catch((error) =>{
           JSON.stringify(error),
           ToastAndroid.show(
              error.message,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
           )
           })
         )} style={{marginLeft:20}}  >
       <Avatar rounded  size={40} source={{uri: auth?.currentUser?.photoURL}} />   
      </TouchableOpacity>

   ),
   headerRight: ()=> (
      <TouchableOpacity style={{marginRight: 20}} onPress={()=>navigation.navigate("Chats")} >
      <Image source={require("../images/icons/chat.png")} style={{width:25, height:25}} />    
      </TouchableOpacity>
   )
})

const delay = (timeout) => {
  return  new Promise(res => {
     setTimeout(res, timeout)
  })
}

const HomeScreen  = ({navigation}) => {  
      //console.log(auth.currentUser);   
      const [loading, setLoading] = useState(false);
      const [posts, setPosts] = useState([]);
      const loadMore = useCallback(async () => {
         setLoading(true);
         delay (1500).then(() => setLoading(false));
      }, [loading]);

      useEffect(() => {
         const unsubscribe = db.collection("posts")
         .orderBy("timestamp" ,"desc")
         .onSnapshot((snapshot) => 
               setPosts(
                  snapshot.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data()
               }))
            )
         );
         return unsubscribe;
      }, []);
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
            <ScrollView>
               {posts.map(({id, data : {
                 photoURL,displayName,timestamp,desc ,title , commentNum, upVoteNum, downVoteNum
               }}) => (
                  <CustomListItem key={id} id={id} photoURL={photoURL} title={title} displayName={displayName} timestamp={timestamp}  desc={desc} commentNum={commentNum} upVoteNum={upVoteNum} downVoteNum={downVoteNum} expandPost={expandPost} />
               )
               )}
              
            </ScrollView>
         </Block> 
           
      )
}

export default HomeScreen;


