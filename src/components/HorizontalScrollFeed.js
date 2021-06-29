import React from "react";
import {SafeAreaView, StyleSheet, FlatList} from "react-native";

const HorizontalScrollView = ({renderItem, data, keyExtractor}) => (
       <SafeAreaView horizontal style={styles.container} >
           <FlatList
            style={styles.innerScroll}
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
           />
       </SafeAreaView>
   
);

export default HorizontalScrollView;

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    innerScroll: {
        padding: 15, 
        flexDirection: "row"
    }
});