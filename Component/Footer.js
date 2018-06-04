import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Footer extends Component<Props> {

  SettingsPage() {
    this.props.goToSettings();
  }

  render() {

    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButtons}>
          <View>
            <Text style={styles.footerText}>My Events</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButtons}>
          <View>
            <Text style={styles.footerText}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButtons}>
          <View>
            <Text style={styles.footerText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButtons}>
          <View>
            <Text style={styles.footerText}>4</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButtons} onPress={this.SettingsPage.bind(this)}>
          <View>
            <Text style={styles.footerText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#E91E63',
    flexDirection: 'row',
    height: 80
  },
  footerButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerText: {
    color: 'white',
    fontSize: 16,
    padding: 4
  }
});