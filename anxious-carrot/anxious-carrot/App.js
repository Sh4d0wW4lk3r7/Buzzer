import db from './config';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import M from './components/M';
import AppHeader from './components/AppHeader';
export default class App extends Component {
  constructor() {
    super();
    this.state = { teams: [], flag: false };
  }
  readdb() {
    var t = [];

    this.setState({ teams: t });
    db.ref('teams').on('value', (a) => {
      var d = a.val();
      t = [];

      for (var i in d) {
        if (d[i]['ibp']) {
          t.push([i, d[i]['ts']]);
        }
      }

      t.sort((t1, t2) => {
        return new Date(t1[1]) - new Date(t2[1]);
      });

      this.setState({ teams: t, flag: true });
    });
  }
  componentDidMount() {
    this.readdb();
  }
  resetdb = async () => {
    await db.ref('teams').update({
      'crabby milkshake': { ibp: false, ts: 0,flag:false },
      'sadistic blueberries': { ibp: false, ts: 0,flag:false },
      'tactless cashew': { ibp: false, ts: 0,flag:false },
      'thrilled tortillas': { ibp: false, ts: 0,flag:false },
    });
    this.setState({ teams: [] });
  };
  render() {
    if (this.state.flag) {
      console.log(45, this.state);
      return (
        <View style={s.v1}>
          <ImageBackground
            source={{
              uri: 'https://thumbs.dreamstime.com/b/sunset-gradient-over-ocean-consisting-large-spectrum-colours-156732916.jpg',
            }}
            resizeMode="cover"
            style={s.img}>
            <AppHeader />
            {this.state.teams.map((i) => {
              if (i[0] == 'thrilled tortillas') {
                bg = '#900C3F';
                fc = '#F39189';
              } else if (i[0] == 'crabby milkshake') {
                bg = '#FFC300';
                fc = '#046582';
              } else if (i[0] == 'tactless cashew') {
                bg = '#C70039';
                fc = '#BB8082';
              } else if (i[0] == 'sadistic blueberries') {
                bg = '#FF5733';
                fc = '#6E7582';
              }
              return <M title={i[0]} fc={fc} bg={bg} />;
            })}
            <TouchableOpacity
              onPress={() => {
                this.resetdb();
              }}>
              Reset
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}
const s = StyleSheet.create({
  v1: {
    flex: 1,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
