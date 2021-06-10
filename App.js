import * as React from 'react';
import { StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import Forget_PasswordScreen from "./src/screens/Forget_PasswordScreen"; 
import HomeScreen,{navigationOptions as homeScreenNavigationOptions } from './src/screens/HomeScreen';
import {BottomTabNavigator } from "./src/components/BottomTabNavigator";

import EditProfileScreen, { navigationOptions as editProfileNavigationOptions } from "./src/screens/EditProfileScreen";
import SinglePostScreen, { navigationOptions as singlePostNavigationOptions } from "./src/screens/SinglePostScreen";
import StatusUpdateScreen, { navigationOptions as statusUpdateNavigationOptions } from "./src/screens/StatusUpdateScreen";


const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness:2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme} >  
    <NavigationContainer>
      <Stack.Navigator initialRouteName={BottomTabNavigator}>
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forget_Password" component={Forget_PasswordScreen} /> */}
        
        <Stack.Screen
              component={BottomTabNavigator}
              name="BottomTabNavigator"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              component={SinglePostScreen}
              name="SinglePost"
              options={singlePostNavigationOptions}
            />
            <Stack.Screen
              component={StatusUpdateScreen}
              name="NewPost"
              options={statusUpdateNavigationOptions}
            />
            <Stack.Screen
              component={EditProfileScreen}
              name="EditProfile"
              options={editProfileNavigationOptions}
            />
           
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
