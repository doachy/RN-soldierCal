import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CalculateClock from './calculateClock';
import Clock from './clock';

export default function ClockScreen({ navigation }) {
	return (
					<CalculateClock/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});