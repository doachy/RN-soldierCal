import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ClockScreen from './screens/clockScreen';
import NoticeScreen from './screens/noticeScreen';
import {InfoContext , informations } from './infoContext';


const Stack = createStackNavigator();


const StackNavigator = () => {
	const config = {
		animation: 'spring',
		config: {
			stiffness: 1000,
			damping: 500,
			mass: 3,
			overshootClamping: true,
			restDisplacementThreshold: 0.01,
			restSpeedThreshold: 0.01,
		},
	};

	const forFade = ({ current }) => ({
		cardStyle: {
			opacity: current.progress,
		},
	});

	return (
		<InfoContext.Provider value={informations.detail}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="clock" component={ClockScreen} />
				<Stack.Screen
					name="notice"
					component={NoticeScreen}
					options={{
						cardStyleInterpolator: forFade,
					}}
				/>
			</Stack.Navigator>
		</InfoContext.Provider>
	);
};

export { StackNavigator };