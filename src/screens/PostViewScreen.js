import React, {useEffect, useRef, useState} from "react";
import ActionSheet from 'react-native-actionsheet';
import {
    TextInput, 
    View, 
    Platform,
    SafeAreaView,
    Text,
    Image
    ,StatusBar, 
    ScrollView,
    KeyboardAvoidingView, 
    StyleSheet, 
    Alert,
    TouchableOpacity,
    Keyboard} from "react-native";
import {
   Icon,
   Button,
   Card,
   CardItem,
   Left,
   Body,
   Right,
   List
} from "native-base";
import { Avatar } from "react-native-elements";
import comment from "../images/icons/comment.png";
import {Ionicons} from "react-native-vector-icons"
import { auth, db } from "../utils/firebase";
import firebase from "firebase"; 
import CommentItem from "../components/CommentItem";


export const navigationOptions = ({navigation}) => ({
    title:"Discussion",
    headerTitleStyle: {
        marginLeft: 55
    }
})

const PostViewScreen = ({navigation, route}) => {
        const [input, setInput] = useState("");        
        const [isUpVote, setUpVote] = useState(false);
        const [isBookMark, setBookMark] = useState(false);
        const [isDownVote, setDownVote] = useState(false);
        const[comments, setComments] = useState([]);
        
        let actionSheet = useRef();
        var optionArray = ['Delete', 'Edit','Share','Cancel']

        const showActionSheet = () => {
            actionSheet.current.show();
        }
      
        const upVote = () => {
            if (isUpVote){
                setUpVote(false);
                db.collection("posts").doc(route.params.id).update({
                    upVoteNum:  firebase.firestore.FieldValue.increment(-1),
                }).then(() => {
                    db.collection("posts").doc(route.params.id).collection("upVotes") 
                }).catch((error) => {
                    JSON.stringify(error);
                    console.log(error)
                })
                console.log("Removed Upvote!");
                return;
            }
            return(
            setUpVote(true),
            db.collection("posts").doc(route.params.id).update({
                Vote : firebase.firestore.FieldValue.increment(1),
            }).then(() => {
                db.collection("posts").doc(route.params.id).collection("upVotes").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    votedBy: auth.currentUser.displayName,
                    avatar: auth.currentUser.photoURL,
                    email : auth.currentUser.email,
                    uid: auth.currentUser.uid
                })
            }).catch((error) => {
                JSON.stringify(error);
                console.log(error)
            })
        )}

        const downVote = async () => {
            if (isDownVote){
                setDownVote(false);
                db.collection("posts").doc(route.params.id).update({
                    upVoteNum:  firebase.firestore.FieldValue.increment(-1),
                }).then((e) => {
                    db.collection("posts").doc(route.params.id).delete()
                    console.log(e)
                }).catch((error) => {
                    JSON.stringify(error);
                    console.log(error)
                })
                console.log('already was downvoted so now i removed the downvoted');
                return;
            }
            return(
                setDownVote(true),
                await db.collection("posts").doc(route.params.id).collection("downVotes").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    downVotedBy: auth.currentUser.displayName,
                    avatar: auth.currentUser.photoURL,
                    email : auth.currentUser.email,
                    uid: auth.currentUser.uid
                   
                }).then(() => {
                    db.collection("posts").doc(route.params.id).update({
                        Vote : firebase.firestore.FieldValue.increment(-1),
                    })
                }).catch((error) => {
                    JSON.stringify(error)
                    console.log(error);
                })     

            )}
        const postReply = async () => {
            Keyboard.dismiss();
            if (!input){
                Alert.alert("Can not Empty comment");
                return;
            }
            await db.collection("posts").doc(route.params.id).collection("comments").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                commentedBy: auth.currentUser.displayName,
                comment: input,
                avatar: auth.currentUser.photoURL,
            })
            .then(() => {
                db.collection("posts").doc(route.params.id).update({
                    commentNum : firebase.firestore.FieldValue.increment(1)
                })
            })
            .catch((error) => {
                JSON.stringify(error);
                console.log(error);
            })
            setInput("");    
        }
        useEffect(() => {
            const cleanup = db
            .collection("posts")
            .doc(route.params.id)
            .collection("comments")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) => setComments(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            ));
            return cleanup;
        },[route]);

        const bookMark = async () => {
            if (isBookMark){
                setBookMark(false);
                console.log("Alreay Bookmarked , Done To Unmark!");
                return;
            }
            return (
              setBookMark(true),
              console.log("bookmarked!")
            );
        }
        
        const dotOptions = () => {
            console.log("meuu!");
        }
        
        return(

            <SafeAreaView style={{flex:1, backgroundColor:"#f2f2f2",}}>
                <StatusBar style="light" />
                <KeyboardAvoidingView 
                style={styles.container}
                keyboardVerticalOffset={90}
                behavior={Platform.OS === "ios" ?  "padding" : "height" }>
               <>
                 <ScrollView>
                     <Card style={ styles.card} >
                       <CardItem style={styles.cardItem} >
                       <Left>
                  <TouchableOpacity onPress={()=>Alert.alert("we don't have this profile")} >
                  <Avatar source={{uri:route.params.photoURL}} rounded size={40} />
                  </TouchableOpacity>   
                  <Body>
                     <Text style={{fontSize:15}}>{route.params.displayName}</Text>
                     
                     <Text style={{fontSize: 12}}>{route.params.timestamp?.toDate().toUTCString()}</Text>
                  </Body>
               </Left>
               <Right>
                  <Body>
                  <Button transparent onPress={bookMark} >
                     {!isBookMark ? <Icon type="Ionicons" name="bookmark-outline" /> : <Icon type="Ionicons" name="bookmark-sharp" />}
                  </Button>
                  </Body>
               </Right>
               <Right>
                   <Body>
                    <TouchableOpacity onPress={showActionSheet}  >
                    <Button transparent >
                      <Icon type="Entypo" name="dots-three-horizontal"  />
                  </Button>  
                    </TouchableOpacity>   
                  <ActionSheet
                    ref={actionSheet}
                    title={"More"}
                    options={optionArray}
                    destructiveButtonIndex={1}
                    onPress={(index) => {
                        alert(optionArray[index]);
                    }}
                  />
                   </Body>
               </Right>
            </CardItem>
            <CardItem  >
               <Body>
                  <Text style={{fontSize:15,color:"black"}}>{route.params.title}</Text>
                  <Text style={styles.postText} >{route.params.desc}</Text>
               </Body>
            </CardItem>            
              <CardItem style={styles.footerIcons}>
                  <TouchableOpacity style={styles.votes} >
                   <Button transparent  onPress={upVote} >
                     {!isUpVote  ? <Icon type="MaterialCommunityIcons" name="arrow-up-bold-outline" style={{fontSize:28, color:"gray"}} />  :<Icon type="MaterialCommunityIcons" name="arrow-up-bold"  style={{fontSize:28, color:"rgb(0, 210, 178)"}} />}
                  </Button>
                  <Text style={styles.badgeCount}>
                         {route.params.Vote}  
                        </Text>
                  <Button transparent onPress={downVote} >
                     { !isDownVote ? <Icon type="MaterialCommunityIcons"  name="arrow-down-bold-outline" style={{fontSize: 28, color:"gray"}} /> : <Icon type="MaterialCommunityIcons" name="arrow-down-bold" style={{fontSize:28, color:"rgb(255, 102, 102)"}} />}
                  </Button>
                  </TouchableOpacity>   
                  <Right>
                      <Body>
                      <TouchableOpacity>
                  <Button transparent>
                         <Image  source={comment} style={{width:30, height:30}} />
                         <Text style={styles.commentNum}> {route.params.commentNum} reactions</Text>
                  </Button>
                  </TouchableOpacity>
                      </Body>
                  </Right>
                       </CardItem>
                     </Card>
                    <ScrollView> 
                    {comments.map(({id, data: {comment, commentedBy, timestamp, avatar}}) => (
                        <CommentItem key={id} comment={comment} commentedBy={commentedBy} timestamp={timestamp} avatar={avatar} />
                    ))}
                    </ScrollView>
                    
                 </ScrollView>
                 <View style={styles.footer}>
                        <TextInput
                         placeholder="Reply..."
                         value={input}
                         onChangeText={(text) => setInput(text)}
                         onSubmitEditing={postReply}
                         style={styles.textInput}
                        />
                        <TouchableOpacity onPress={postReply} activeOpacity={0.8}>
                        {
                            !input ? (
                                <Ionicons
                                name="send-outline"
                                size={30}
                                style={{color:"gray"}}
                               />
                            ): (
                                <Ionicons
                                name="send-outline"
                                size={30}
                                style={{color: "#6600cc"}}
                               />
                            ) 
                        }
                      
                        </TouchableOpacity>
                 </View>
               </>

                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
export default PostViewScreen;

const styles = StyleSheet.create({
    container: {
        flex:1, 
    },
    card: {
      paddingBottom:5, 
      paddingLeft:15,
      paddingRight:5,
      borderBottomColor:"#bbb",
      borderBottomWidth:StyleSheet.hairlineWidth,
      justifyContent:"center"
    },
    cardItem:{},
    footer: {
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:15
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
        justifyContent:"space-between" 
     },
     badgeCount:{
        fontSize:15, 
        marginTop:20
     },   
     commentNum: {
         fontSize: 12,
         marginTop:5
     },
    textInput:{
        bottom: 0,
        height: 50,
        flex:1, 
        marginRight: 15,
        borderColor:"transparent",
        backgroundColor:"#ECECEC",
        padding:10,
        color:"gray",
        borderRadius:10,    
    },
    votes: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    }
})

