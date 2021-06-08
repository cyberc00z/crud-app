import * as React from 'react';
import { StyleSheet} from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import Forget_PasswordScreen from "./src/screens/Forget_PasswordScreen"; 
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headerTintStyle: "white",
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Forget_Password" component={Forget_PasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
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
