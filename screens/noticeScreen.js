import React, { useState, useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	SafeAreaView,
	KeyboardAvoidingView,
	ScrollView,
	TouchableOpacity,
	Button,
	Keyboard,
	TextInput,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function NoticeScreen({ navigation }) {
	const handleAddTask = () => {
		Keyboard.dismiss();
		navigation.navigate('clock');
	};
	const info = useContext(InfoContext);

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<LinearGradient colors={['#000428', '#004e92', '#004e92']} style={styles.background} />
			<Text style={styles.subtitle}>이름</Text>
			<TextInput style={styles.input} value={info.name}></TextInput>
			<Text style={styles.subtitle}>계급</Text>
			<TextInput style={styles.input} value={info.class}></TextInput>
			<Text style={styles.subtitle}>군별</Text>
			<TextInput style={styles.input} value={info.class}></TextInput>
			<Text style={styles.subtitle}>입대일 - params</Text>
			<TextInput style={styles.input} value={route.params.start}></TextInput>
			<Text style={styles.subtitle}>전역일 - params</Text>
			<TextInput style={styles.input} value={route.params.final}></TextInput>{' '}
			<Text style={styles.subtitle}>입대일 - context</Text>
			<TextInput style={styles.input} value={info.start}></TextInput>
			<Text style={styles.subtitle}>전역일 - context</Text>
			<TextInput style={styles.input} value={info.final}></TextInput>
			<Text></Text>
			<Text></Text>
			<Text></Text>
			<Button color="white" title="설정 완료" onPress={() => handleAddTask()} />
		</View>
	);
}

//notice 스크린에 context.api 사용 먼저 해서 테스트 해보기.

const styles = StyleSheet.create({
	subtitle: {
		color: 'white',
		fontSize: 16,
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 900,
	},
	input: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: '#fff',
		borderColor: '#C0C0C0',
		borderWidth: 1,
		width: 300,
		marginBottom: 20,
		marginTop: 20,
	},
	addWrapper: {
		width: 50,
		height: 50,
		backgroundColor: '#FFF',
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#C0C0C0',
		borderWidth: 1,
	},
	addText: {},
});