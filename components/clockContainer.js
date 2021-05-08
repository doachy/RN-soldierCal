import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import NewClock from './newClock';

//https://www.npmjs.com/package/react-native-clock-analog#-usage

export default function ClockContainer(props) {
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