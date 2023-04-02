import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
export default class M extends Component {
  render() {
    console.log(this.props.bg);
    return (
      <View style={[s.v2, { backgroundColor: this.props.bg }]}>
        <Text style={[s.t1, { color: this.props.fc }]}>
          {' '}
          {this.props.title}{' '}
        </Text>
      </View>
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
