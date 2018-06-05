import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import t from 'tcomb-form-native';
import realm from '../Database/AllSchemas';

const Form = t.form.Form;

const Event = t.struct({
  name: t.String,
  location: t.String,
  type: t.String
});

const options = {
  fields: {
    name: {
      error: 'You need a name for your event, idiot'
    },
    location: {
      error: 'Choose a location...anywhere...'
    },
    type: {
      error: 'whatkanda event isit?',
    },
  },
};

export default class AddEvent extends Component {

  static navigationOptions = {
    header: null
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    const event = {
      id: Math.floor(Date.now() / 1000),
      name: value.name,
      location: value.location,
      type: value.type
    }
    realm.insertEvent(event);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Form 
          type={Event}
          ref={c => this._form = c}
          options={options}
        />
        <Button
          title="Submit Event"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});