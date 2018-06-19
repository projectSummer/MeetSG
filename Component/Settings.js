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
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.ResetDatabase.bind(this)}>
          <Text style={styles.text}>Reset database</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.button} onPress={this.ViewDatabase.bind(this)}>
          <Text style={styles.text}>View database</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height:50,
    width: 120,
    margin: 10,
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    textAlign: 'center',

  },
  container: {
    flexDirection: 'row',
  }
});
