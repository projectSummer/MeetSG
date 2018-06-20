import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

import realm from '../Database/AllSchemas';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
});

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
  },
};

function isEmpty(obj) {
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }
    return true;
}

export default class Login extends Component {

  static navigationOptions = {
    header: null
  }
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    if (!isEmpty(value)) {
      console.log(user);
    }

  }

  render() {

    return (
      <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          options={options}
          type={User} 
        />        
        <Button
          title="Login"
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