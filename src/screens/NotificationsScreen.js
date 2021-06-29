import React from 'react';
import { View, Text ,StatusBar,Image} from "react-native";
//import Follow from "../components/Notifications/Follow";
//import Notification from "../components/Notifications";


// icons
import CategoriesIcon from "../images/icons/categories.png";
import ReplyIcon from "../images/icons/reply.png";

import PostIcon from "../images/icons/post.png";



export const navigationOptions = ({navigation}) => ({
    title: "NOTIFICATIONS",
    headerLeft: ()=> (
      <View style={{paddingLeft:15}}>
         <Image source={CategoriesIcon} style={{width:23, height:23}} />
      </View>
    ),   
    headerTitleStyle: {
        fontWeight: "500",
        fontSize: 13
    }
});

export default class NotificationScreen extends React.Component {
  componentDidMount(){
    this._navListener = this.props.navigation.addListener("didFocus",() => {
      StatusBar.setBarStyle("dark-content");
    });
  }
  componentDidUpdate() {}
  /* 
  _renderGroup = ({activityGroup, styles, ...props} : any) => {
    const verb = activityGroup.activities[0].verb;
    if (verb == "follow"){
      return <Follow activities={activityGroup.activities} style={styles} />
    } else if (verb === "heart" ||verb === "repost") {
      return (
        <Notification activities={activityGroup.activities} style={styles} />
      );
    }
    else {
      const activity = activityGroup.activities[0];
      return (
        <Activity
          activity={activity}
          {...props}
          Footer={
            <View style={{flexDirection: "row", alignItems: "center"}}>
              <LikeButton reactionKind="heart" activity={activity} {...props} />
              <RectionIcon
                  icon={ReplyIcon}
                  labelSingle="comment"
                  labelPlural="comments"
                  counts={activityGroup.activities.reaction_counts}
                  kind="comment"
              />
            </View>
          }
        /> 
      )
    }
  };
  */
  render(){
    return (
     /*<NotificationFeed 
        Group = {this._renderGroup}
        navigation={this.props.navigation}
      />*/
      <View>
        <Text>🇳🇫 </Text>
      </View>
    );
  }
}