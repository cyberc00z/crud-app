/* eslint-disable react/display-name */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  Block } from "galio-framework";
import HomeScreen, { navigationOptions as homeNavigationOptions } from "../screens/HomeScreen";
import SearchScreen, { navigationOptions as searchNavigationOptions } from "../screens/SearchScreen";
import AddPostScreen, {navigationOptions as postNavigationOptions} from "../screens/AddPostScreen";
import NotificationsScreen, { navigationOptions as notificationsNavigationOptions } from "../screens/NotificationsScreen";
import ProfileScreen , {navigationOptions as profileNavigationOptions} from "../screens/ProfileScreen";
import { BottomTabs } from "./BottomTabs";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon  from "react-native-vector-icons/Feather"

// Creating separate stacks to be able to configure header via navigationOptions.
// There is no way to configure header for bottom tabs otherwise.
// TODO: Make a separate header component which can be reused in every screen,
// instead of using navigation options to configure header.
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const PostStack = createStackNavigator();
const HomeStack = createStackNavigator();8


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

const Post = () => (
  <PostStack.Navigator>
       <PostStack.Screen
         component={AddPostScreen}
         name="AddPost"
         options={postNavigationOptions}
       />
  </PostStack.Navigator>
 
)


const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      component={HomeScreen}
      name="HomeScreen"
      options={homeNavigationOptions}
    />
  </HomeStack.Navigator>
);

const Tabs = AnimatedTabBarNavigator();

export const BottomTabNavigator = () => (
    <Block flex >
      <Tabs.Navigator
       tabBarOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#000"
       }}
      >
        <Tabs.Screen component={Home} name="Home" options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon 
              name="crosshair"
              
              size={size ? size : 24}
              color={focused ? color : "#000"}
              focused={focused}
              color={color}
            />
          )
        }} />
        <Tabs.Screen component={Search} name="Search" options={{
          tabBarIcon: ({ focused, color,size }) => (
            <Icon 
              name="search"
              size={size ? size : 24}
              color={focused ? color : "#000"}
              focused={focused}
              color={color}
             />
          )
        }} />
        <Tabs.Screen component={Post} name="Post" options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon 
              name="edit-2"
              size={size ? size : 24 }
              color={color ? color : "#000"}
              focused={focused}
              color={color}
            />
          )
        }} /> 
        <Tabs.Screen component={Notifications} name="Notifications"
          options={{
            tabBarIcon: ({focused, color, size}) => (
              <Icon 
                name="meh"
                size={size ? size: 24}
                color={color ? color : "#000"}
                focused={focused}
                color={color}
              />
            )
          }}
        />
        <Tabs.Screen component={Profile} name="Profile"
         options={{
           tabBarIcon: ({focused, color, size}) => (
             <Icon
               name="user"
               size={size ? size : 24}
               color={color  ?  color : "#000"}
               focused={focused}
               color={color}
             />
           )
         }}
        />
      </Tabs.Navigator>
  </Block>
);

