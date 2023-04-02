import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
export default class App extends Component {
  render() {
    return (
      <View style={s.v1}>
        <View style={s.v2}>
          <Text style={s.t1}> App </Text>
        </View>
        {
          // <Image source={require("./assets/snack-icon.png")}/>
          // } <Image source={{uri:"https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.jpg"}}style={{width:250,height:250}}/>
          // // <Button title="click" color="aquamarine" onPress={()=>{
          // // alert("hi")
          // }}/>
        }
        <TouchableOpacity
          style={s.v2}
          onPress={() => {
            alert('hi');
          }}>
          <Text style={s.t1}> App </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.v2}
          onPress={() => {
            alert('hi');
          }}>
          <Image
            source={{
              uri: 'https://png.pngtree.com/element_our/png/20180928/beautiful-hologram-water-color-frame-png_119551.jpg',
            }}
            style={{ width: 250, height: 250 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const s = StyleSheet.create({
  t1: { color: 'red', fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  v1: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  v2: {
    backgroundColor: 'green',
    width: 200,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
  },
});
