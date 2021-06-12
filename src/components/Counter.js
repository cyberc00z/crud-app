import React from "react";
import {View ,Text, StyleSheet} from "react-native";
import numeral from "numeral";

const Counter = ({number, children}) => (
    <View style={styles.counter} >
        <Text style={styles.number}>
          {numeral(number)
            .format("0a")
            .toUpperCase()
          }
        </Text> 
        <Text style={styles.name}>{children}</Text>
    </View>
);
export default Counter;

const styles = StyleSheet.create({
    counter: {
        marginRight:72,
    },
    number: {
        color:"#364047",
        fontSize:24, 
        fontWeight:"500"
    },
    name: {
      fontSize:11,
    }
});
