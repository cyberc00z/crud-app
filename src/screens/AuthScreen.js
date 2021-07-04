import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {BottomTabNavigator} from "../components/BottomTabNavigator";
import { auth } from "../utils/firebase";
import LoginScreen, {navigationOptions as loginNavigationOptions} from "./LoginScreen";
import RegisterScreen,{navigationOptions as registerNavigationOptions} from "./RegisterScreen";
import PostViewScreen, {navigationOptions as postviewNavigationOptions} from "./PostViewScreen";
import SinglePostScreen, {navigationOptions as singlePostNavigationOptions} from "./SinglePostScreen";
import {Block} from "galio-framework"
import ChatBoardScreen, {navigationOptions as chatsNavigationOptions } from "./ChatBoardScreen";


const AuthStack = createStackNavigator();

const AuthScreen = () => {  
  return( 
    <Block flex>
      {auth.currentUser == null ? (
      <AuthStack.Navigator  initialRouteName={LoginScreen}>    
          <AuthStack.Screen 
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <AuthStack.Screen 
            name="Register"
            component={RegisterScreen}
            options={registerNavigationOptions}
          />
          <AuthStack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
          <AuthStack.Screen
            name="PostView"
            component={PostViewScreen}
            options={postviewNavigationOptions}
          />
            <AuthStack.Screen
          name="Single_Post"
          component={SinglePostScreen}
          options={singlePostNavigationOptions}
        />
          <AuthStack.Screen
         name="Chats"
         component={ChatBoardScreen}
         options={chatsNavigationOptions}
       />

      </AuthStack.Navigator>) : ( 
      <AuthStack.Navigator initialRouteName={BottomTabNavigator}>
        <AuthStack.Screen
            name="BottomTabNavigator"
            component={BottomTabNavigator}
            options={{headerShown:false }}
        />    
      <AuthStack.Screen 
        name="Login"
        component={LoginScreen}
        options={{headerShown:false}}
      />
      <AuthStack.Screen 
        name="Register"
        component={RegisterScreen}
      /> 
       <AuthStack.Screen
            name="PostView"
            component={PostViewScreen}
            options={postviewNavigationOptions}
        />
        <AuthStack.Screen
          name="Single_Post"
          component={SinglePostScreen}
          options={singlePostNavigationOptions}
        />
       <AuthStack.Screen
         name="Chats"
         component={ChatBoardScreen}
         options={chatsNavigationOptions}
       />

   </AuthStack.Navigator>
     )}
    </Block>
  )
}

export default AuthScreen;