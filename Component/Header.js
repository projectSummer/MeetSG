import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {

  Press() {
    this.props.addNewEvent();
  }
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>MeetSG</Text>
        <TouchableOpacity style={styles.addButton} onPress={this.Press.bind(this)}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
  backgroundColor: '#E91E63',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 10,
  borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    padding: 26
  },
  addButton: {
  backgroundColor: '#00FF00',
  borderRadius: 35,
  width: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 10,
  bottom: 15
  },
  addButtonText: {
    fontSize: 24,
    color: 'white'
  }
});