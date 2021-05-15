import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';

export default function MainScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View style={styles.topContainer}>
					<Text>상병 김륜기</Text>
					<Text>the day when you go home 2021-10-01</Text>
				</View>
				<View style={styles.bottomContainer}>
					<Text>전역일 계산기 기능 추가 04-24</Text>
					<Text>계산 세부 기능 추가 04-26</Text>
					<Text>계산 세부 기능 수정 및 페센트 기능 추가 04-27</Text>
					<Text>circle progress bar 추가 04-28</Text>
					<Text>clock analog 추가 04-29</Text>
					<Text>1년 6개월->24시간 환산 알고리즘 추가 05-01</Text>
					<Text>customed clock making, module for clockScreen 05-02</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	contentContainer: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	topContainer: {
		paddingTop: 70,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'blue',
	},
	bottomContainer: {
		alignItems: 'center',
		marginTop: 10,
		color: 'red',
	},
});