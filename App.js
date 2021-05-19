import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './drawer';


const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
}