import React, { useState } from 'react';
import { useName } from '../testContext';
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

export default function NoticeScreen({ navigation, route }) {
	const { name, setName } = useName();
	const [tempName, setTempName] = useState('이름');

	const handleAddTask = () => {
		Keyboard.dismiss();
		setName(tempName);
		navigation.navigate('clock');
	};

	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<LinearGradient colors={['#000428', '#004e92', '#004e92']} style={styles.background} />
			<Text style={styles.subtitle}>이름</Text>
			<TextInput
				style={styles.input}
				value={tempName}
				onChangeText={(text) => setTempName(text)}
			></TextInput>
			<Text style={styles.subtitle}>계급</Text>
			<TextInput style={styles.input}></TextInput>
			<Text style={styles.subtitle}>군별</Text>
			<TextInput style={styles.input}></TextInput>
			<Text style={styles.subtitle}>입대일</Text>
			<TextInput style={styles.input} value={route.params.start}></TextInput>
			<Text style={styles.subtitle}>전역일</Text>
			<TextInput style={styles.input} value={route.params.final}></TextInput>
			<Text></Text>
			<Text></Text>
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