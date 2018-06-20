import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class EventListItem extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Event name: {this.props.item.name}, {"\n"}
          Event location: {this.props.item.location}, {"\n"}
          Type of Event: {this.props.item.location}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5d6f93',
    margin: 10
  },
  text: {
    color: 'white'
  }
});