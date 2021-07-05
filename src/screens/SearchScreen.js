import React, { useEffect, useState } from "react";
import {Image, View, StatusBar,SafeAreaView,StyleSheet } from "react-native";
import Heading from "../components/Heading";
import SearchBox from "../components/SearchBox";
import CustomListItem from "../components/CustomListItem";
//import GroupCard from "../components/GroupCard";
import {db, auth} from "../utils/firebase";

export const navigationOptions = ({navigation}) => ({
    title:"DISCOVER",
    headerTitleStyle: {
      fontWeight:"500",
      fontSize:15,
      
    },
    headerLeft: () => (
       <View style={{paddingLeft:15}} >
         <Image 
         source={require('../images/icons/categories.png')}
         style={{width:23, height:23}}
         />
       </View>
    )
});

const  SearchScreen = ({navigation}) => {
  const [trendingPost, setTrendingPost] = useState([]);
  useEffect(() => {
    const unsubscribe =db.collection("posts").where("Vote", ">=", 2).orderBy("Vote", "desc").onSnapshot((snapshot) => 
       setTrendingPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))     
       )  
    );
    return unsubscribe
  },[navigation])

  const expandPost = (id, title, displayName, timestamp, photoURL,desc,commentNum, Vote ) => {
      navigation.navigate("PostView", {
        id,
        photoURL,
        displayName,
        timestamp,
        desc,
        title,
        commentNum,
        Vote
      })
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
                <SearchBox />
                <Heading>Trending Discussions</Heading> 
                {trendingPost.map(({id, data : {
                 photoURL,displayName,timestamp,desc ,title , commentNum, Vote
                         }}) => (
                  <CustomListItem key={id} id={id} photoURL={photoURL} title={title} displayName={displayName} timestamp={timestamp}  desc={desc} commentNum={commentNum} Vote={Vote} expandPost={expandPost} />
               ))}
           </SafeAreaView>
  )
}

export default SearchScreen;

const styles = StyleSheet.create({

})

/*
export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                interestingPosts: []
        }

  }
    componentDidMount(){
        this._navListener = this.props.navigation.addListener("didFocus",()=>{
            StatusBar.setBarStyle("dark-content"); 
        });
    }
    render(){
        return(
           <SafeAreaView style={{flex:1, backgroundColor:"#fff"}}>
                <SearchBox />
                <Heading>Trending Discussions</Heading> 
                <HorizontalScrollFeed
                   
                   data = {this.state.interestingPosts}
                   renderItem = {({item}) => (
                       
                       <View style={{marginRight:6}}>
                         <GroupCard item={item} image={item.post_image}  />
                        </View>
                        
                   )}
                   keyExtractor={item=> `item-${item.id}`}
                  />   
                  
           </SafeAreaView>
        )
    }
}*/