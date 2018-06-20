import React, { Component } from 'react';
import Main from './Component/Main';
import AddEvent from './Component/AddEvent';
import Settings from './Component/Settings';
import Login from './Component/Login';
import Signup from './Component/Signup';

import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
	{
	Home: {
		screen: Main,
	},
	Login: Login,
	Signup: Signup,
	AddEv: AddEvent,
	Settings: Settings,
	},
	{
		initialRouteName: 'Login',
	}
);

export default class App extends React.Component {
	render() {
		return (
			<RootStack />
		);
	}
}