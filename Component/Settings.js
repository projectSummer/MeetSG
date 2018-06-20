import React, { Component } from 'react';
import EventList from './EventList';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { resetRealmFile, queryAllEvents } from '../Database/AllSchemas';

export default class Settings extends Component {

  ResetDatabase() {
    console.log("reset database");
    //realm.resetRealmFile();
    resetRealmFile();
  }

  ViewDatabase() {
    console.log("view database");
    //realm.queryAllEvent();
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={this.ResetDatabase.bind(this)}>
            <Text style={styles.text}>Reset database</Text>
          </TouchableOpacity>
        </View>

        <EventList />

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
