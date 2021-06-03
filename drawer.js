import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './stack';
import ClockScreen from './screens/clockScreen';
import MainScreen from './screens/mainScreen';

const informations = {
	detail: {
		name: '김륜기',
		class: '상병',
		army: '육군',
		start: '20200601',
		final: '20210924',
	},
	set: {
		name: '',
		class: '',
		army: '',
		start: '',
		final: '',
	},
};

const Drawer = createDrawerNavigator();
const InfoContext = React.createContext(informations.detail);

const DrawerNavigator = () => {
	return (
		<InfoContext.Provider value={informations.detail}>
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
		</InfoContext.Provider>
	);
};

export default DrawerNavigator;