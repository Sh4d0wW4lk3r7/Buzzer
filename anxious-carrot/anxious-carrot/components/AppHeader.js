import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  
} from 'react-native';

export default class Appheader extends Component {
  render() {
    return (
      <View style={s.v1}>
      <Text style={s.tile}>Upbeat Toffee</Text>
      </View>
    );
  }
}
const s = StyleSheet.create({
  
  v1: {
    // backgroundColor: 'skyblue',
// flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile:{
  fontSize:40,  
  marginBottom:20,
  color:"#CBE4DE",
  }
});
