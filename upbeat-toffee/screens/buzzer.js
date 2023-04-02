import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import database from '../config';
import { Audio } from 'expo-av';
import firebase from 'firebase';
export default class Buzzer extends Component {
  constructor() {
    super();
    this.state = { ibp: false };
  }
  read() {
    database.ref('teams/' + this.props.title + '/ibp').on('value', (d) => {
      this.setState({ ibp: d.val() });
    });
  }
  componentDidMount() {
    this.read();
  }
  play = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  };
  updatedb() {
    var t = firebase.database.ServerValue.TIMESTAMP; //new Date().getTime()
    database
      .ref('teams/' + this.props.navigation.state.params.tn + '/')
      .update({ ibp: true, ts: t });
      this.setState({ibp:true})
  }
  render() {
    console.log(5, typeof this.props.navigation.state.params.fc, this.props);
    return (
      <View style={s.v}>
        <ImageBackground
          source={{
            uri: 'https://thumbs.dreamstime.com/b/sunset-gradient-over-ocean-consisting-large-spectrum-colours-156732916.jpg',
          }}
          resizeMode="cover"
          style={s.img}>
          <TouchableOpacity
            style={[
              s.btn,
              { backgroundColor: this.props.navigation.state.params.color },
            ]}
            onPress={() => {
              this.play();
              this.updatedb();
            }}
            disabled={this.state.ibp}>
            <Text
              style={[s.txt, { color: this.props.navigation.state.params.fc }]}>
              Press me
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const s = StyleSheet.create({
  btn: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  v: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
