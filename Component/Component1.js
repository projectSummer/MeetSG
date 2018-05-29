import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

type Props = {};
export default class Component1 extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Brad',
      showName: false,
      message : this.props.message
    }
  }

  static defaultProps = {
    message: 'hello world'
  }
  render() {
    let name = this.state.showName ? this.state.name : 'no name set';
    return (
      <View>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1);