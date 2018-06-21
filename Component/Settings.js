import React, { Component } from 'react';
import EventList from './EventList';
import UserList from './UserList';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { fullResetRealmFile, resetRealmFile } from '../Database/AllSchemas';

export default class Settings extends Component {

  ResetDatabase() {
    console.log("reset database");
    resetRealmFile();
  }


  FullResetDatabase() {
    console.log("full reset database");
    fullResetRealmFile();
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.ResetDatabase.bind(this)}>
            <Text style={styles.text}>Reset database</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.FullResetDatabase.bind(this)}>
            <Text style={styles.text}>Full Reset database</Text>
          </TouchableOpacity>
        </View>

        <EventList />
        <UserList />

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
