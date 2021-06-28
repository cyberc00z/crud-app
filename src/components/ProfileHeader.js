import React from "react";
import {View,Text, StatusBar, StyleSheet} from "react-native";
import Counter from "./Counter";
import {SafeAreaView} from "react-native-safe-area-context";
import Button  from "./Button";
import CoverImage from "./CoverImage";
import { auth } from "../utils/firebase";

export default function ProfileHeader(props){
    return (
        <ProfileHeaderInner {...props} />
    );
}

class ProfileHeaderInner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: {
                post_count:0,
                karma_count:0
            }
        };
    }
    async componentDidMount(){
        const data = await this.props.user.profile();
        this.props.changedUserData();
        this.setState({user:data});
    }
    render (){
        const {post_count, karma_count} = this.state.user;
        const {name, url, bio,CoverImage} = 
           this.props.userData || {};
        
        CoverImage ? StatusBar.setBarStyle("light-content", true) : null;
        
        return (
            <SafeAreaView style={[styles.profileHeader]} >
               {CoverImage ? <CoverImage source={ {uri :auth?.currentUser?.photoURL}} /> : null}
               <View style={[styles.mainSection]}>
                 <View style={styles.userDetails}>
                    <Text style={styles.username}>{name}</Text>
                    <Text style={styles.userUrl}>{url}</Text>
                    <Text style={styles.userBio}>{bio}</Text>
                 </View>
               </View>
              <View style={styles.userStats}>
                  <Counter number={post_count}>Posts</Counter>
                  <Counter number={karma_count}>Karma</Counter>  
              </View>
            </SafeAreaView>
        );
    }

}

const margin = 15;

const styles = StyleSheet.create({
    profileHeader: {
      backgroundColor:"#fff",
      paddingBottom: margin,
      width : 100 + "%"
    },
    profileHeaderShadow: {
      shadowColor: "#000",
      shadowOffset: {width: 0, height:0},
      shadowOpacity: 0.1,
      shadowRadius: 4
    },
    mainSection: {
      width: 100 + "%",
      height:150,
      marginTop:90,
      marginBottom: 30,
      paddingRight: 20,
      paddingLeft: 20,
      flexDirection: "row",
      justifyContent:"space-between",
      alignItems:"flex-end"
    },
    userDetails: {
        flex: 1,
    },
    userUrl: {
        fontSize:12,
        color:"#364047"
    },
    userBio: {
        fontSize: 14, 
        fontWeight:"500",
        color:"#364047",
        lineHeight:19,
        marginTop:7
    },
    userStats: {
        paddingLeft:margin * 2,
        paddingRight:margin,
        flexDirection: "row"
    }
});