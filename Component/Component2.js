import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TextInput
} from 'react-native';

type Props = {};
export default class Component2 extends Component<Props> {
  constructor() {
    super();
    this.state = {
      textValue: 'Hello'
    }
  }

  onChangeText(value) {
    this.setState({
      textValue: value
    });
  }

  onSubmit() {
    console.log('submit');
  }
  render() {
    return (
      <View>
        <TextInput 
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          />

          <Text>{this.state.textValue}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component2', () => Component2);