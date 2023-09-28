/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Tabs from './Tabs';
import {Image, View} from 'react-native';

const Logo = ({children}: {children: React.ReactNode}) => {
	return (
		<View
			style={{
				height: 57,
				backgroundColor: 'black',
				justifyContent: 'center',
				paddingLeft: 24,
				paddingRight: 24,
			}}>
			{children}
		</View>
	);
};

export default function MainStack() {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator
			initialRouteName=""
			screenOptions={{
				header: () => (
					<Logo>
						<Image
							source={require('../../assets/images/Logo.png')}
						/>
					</Logo>
				),
			}}>
			<Stack.Screen name="Tabs" component={Tabs} />
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}
