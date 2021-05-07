import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/mainScreen';
import ClockScreen from './screens/clockScreen';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="main">
				<Drawer.Screen
					name="main"
					component={MainScreen}
					options={{
						headerTitle: 'Sodier Calculation',
						headerShown: true,
					}}
				/>
				<Drawer.Screen
					name="clock"
					component={ClockScreen}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}