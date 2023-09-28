import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import { StatusBar } from 'react-native';

export default function RootNavigation() {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'light-content'} backgroundColor="black" />
			<MainStack />
		</NavigationContainer>
	);
}
