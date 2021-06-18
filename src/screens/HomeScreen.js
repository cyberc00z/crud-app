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
   Alert,
} from "react-native";
import {
   Icon,
   Button,
   Card,
   CardItem,
   Thumbnail,
   Container,
   Content,
   Left,
   Body,
   Right
} from "native-base"
import {Avatar} from "react-native-elements"
import PostIcon from "../images/icons/post.png";
import Reply from "../images/icons/reply.png";
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
         <Container style={{justifyContent:"flex-start", backgroundColor:"#001133"}} >
           <Content>
   
            <Card   key={2} style={styles.card} >
              <CardItem style={styles.cardItem} >
                  <Left>
                  <TouchableOpacity onPress={()=>Alert.alert("we don't have this profile")} >
                  <Avatar source={require("../images/assets/ss.jpg")} rounded size={40} />
                  </TouchableOpacity>   
                  <Body>
                     <Text style={{fontSize:15}} >username</Text>
                     <Text style={{fontSize:10}} >Date</Text>
                  </Body>
               </Left>
               <Right>
                  <Body>
                  <Button transparent >
                     <Icon name="bookmark-outline" />
                  </Button>
                 
                  </Body>
               </Right>
               <TouchableOpacity  onPress={()=>Alert.alert("Some got clicked")} >
               <Image source={require("../images/icons/dots.png")} style={{width:25,height:20,marginTop:-10 }} />
               </TouchableOpacity>
              
            </CardItem>
           
            <CardItem>
               <Body>
                  <Text style={styles.postText} >I am try native base card view for my spancer app , let's if it's work as i suppose but as we grow we have make something customize of our own. Isn't children.</Text>
               </Body>
            </CardItem>
           
            
            <CardItem style={styles.footerIcons}>
               <Left>
               <Button transparent >
                     <Icon name="arrow-up" style={{fontSize:28, color:"green"}} />
                     <Text style={styles.badgeCount}>80 ups </Text>
                  </Button>
               </Left>
               
               <Button transparent >
                     <Icon name="arrow-down" style={{fontSize: 28, color:"red"}} />
                     <Text style={styles.badgeCount}>90 downs</Text>
                  </Button>
               
               
                  <Right >
                     <Body>
                     <Button transparent  >
                         <Image source={Reply} style={{width:30, height:30}} />
                         <Text style={styles.badgeCount}>12 reactons</Text>
                       </Button>
                     </Body>
                  </Right>  
            </CardItem>
            </Card>
           </Content>
         </Container>
           
           
                )
   }

}


const styles=StyleSheet.create({
   card: {
      paddingBottom:5, 
      paddingLeft:15,
      paddingRight:5,
      borderBottomColor:"#bbb",
      borderBottomWidth:StyleSheet.hairlineWidth,
      justifyContent:"center"
   },
   postText:{
      marginTop:5,
      fontSize:15,
      color:"#555"
   },
   postFooter: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 0
   },
   footerIcons:{
      flexDirection: "row",
      alignItems: "center",  
      justifyContent:"flex-start"
   },
   badgeCount:{
      fontSize:12, 
   }
})
