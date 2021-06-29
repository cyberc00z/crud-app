import React from "react";
import {Image, View, StatusBar,SafeAreaView } from "react-native";
import Heading from "../components/Heading";
import SearchBox from "../components/SearchBox";
import HorizontalScrollFeed from "../components/HorizontalScrollFeed";
import GroupCard from "../components/GroupCard";

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

export default class SearchScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                interestingPosts: [
                {
                    id: 1235,
                    post_image: "",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 2345,
                    post_image: "https://randomuser.me/api/portraits/men/24.jpg",
                    post: "This is new post "
                  },
                  {
                    id: 3456,
                    post_image: "https://randomuser.me/api/portraits/women/45.jpg"
                  },
                  {
                    id: 4567,
                    post_image: "https://randomuser.me/api/portraits/men/45.jpg",
                    post: "I have to modify data more"
                  },
                  {
                    id: 6789,
                    post_image: "https://randomuser.me/api/portraits/women/23.jpg",
                    post:"Why this colavari de ?"  
                },
                  {
                    id: 7890,
                    post_image: "https://randomuser.me/api/portraits/men/67.jpg",
                    post:"Why this colavari de ?"  
                },
                  {
                    id: 2456,
                    post_image: "https://randomuser.me/api/portraits/women/12.jpg",
                    post:"Why this colavari de ?"
                  }
                ],
                trendingGroups: [
                  {
                    id: 1234,
                    name: "Beer",
                    image:
                      "https://cdn.britannica.com/700x450/72/186972-049-26ACDCBE.jpg",
                    icon: "",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 2345,
                    name: "Arcade",
                    image: "http://www.thebasementarcade.com/gameroom/0516/1.jpg",
                    icon: "",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 3456,
                    name: "Nature",
                    image:
                      "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&h=350",
                    icon: "",
                    post:"Why this colavari de ?"
                  },
                  { id: 4567, image: "", icon: "" },
                  { id: 6789, image: "", icon: "" },
                  { id: 7890, image: "", icon: "" },
                  { id: 8909, image: "", icon: "" }
                ],
                users: [
                  {
                    id: 1235,
                    name: "Danny",
                    post_image: "https://randomuser.me/api/portraits/women/65.jpg",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 2345,
                    name: "James",
                    post_image: "https://randomuser.me/api/portraits/men/24.jpg",
                    post:"Why this colavari de ?" 
                  },
                  {
                    id: 3456,
                    name: "Jennifer",
                    post_image: "https://randomuser.me/api/portraits/women/45.jpg",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 4567,
                    name: "hello world",
                    post_image: "https://randomuser.me/api/portraits/men/45.jpg",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 6789,
                    name: "hello world",
                    post_image: "https://randomuser.me/api/portraits/women/23.jpg",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 7890,
                    name: "hello world",
                    post_image: "https://randomuser.me/api/portraits/men/67.jpg",
                    post:"Why this colavari de ?"
                  },
                  {
                    id: 2456,
                    name: "hello world",
                    post_image: "https://randomuser.me/api/portraits/women/12.jpg",
                    post:"Why this colavari de ?"
                  }
            ]
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
}