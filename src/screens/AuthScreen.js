import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {BottomTabNavigator} from "../components/BottomTabNavigator";
import { auth } from "../utils/firebase";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import {Block} from "galio-framework"

const AuthStack = createStackNavigator();

const AuthScreen = () => {
  const user = auth.currentUser;
  
  return( 
    <Block flex>
      {user ? (<AuthStack.Navigator initialRouteName={BottomTabNavigator}>
         <AuthStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown:false }}
         />    
         <AuthStack.Screen 
           name="Login"
           component={LoginScreen}
         />
         <AuthStack.Screen 
           name="Register"
           component={RegisterScreen}
         />

      </AuthStack.Navigator>) : 
     ( <AuthStack.Navigator  initialRouteName={LoginScreen}>
          <AuthStack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown:false }}
         />    
         <AuthStack.Screen 
           name="Login"
           component={LoginScreen}
         />
         <AuthStack.Screen 
           name="Register"
           component={RegisterScreen}
         />

      </AuthStack.Navigator>
     )}
    </Block>

)
}

export default AuthScreen;