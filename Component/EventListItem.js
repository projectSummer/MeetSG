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
        <Text style={styles.header}>
          Event name: {this.props.item.name} {"\n"}
        </Text>
        <Text style={styles.text}>
          {this.props.item.location}, {this.props.item.type}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9bbbf',
    padding: 5
  },
  text: {
    color: 'black'
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  }
});