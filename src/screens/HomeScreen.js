import React, {useState, useEffect, useCallback} from "react";
import { 
   StyleSheet,
   Image,
   ScrollView,
   TouchableOpacity,
   ToastAndroid,
   Alert,
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
       <Avatar rounded  size={40} source={require("../images/assets/ss.jpg")} />   
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
      const expandPost = (id, photoURL,displayName,timestamp,desc ,title) => {
         navigation.navigate("PostView", {
            id,
            photoURL,
            displayName,
            timestamp,
            desc,
            title
         })
      }

      return (
         /*<Container style={{justifyContent:"flex-start", backgroundColor:"#001133"}} >
           <Content>
              <ScrollView>
           {posts.map(({id, data: {photoURL,displayName,timestamp,desc ,title}}) => 
             <Card key={id} style={styles.card}>
                <CardItem style={styles.cardItem}>
                  <Left>
                  <TouchableOpacity onPress={()=>Alert.alert("we don't have this profile")} >
                  <Avatar source={{uri:photoURL}} rounded size={40} />
                  </TouchableOpacity>   
                  <Body>
                     <Text style={{fontSize:15}} >{displayName}</Text>
                     
                     <Text style={{fontSize: 12}}>{timestamp?.toDate().toUTCString()}</Text>
                  </Body>
               </Left>
               <Right>
                  <Body>
                  <Button transparent >
                     <Icon name="bookmark-outline" />
                  </Button>
                 
                  </Body>
               </Right>
               <TouchableOpacity  onPress={dotOptions} >
               <Image source={require("../images/icons/dots.png")} style={{height:20, width:20}} />
               </TouchableOpacity>
              
            </CardItem>
           
            <CardItem  >
               <Body onPress={()=>navigation.navigate("Single_Post")} >
                  <Text style={{fontSize:15,color:"black"}}>{title}</Text>
                  <Text style={styles.postText} >{desc}</Text>
               </Body>
            </CardItem>            
            <CardItem style={styles.footerIcons}>   
                  <Button transparent >
                     <Icon name="arrow-up" style={{fontSize:28, color:"green"}} />
                     <Text style={styles.badgeCount}>80 ups </Text>
                  </Button>
                  <Button transparent >
                     <Icon name="arrow-down" style={{fontSize: 28, color:"red"}} />
                     <Text style={styles.badgeCount}>90 downs</Text>
                  </Button>
                  <TouchableOpacity activeOpacity={0.6}  >
                  <Button transparent  onPress={expandPost}>
                         <Image  source={comment} style={{width:30, height:30}} />
                         <Text style={styles.badgeCount}>12 reactions</Text>
                  </Button>
                  </TouchableOpacity>
                 
            </CardItem>
            </Card>
         )}
         </ScrollView>
           </Content>
         </Container>
          */
         <Block>
            <ScrollView>
               {posts.map(({id, data : {
                 photoURL,displayName,timestamp,desc ,title 
               }}) => (
                  <CustomListItem key={id} id={id} photoURL={photoURL} title={title} displayName={displayName} timestamp={timestamp}  desc={desc} expandPost={expandPost} />
               )
               )}
              
            </ScrollView>
         </Block> 
           
                )
   }

export default HomeScreen;

const styles=StyleSheet.create({
   card: {
      paddingBottom:5, 
      paddingLeft:15,
      paddingRight:5,
      borderBottomColor:"#bbb",
      borderBottomWidth:StyleSheet.hairlineWidth,
      justifyContent:"center"
   },
  
})
