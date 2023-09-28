/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Promo from '../screens/Promo';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Tabs() {
	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarLabel: ({focused}) => {
					if (focused) {
						return (
							<TouchableOpacity
								style={{
									height: 8,
									width: 8,
									borderRadius: 100,
									backgroundColor: '#FFFFFF',
								}}
							/>
						);
					}
				},
				tabBarStyle: {backgroundColor: 'black', paddingTop: 8},
				tabBarActiveTintColor: '#FFFFFF',
				tabBarInactiveTintColor: '#B3B0B6',
			}}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="house" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Promo"
				component={Promo}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="gift" size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({size, color}) => (
						<Icon name="user" size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
