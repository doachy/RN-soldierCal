import * as Progress from 'react-native-progress';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function ProgressBar(props) {
	let percent1 = Math.floor(props.per);
	let amount = props.per / 100;
	let percent2 = Number(amount.toFixed(2));

	return (
		<View style={styles.container}>
			<Progress.Bar progress={percent2} width={300} />
			<Text>{props.per}%</Text>
			<Text></Text>
			<ProgressCircle
				percent={percent1}
				radius={70}
				borderWidth={12}
				color="#3399FF"
				shadowColor="#999"
				bgColor="#fff"
			>
				<Text style={{ fontSize: 16 }}>{props.per}%</Text>
			</ProgressCircle>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});