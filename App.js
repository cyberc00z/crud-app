import React from "react";
import {Block} from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import AuthScreen from "./src/screens/AuthScreen";




export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
               <Block flex >
                    <AuthScreen />
               </Block>
            </NavigationContainer>

   )

    }  
  
}