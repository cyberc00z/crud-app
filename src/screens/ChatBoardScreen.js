import React from "react";
import { View, Text, StyleSheet, SafeAreView , TouchableOpacity} from "react-native";
import {Icon, theme} from "galio-framework"
import {Block} from "react-native";

export const navigationOptions = ({navigation}) => ({
    title:"Chats",
    headerTitleStyle: {
        marginLeft : 65
    }
})

const ChatBoardScreen = () => {
    return (
        <View style={styles.container} >
           <Text>I</Text>
        </View>
    )
}

export default ChatBoardScreen;

const styles = StyleSheet.create({
   container: {

   },
})
