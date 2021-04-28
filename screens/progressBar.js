import * as Progress from 'react-native-progress';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function ProgressBar({per}) {
	return (
		<View style={styles.container}>
			<Text></Text>
			<Text></Text>
			<Progress.Bar progress={0.67} width={300} />
			<Text>{per}%</Text>
			<Text></Text>
			<ProgressCircle
				percent={67}
				radius={60}
				borderWidth={10}
				color="#3399FF"
				shadowColor="#999"
				bgColor="#fff"
			>
				<Text style={{ fontSize: 12 }}>{per}%</Text>
			</ProgressCircle>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});