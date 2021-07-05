//import { Icon , Button, Text } from "native-base"
import React, { useState } from "react";
import {ImageBackground,ScrollView, StyleSheet,Platform, Dimensions,Image } from "react-native";
import {Block, theme, Text} from "galio-framework";
import bg from "../images/assets/profileBack.png";
import { materialTheme,Images } from "../constants/Index";
import {HeaderHeight} from "../constants/utils";
import {LinearGradient} from "expo-linear-gradient";
import Counter from "../components/Counter";
import { Avatar } from "react-native-elements";
import { ListItem, Title } from "native-base";
import { auth, db } from "../utils/firebase";
import ProfileStat from "../components/ProfileStat";

const {width, height} = Dimensions.get("screen");

export const navigationOptions = ({navigation}) => ({
    headerShown: false,
})

const ProfileScreen  = () => {
        return (
           <Block flex style={styles.profile}>
              <Block flex>
          <ImageBackground
            source={bg}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
              <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)']} style={styles.gradient} />
           <Block flex style={styles.profileDetails}>
               <Avatar source={{uri: auth?.currentUser?.photoURL}} rounded size={140}  />
           
                <Block style={styles.profileTexts}>
                 <Text color="white" size={28} style={{paddingBottom: 8}}>{auth?.currentUser?.displayName}</Text>
                 <Block row space="between">
                   <Block row>
                     <Block middle style={styles.school}>
                      <Text size={16} color="white">VIT</Text>
                     </Block>
                   </Block>
                </Block>
              </Block>
             <LinearGradient colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)']} style={styles.gradient} />
           </Block>
          </ImageBackground>
         </Block>
         <Block  flex style={styles.options}>
           <ProfileStat />
         </Block>
         {/*
           <Block flex style={styles.options}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block row space="between" style={{ padding: theme.SIZES.BASE, }}>
            <Block middle>
                <Text bold size={12}  >
                    <Counter style={styles.statSection} number="4">Dicussions</Counter> 
                </Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>
                  <Counter number={11}>
                      Old
                  </Counter>
                </Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{marginBottom: 8}}>
                  <Counter number={44}>
                     Points
                  </Counter>
                </Text>
              </Block>
            </Block>
            <Block style={{ paddingBottom: -HeaderHeight * 6 }}>
              <Block row space="between" style={{ flexWrap: 'wrap' }} >
              
              </Block>
            </Block>
          </ScrollView>
        </Block>*/}
           </Block>          
        )
    
}
export default ProfileScreen;

const margin = 15;

const styles = StyleSheet.create({
    profile: {
        marginTop: Platform.OS === "ios" ? 0 : -HeaderHeight,
        marginBottom: -HeaderHeight * 1.8,
        backgroundColor:"rgb(242,242,242)",
     },
     profileImage: {
       width: width * 1.1,
       height:120 + "%",
     },
     profileContainer: {
       width: width,
       height: height / 2,
     },
     profileDetails: {
       paddingTop: theme.SIZES.BASE * 4,
       justifyContent: 'space-between',
       position: 'relative',
       flexDirection:"row",
       marginTop: 35 + "%",
       marginLeft:20 + "%"
    },
     profileTexts: {
       paddingHorizontal: theme.SIZES.BASE * 2,
       paddingVertical: theme.SIZES.BASE * 2,
       zIndex: 2
     },
     school: {
       backgroundColor: materialTheme.COLORS.LABEL,
       paddingHorizontal:6,
       marginRight: theme.SIZES.BASE /2,
       borderRadius: 4,
       height: 19,
       width: 38,
     },
     gradient: {
        zIndex:1,
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
        position: 'absolute',
     },
     stats:{
        flexDirection:"column",
        marginLeft:30,
        marginRight:30,
         
     },
     statSection: {
        paddingLeft: margin * 2,
        paddingRight: margin,
        flexDirection: "column" ,
        backgroundColor: materialTheme.COLORS.LABEL,
     },
     options: {
      position: 'relative',
      padding: theme.SIZES.BASE,
      marginHorizontal: theme.SIZES.BASE,
      marginTop: -theme.SIZES.BASE * 9,
      borderTopLeftRadius: 13,
      borderTopRightRadius: 13,
      backgroundColor: theme.COLORS.WHITE,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 8,
      shadowOpacity: 0.2,
      zIndex: 2,  
    }



})
