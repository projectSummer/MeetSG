import React, { Component } from 'react';
import Main from './Component/Main';
import AddEvent from './Component/AddEvent';
import Settings from './Component/Settings';

import {
    createBottomTabNavigator,
    createStackNavigator,
} from 'react-navigation';
import createStyles from './Component/Footer';


const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Main,
        },
        AddEv: AddEvent,
    },
    {
        initialRouteName: 'Home',
    }
);

const SettingsStack = createStackNavigator(
    {
        Settings: Settings,
    },
    {
        initialRouteName: 'Settings',
    }
);

const styles = createStyles({
    footer: {
        height: 60
    }
});

const TabStack = createBottomTabNavigator(
    {
		Events: Main,
		two : Main,
        Home: HomeStack,
		four: Main,
        Settings: SettingsStack,
    },
    {
        initialRouteName: 'Home',
		tabBarOptions: {
            activeTintColor: '#1EEEEE' ,
			activeBackgroundColor: '#E91E63',
			inactiveTintColor: '#777777',
			inactiveBackgroundColor: '#FFAAEE',
			style: styles.footer,
            labelStyle: styles.footerText,
			tabStyle: styles.footerButtons
		}
    }
);

export default class App extends Component {
	render() {
		return (
			<TabStack />
		);
	}
}

// export default class App extends Component {

// 	render() {
// 		return (
// 			<Main />
// 		);
// 	}
// }