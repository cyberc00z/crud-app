import React from "react";
import {View, StyleSheet, Text,Image} from "react-native";
import {Avatar} from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import FollowersIcon from "../../images/icons/followers.png";


const Follow = ({activites}) => (
    <View style={styles.item}>
      {activites.length !== 1 ? (
          <Image style={styles.icon} source={FollowersIcon} />
      ):(
          <TouchableOpacity>
              <Avatar
              source="https://avatars.githubusercontent.com/u/72895?v=4"
              size={48}
              /> 
          </TouchableOpacity>
      )}
      <View style={{flex:1, paddingLeft:15}}>
        <View style={{flexDirection: "row"}}>
            <TouchableOpacity>
                <Avatar
                source="https://avatars.githubusercontent.com/u/72895?v=4"
                size={29}
                />
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
              <Text style={styles.footerTextBold}>
                 @rebel 
              </Text>
              
          </Text>
        </View>
      </View>
    </View>
)
export default Follow;

const styles = StyleSheet.create({
    item: {
        borderBottomWidth:1,
        borderBottomColor:"#DADFE3",
        paddingTop: 15,
        paddingBottom:15,
        paddingLeft:12,
        paddingRight:12,
        flexDirection:"row",
    },
    icon: {
        width:48,
        height:48
    },
    follow : {
        marginRight:5
    },
    object: {},
    footer: {
        marginTop:10,
        flexDirection:"row",
        justifyContent: "space-between"
    },
    footerText: {
       fontSize:13,
       color: "#535B61"      
    },
    footerTextBold: {
        fontSize:13,
        fontWeight:"600",
        color:"#535B61"
    },
    
})