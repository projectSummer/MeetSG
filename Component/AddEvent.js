import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class AddEvent extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View>
      <Text>Add Event</Text>
      </View>
    );
  }
}
