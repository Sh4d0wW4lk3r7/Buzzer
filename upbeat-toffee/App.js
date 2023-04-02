import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Appheader from "./components/Appheader"
import M from "./components/M"
import Buzzer from "./screens/buzzer"
import Home from "./screens/home"
import {createAppContainer,createSwitchNavigator} from"react-navigation"
export default class App extends Component {
  render() {
    return (
     <AppContainer/>
    );
  }
}
var NAVIGATOR=createSwitchNavigator({
HOME:Home,
Buzzer:Buzzer,  
})
const AppContainer=createAppContainer(NAVIGATOR)