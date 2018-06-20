import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { queryAllEvents } from '../Database/AllSchemas';
import EventListItem from './EventListItem';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: []
    }
    this.reloadData();
  }

  reloadData = () => {
    queryAllEvents().then((events) => {
      this.setState({ eventList: events });
      console.log(events);
      }).catch((error) => {
      this.setState({ eventList: [] });
    });
  }

  _renderItem = ({item, index}) => {
    return (<EventListItem key={item.id} item={item} index={index} />);
  }
  _keyExtractor = item => item.id.toString();

  render() {
    return (
      <View>
        <FlatList
          data={this.state.eventList}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}     
        />
      </View>
    );
  }
}
