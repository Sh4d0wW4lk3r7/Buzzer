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
import Appheader from '../components/Appheader';
import M from '../components/M';
import Buzzer from './buzzer';
export default class Home extends Component {
  render() {
    console.log(18, this.props);
    return (
      <View style={s.v1}>
        <ImageBackground
          source={{
            uri: 'https://thumbs.dreamstime.com/b/sunset-gradient-over-ocean-consisting-large-spectrum-colours-156732916.jpg',
          }}
          resizeMode="cover"
          style={s.img}>
          <Appheader />
          <M
            bg="#900C3F"
            title="thrilled tortillas"
            fc="#F39189"
            navigation={this.props.navigation}
          />
          <M
            bg="#C70039"
            title="tactless cashew"
            fc="#BB8082"
            navigation={this.props.navigation}
          />
          <M
            bg="#FF5733"
            title="sadistic blueberries"
            fc="#6E7582"
            navigation={this.props.navigation}
          />
          <M
            bg="#FFC300"
            title="crabby milkshake"
            fc="#046582"
            navigation={this.props.navigation}
          />
          {
            // <TouchableOpacity onPress={() => {
            // this.props.navigation.navigate("Buzzer")
            // }}>Click here</TouchableOpacity>
          }
        </ImageBackground>
      </View>
    );
  }
}
const s = StyleSheet.create({
  v1: {
    // backgroundColor: 'skyblue',
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
