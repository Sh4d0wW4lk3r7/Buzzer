import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
export default class M extends Component {
  gbscr = () => {
    this.props.navigation.navigate('Buzzer', {
      color: this.props.bg,
      tn: this.props.title,
      fc: this.props.fc,
    });
  };
  constructor() {
    super();
    this.state = { flag: false };
  }
  read() {
    db.ref('teams/' + this.props.title + '/flag').on('value', (d) => {
      this.setState({ flag: d.val() });
    });
  }
  componentDidMount() {
    this.read();
  }
  update = async () => {
    db.ref('teams/' + this.props.title).update({ flag: true });
    this.setState({flag:true})
  };
  render() {
    console.log(this.state, this.props.title);
    return (
      <TouchableOpacity
        style={[s.v2, { backgroundColor: this.props.bg }]}
        onPress={() => {
          this.update()
          this.gbscr();
        }}
        disabled={this.state.flag}>
        <Text style={[s.t1, { color: this.props.fc }]}>
          {' '}
          {this.props.title}{' '}
        </Text>
      </TouchableOpacity>
    );
  }
}
const s = StyleSheet.create({
  t1: { fontSize: 21, fontWeight: 'bold', textAlign: 'center' },
  v2: {
    // backgroundColor: this.props.bg,
    width: 220,
    height: 50,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
