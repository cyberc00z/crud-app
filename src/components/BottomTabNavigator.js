/* eslint-disable react/display-name */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import HomeScreen, { navigationOptions as homeNavigationOptions } from "../screens/HomeScreen";
import SearchScreen, { navigationOptions as searchNavigationOptions } from "../screens/SearchScreen";
import NotificationsScreen, { navigationOptions as notificationsNavigationOptions } from "../screens/NotificationsScreen";
import ProfileScreen, { navigationOptions as profileNavigationOptions } from "../screens/ProfileScreen";
import AddPostScreen, {navigationOptions as addPostNavigationOptions} from "../screens/AddPostScreen";

import { BottomTabs } from "./BottomTabs";

// Creating separate stacks to be able to configure header via navigationOptions.
// There is no way to configure header for bottom tabs otherwise.
// TODO: Make a separate header component which can be reused in every screen,
// instead of using navigation options to configure header.
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PostStack = createStackNavigator();
const HomeStack = createStackNavigator();8


const theme = {
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme,
    primary: '#3498db',
    accent:'#f1c40f',
  }
}

const Notifications = () => (
  <NotificationsStack.Navigator>
    <NotificationsStack.Screen
      component={NotificationsScreen}
      name="NotificationsScreen"
      options={notificationsNavigationOptions}
    />
  </NotificationsStack.Navigator>
);

const Profile = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      component={ProfileScreen}
      name="ProfileScreen"
      options={profileNavigationOptions}
    />
  </ProfileStack.Navigator>
);

const Search = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen
      component={SearchScreen}
      name="SearchScreen"
      options={searchNavigationOptions}
    />
  </SearchStack.Navigator>
);

const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      component={HomeScreen}
      name="HomeScreen"
      options={homeNavigationOptions}
    />
  </HomeStack.Navigator>
);

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
    <PaperProvider theme={theme} >
      <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
        <BottomTab.Screen component={Home} name="Home" />
        <BottomTab.Screen component={Search} name="Search" /> 
        <BottomTab.Screen component={Notifications} name="Notifications" />
        <BottomTab.Screen component={Profile} name="Profile" />
      </BottomTab.Navigator>
  </PaperProvider>
);

