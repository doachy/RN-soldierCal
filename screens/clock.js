import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewClock from '../screens/newClock';

//https://www.npmjs.com/package/react-native-clock-analog#-usage

export default function Clock(props) {
	let hours = props.hours;
	let mins = props.mins;
	let secs = props.secs;

	return (
		<View style={styles.container}>
			<NewClock hour={hours} minutes={mins} seconds={secs} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		marginBottom: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});