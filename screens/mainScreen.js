import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculate from './calculate';

export default function MainScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Text>상병 김륜기</Text>
				<Calculate/>
			</View>
			<View style={styles.bottomContainer}>
				<Text>전역일 D-160</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	topContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'blue',
	},
	bottomContainer: {
		flex: 3,
		alignItems: 'center',
		color: 'red',
	},
});