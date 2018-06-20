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
    return (<EventListItem item={item} index={index} />);
  }

  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.eventList}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b9bbbf'
  }
});