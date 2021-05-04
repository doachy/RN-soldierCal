import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Scenery from '../screens/scenery';

export default function ShareScreen({ navigation }) {
	const condition='Morning';
//	const condition='EarlyMorning';
//	const condition='Sunrise';
//	const condition='BeforeSunrise';
//	const condition='Noon';
//	const condition='Afternoon';
//	const condition='Evening';
//	const condition='Sunset';
//  const condition='Midnight';
	return (
			<Scenery condition={condition}/>
	);
}

/*		'Morning',
		'Sunrise',
		'Noon',
		'Afternoon',
		'Evening',
		'Sunset',
		'Midnight', */