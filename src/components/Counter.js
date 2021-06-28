import React from "react";
import {View ,Text, StyleSheet} from "react-native";
import numeral from "numeral";

const Counter = ({value , children}) => (
    <View style={styles.counter} >
        <Text style={styles.number}>
          {numeral(value)
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
        fontSize:20, 
        fontWeight:"500"
    },
    name: {
      fontSize:11,
    }
});
