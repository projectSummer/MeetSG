import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { queryAllUsers } from '../Database/AllSchemas';
import UserListItem from './UserListItem';

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    }
    this.reloadData();
  }

  reloadData = () => {
    queryAllUsers().then((users) => {
      this.setState({ userList: users });
      console.log(users);
      }).catch((error) => {
      this.setState({ userList: [] });
    });
  }

  _renderItem = ({item, index}) => {
    return (<UserListItem key={item.email} item={item} index={index} />);
  }
  _keyExtractor = item => item.email.toString();

  render() {

    return (
      <View>
        <FlatList
          data={this.state.userList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}     
        />
      </View>
    );
  }
}
