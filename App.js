import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/mainScreen';
import ShareScreen from './screens/shareScreen';
import ClockScreen from './screens/clockScreen';
import AskScreen from './screens/askScreen';
import NoticeScreen from './screens/noticeScreen';

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
				<Drawer.Screen
					name="share"
					component={ShareScreen}
					options={{ headerTitle: 'scenery' }}
				/>
				<Drawer.Screen name="ask" component={AskScreen} />
				<Drawer.Screen name="notice" component={NoticeScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}