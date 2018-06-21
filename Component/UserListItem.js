import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class UserListItem extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Email address: {this.props.item.email} {"\n"}
        </Text>
        <Text style={styles.text}>
          {this.props.item.username}, {this.props.item.password}
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