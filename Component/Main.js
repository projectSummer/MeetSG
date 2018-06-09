import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddEvent from './AddEvent';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import realm from '../Database/AllSchemas';

export default class Main extends Component {

  GoToAddEvent() {
    this.props.navigation.navigate('AddEv');
  }

  GoToSettingsPage() {
    this.props.navigation.navigate('Settings');
  }

  static navigationOptions = {
    header: null
  }

  render() {

    return (
      <View style={styles.container}>

        <Header addNewEvent={this.GoToAddEvent.bind(this)}/>
        {/*<Footer goToSettings={this.GoToSettingsPage.bind(this)}/>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});