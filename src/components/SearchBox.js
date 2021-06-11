import React from "react";
import {View, Image, TextInput, StyleSheet, Animated} from "react-native";

class SearchBox extends React.Component {
    state = {
        fadeAnim: new Animated.Value(1),
        text:""
    };
    _fadeOutPlaceholder = () => {
        Animated.timing(this.state.fadeAnim, {
            toValue:0,
            duration:200,
            useNativeDriver:true
        }).start();
    };
    _fadeInPlaceholder = () => {
        if (this.state.text === ""){
           Animated.timing(this.state.fadeAnim, {
               toValue: 1, 
               duration: 200,
               useNativeDriver:true
           }).start();
        }
    };
    render(){
        const {fadeAnim} = this.state;
        return (
            <View style={styles.searchBox}>
               <Animated.Text style={[styles.placeholder, {opacity: fadeAnim}]} >
                    <Image
                    source={require("../images/icons/search.png")}
                    style={{width: 14, height: 14, top:4}}  
                    />{" "}
               </Animated.Text>
               <TextInput
                 clearButtonMode="while-editing"
                 onFocus={this._fadeOutPlaceholder}
                 onBlur={this._fadeInPlaceholder}
                 value={this.state.text}
                 onChangeText={text=>this.setState({text})}
                 style={styles.textInput}
               />
            </View>
        )
    }
}
export default SearchBox;

const styles = StyleSheet.create({
    textInput: {
       width: "100%",
       paddingLeft:5,
       paddingRight:5
    },
    placeholder: {
        position:"absolute",
        color:"#8E8E93",
        fontSize:14
    },
    searchBox: {
        backgroundColor:"rgba(0,0,0,0.1)",
        height:28,
        borderRadius:4, 
        margin:15, 
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    }

})