import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/mainScreen';
import ShareScreen from './screens/shareScreen';
import EvaluationScreen from './screens/evaluationScreen';
import AskScreen from './screens/askScreen';
import NoticeScreen from './screens/noticeScreen';

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				initialRouteName="main"
				screenOptions={{
					headerShown: true,
					headerRight: () => (
						<Button onPress={() => alert('This is a button!')} title="Info" />
					),
				}}
			>
				<Drawer.Screen
					name="main"
					component={MainScreen}
					options={{
						headerTitle: 'Sodier Calculation',
					}}
				/>
				<Drawer.Screen name="share" component={ShareScreen} />
				<Drawer.Screen name="evaluation" component={EvaluationScreen} />
				<Drawer.Screen name="ask" component={AskScreen} />
				<Drawer.Screen name="notice" component={NoticeScreen} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
}