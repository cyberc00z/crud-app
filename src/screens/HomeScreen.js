import React from "react";
import {
   View, 
   Text,
   StyleSheet,
   Image,
   FlatList,
   SafeAreaView,
   TouchableOpacity,
   TouchableHighlight,
   ToastAndroid,
} from "react-native";
import {
   Icon,
   Button,
} from "native-base"
import {Avatar} from "react-native-elements"
import PostIcon from "../images/icons/post.png";
import ReplyIcon from "../images/icons/reply.png";
import data from "../utils/d.json";
import { auth } from "../utils/firebase";



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
         .then(()=>navigation.navigate("Login"))
         .catch((error) =>{
           JSON.stringify(error),
           ToastAndroid.show(
              error.message,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
           )
           })
         )}>
       <Avatar rounded  size={40} source={require("../images/assets/ss.jpg")} />   
      </TouchableOpacity>

   ),
   headerRight: ()=> (
      <TouchableOpacity
      onPress={()=>navigation.navigate("NewPost")}
      style={{paddingRight: 15}}
      >
      <Image source={PostIcon} style={{width:30, height:30}} />    
     
      </TouchableOpacity>
   )
})

export default class HomeScreen extends React.Component{
   render(){
      return (
         <SafeAreaView style={{justifyContent:"flex-start"}} >
      
            <FlatList
                 style={{padding:20,marginBottom:20}}
                 data={data}
                 keyExtractor = {(item,index) => index.toString()}
                 renderItem={({item}) => 
               
                 <View style={styles.post}>
                 <TouchableHighlight
                 underlayColor="white"
                 activeOpacity={0.75}
                 > 
                 <View key={item.id} style={{flex:1, flexDirection:"row"}}>
                    <TouchableOpacity>
                    <Avatar source={require('../images/assets/ss.jpg')} size={40} rounded />
                    </TouchableOpacity>
                  
                 
                  <View style={{justifyContent:"flex-start", flexDirection:"column"}}> 
                    <Text style={{paddingLeft:15, fontWeight: "bold",fontSize:20}}>
                       {item.username}
                    </Text>
                    <Text 
                     style={{
                        paddingLeft:15, 
                        color:"#aaa",
                        fontSize:13,
                     }}
                    >
                       {"@"+item.name}
                    </Text>
                 </View>
                 </View>
                 </TouchableHighlight>
                 <Text style={styles.postText}>
                    {item.post}
                 </Text>
                 <View style={styles.postFooter}>
                  <View style={styles.footerIcons}>
                     <Button transparent >
                        <Icon name="heart-outline" style={{fontSize:20, color:"red"}} />    
                         <Text style={styles.badgeCount}>34</Text>
                     </Button>
                  </View>
                  <View style={styles.footerIcons}>
                       <Button transparent  >
                         <Image source={ReplyIcon} style={{width:30, height:30}} />
                         <Text style={styles.badgeCount}>12</Text>
                       </Button>
                  </View>
                  <View style={styles.footerIcons}>
                    <Button transparent >
                      <Icon name="flame" style={{fontSize:20, color:"orange"}} />
                      <Text style={styles.badgeCount}>80</Text>
                     </Button>
                  </View> 
                  <View style={styles.footerIcons}>
                     <Button transparent >
                      <Icon  name="share-outline" style={{fontSize:20,color:"green"}} />
                     </Button>
                  </View>
                 </View>
                 </View>
                 } />
               
         </SafeAreaView>
      )
   }

}


const styles=StyleSheet.create({
   post: {
      paddingTop:20,
      paddingBottom:5, 
      paddingLeft:10,
      paddingRight:10,
      borderBottomColor:"#bbb",
      borderBottomWidth:StyleSheet.hairlineWidth,
      justifyContent:"center"
   },
   postText:{
      marginTop:10,
      fontSize:18,
      color:"#555"
   },
   postFooter: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
   },
   footerIcons:{
      flexDirection: "row",
      alignItems: "center"  
   },
   badgeCount:{
      fontSize:12, 
      paddingLeft:5
   }
})
