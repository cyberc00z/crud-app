/* eslint-disable react/display-name */
import React from "react";
import {StyleSheet,TouchableOpacity ,View, Text} from "react-native";
import Icon from "./Icon";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { Avatar } from "react-native-elements";


export const BottomTabs = ({state,descriptors, navigation}) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options 
    const {bottom} = useSafeAreaInsets();
    if (focusedOptions.tabBarVisible == false){
        return null;
    }

    const getTab =routeName => {
        switch(routeName){
            case "Home":
                return <Icon name="home" />

            case "Search":
                return <Icon name="search"  />
            
            case "Notifications":
                return   <Icon name="notifications" />
                    
            case "Profile":
                return <Avatar   source={require('../images/assets/ss.jpg')} rounded style={{width:30, height:30}} />;
            
            default:
                return null;
        }

    };
    return (
        <View style={[styles.container, {paddingBottom:bottom}]}>
           {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label = 
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel
                      : options.title !== undefined
                      ? options.title
                      :route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type:"tabPress",
                        target:route.key,
                        canPreventDefault: true
                    });

                    if (!isFocused && !event.defaultPrevented){
                         navigation.navigate(route.name);
                    }
                };
                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key
                    });
                };
                return (
                    <TouchableOpacity
                    key={label}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? {selected: true} : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={styles.tabContainter}
                    >
                     {getTab(label)}
                     <Text style={{color: isFocused ? "#673ab7" : "#222"}}>
                      {label}
                     </Text>
                    </TouchableOpacity>
                )
           })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        borderTopColor:"#bbbbbb",
        borderTopWidth: 1,
        paddingVertical: 10,
        backgroundColor: "white"
    },
    tabContainter: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
});