import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculate from './calculate';
import ProgressBar from './progressBar';

export default function MainScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Text>상병 김륜기</Text>
				<Text>         </Text>
				<Text>the day when you go home 2021-10-01</Text>
				<Text>         </Text>
				<Calculate/>
			</View>
			<View style={styles.bottomContainer}>
				<Text>전역일 계산기 기능 추가 04-24</Text>
				<Text>계산 세부 기능 추가 04-26</Text>
				<Text>계산 세부 기능 수정 및 페센트 기능 추가 04-27</Text>
				<Text>circle progress bar 추가햣 04-28</Text>
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
		flex: 6,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'blue',
	},
	bottomContainer: {
		flex: 1,
		alignItems: 'center',
		color: 'red',
	},
});