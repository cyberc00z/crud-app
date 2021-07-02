import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView,TabBar, SceneMap } from "react-native-tab-view";
import {Block} from "galio-framework";
import ProfilePost from "./ProfilePost";
import PostDiscussion from "./PostDiscussion";

const initialLayout = {width : Dimensions.get('screen').width};


const PostRoute = () => {
    return(
       <ProfilePost /> 
    );
};

const DiscussionRoute = () => {
    return( 
        <Block>
            <Text>
                😥 
            </Text>
        </Block>
    )
}

const ProfileStat = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
       {key:'first', title:'Posts'},
       {key:'second', title:'Discussions'},
    ]);

    const renderTabBar = (props) => (
        <TabBar 
         {...props}
         renderLabel={({route, color}) => (
             <Text style={{color:"black", fontWeight:"400",}} >
                {route.title}
             </Text>
         )}
         style={{backgroundColor:"white"}}
         tabStyle={{width:140}}
         scrollEnabled={true}
         indicatorStyle={{backgroundColor:"gray", height:5, borderRadius:10}}
        />
    )
    
    const renderScene = SceneMap({
        first: PostRoute,
        second: DiscussionRoute
        
    });


    return (
        <TabView
          navigationState={{index, routes}}
          renderTabBar={renderTabBar}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          
        />
    );
};

const styles = StyleSheet.create({
    scene: {
        flex:1,
        backgroundColor:"white"
    },
})

export default ProfileStat;