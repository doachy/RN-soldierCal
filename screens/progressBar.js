import * as Progress from 'react-native-progress';
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Surface, Shape, Group} from '@react-native-community/art';
import {ART} from 'react-native';

export default function ProgressBar(per) {
	return (
		<View style={styles.container}>
			<Progress.Bar progress={.67} width={300} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
	}
});