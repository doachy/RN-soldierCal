import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './stack';
import ClockScreen from './screens/clockScreen';
import MainScreen from './screens/mainScreen';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
			<Drawer.Navigator initialRouteName="clock">
				<Drawer.Screen name="clock" component={StackNavigator} />
				<Drawer.Screen
					name="main"
					component={MainScreen}
					options={{
						headerTitle: 'Sodier Calculation',
						headerShown: true,
					}}
				/>
			</Drawer.Navigator>
	);
};

export default DrawerNavigator;