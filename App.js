import React, { Component } from 'react';
import Component1 from './Component/Component1';
import Component2 from './Component/Component2';
import Component3 from './Component/Component3';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <Component1/>
        <Component3/>
        <Component2/>
      </View>
    );
  }
}