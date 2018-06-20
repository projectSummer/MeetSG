import React, { Component } from 'react';
import Main from './Component/Main';
import Header from './Component/Header';
import AddEvent from './Component/AddEvent';
import Settings from './Component/Settings';

import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
	{
	Home: {
		screen: Main,
	},
	AddEv: AddEvent,
	Settings: Settings,
	},
	{
		initialRouteName: 'Home',
	}
);

export default class App extends React.Component {
	render() {
		return (
			<RootStack />
		);
	}
}