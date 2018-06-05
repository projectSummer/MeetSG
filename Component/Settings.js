import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import realm from '../Database/AllSchemas';

export default class Settings extends Component {

  ResetDatabase() {
    console.log("reset database");
    realm.resetRealmFile();
  }

  ViewDatabase() {
    console.log("view database");
    realm.queryAllEvent();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.button1} onPress={this.ResetDatabase.bind(this)}>
          <Text>Reset database</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button2} onPress={this.ViewDatabase.bind(this)}>
          <Text>View database</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: 'blue',
    height:50,
    width: 100
  },

  button2: {
    backgroundColor: 'red',
    height:50,
    width: 100
  }
});
