import * as Progress from 'react-native-progress';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';

export default function ProgressBar(props) {
	return (
		<View style={styles.container}>
			<Text></Text>
			<Text></Text>
			<Progress.Bar progress={props.per} width={300} />
			<Text>{props.per}%</Text>
			<Text></Text>
			<ProgressCircle
				percent={props.per}
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
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	},
});