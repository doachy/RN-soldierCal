import React, { useState, useEffect } from 'react';
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
import ClockContainer from '../components/clockContainer';
import ProgressBar from '../components/progressBar';
import { LinearGradient } from 'expo-linear-gradient';

// 계산 기능
// 배경 객체

//분할 - > 시계,

export default function ClockScreen({ navigation }) {
	const conditions = ['EarlyMorning', 'Sunrise', 'Morning', 'Afternoon', 'Sunset', 'Midnight'];
	const [num, setNum] = useState(0);
	const [start, setStart] = useState('2020-06-01');
	const [prevstart, setPrevstart] = useState('2020-06-01');
	const [final, setFinal] = useState('2021-09-24');
	const [prevfinal, setPrevfinal] = useState('2021-09-24');
	const [taskItems, setTaskItems] = useState({
		timeNow: '', //0
		timeGoal: '', //1
		clockTimeHours: '', //2
		clockTimeMins: '', //3
		clockTimeSecs: '', //4
		clockTime1: '', //5
		days: '', //6
		hours: '', //7
		mins: '', //8
		secs: '', //9
		timeNow: '', //10
		timeGoal: '', //11
		totalDid: '', //12
		totalDay: '', //13
		perDay: '',
	});
	let finalDay = new Date(final);
	let startDay = new Date(start);
	const condition = conditions[num];

	useEffect(() => {
		intervalId = setInterval(() => {
			countDayFN(finalDay, startDay);
		}, 100);
	}, []);

	useEffect(() => {
		if (start !== '2020-06-01') {
			clearInterval(intervalId);
			intervalId = setInterval(() => {
				countDayFN(finalDay, startDay);
			}, 4000);
		}
	}, [start]);

	const sceneryOption = {
		EarlyMorning: {
			gradient: ['#000428', '#004e92', '#004e92'], //done frost ㅇㅇ
			title: 'dawn',
			subtitle: 'get up',
			statusBar: 'light-content',
		},
		Morning: {
			gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'], //done cool sky ㅇㅇ
			title: 'Morning',
			subtitle: 'have a good day',
			statusBar: 'light-content',
		},
		Sunrise: {
			gradient: ['#003973', '#6DD5FA', '#F2A1A0'], //done ㅇㅇ
			title: 'Sunrise',
			subtitle: 'its time to get up!',
			statusBar: 'light-content',
		},
		Afternoon: {
			gradient: ['#0082c8', '#0082c8', '#FFFFFF'], // done hydrogen ㅇㅇ
			title: 'Afternoon',
			subtitle: 'time to go out',
			statusBar: 'light-content',
		},
		Sunset: {
			gradient: ['#0B486B', '#0B486B', '#F56217'], //done sunset ㅇㅇ
			title: 'Sunset',
			subtitle: 'time to have dinner',
			statusBar: 'light-content',
		},
		Midnight: {
			gradient: ['#000428', '#000428', '#004E92'], //done frost ㅇㅇ
			title: 'Midnight',
			subtitle: 'its time to go sleep',
			statusBar: 'light-content',
		},
	};

	countDayFN = (final, start) => {
		const now = new Date();
		const timeNow = now.getTime();
		const timeStart = start.getTime();
		const timeGoal = final.getTime();
		let Day = timeGoal - timeStart;
		let Did = timeNow - timeStart;
		let amount = final.getTime() - now.getTime(); //남은 복무일

		let clockTime = 0;
		let clockTime1 = 0;
		let clockTimeHours = 0;
		let clockTimeMins = 0;
		let clockTimeSecs = 0;

		let days = 0;
		let hours = 0;
		let mins = 0;
		let secs = 0;
		let perDay = 0;
		let totalDay = 0;
		let totalDid = 0;

		clockTime1 = (Did / Day) * 86400; //x secs
		clockTime1 = clockTime1.toFixed(3);
		clockTime = (Did / Day) * 86400; //x secs
		clockTime = clockTime % 86400;
		clockTimeHours = Math.floor(clockTime / 3600);
		clockTime = clockTime % 3600;
		clockTimeMins = Math.floor(clockTime / 60);
		clockTime = clockTime % 60;
		clockTimeSecs = clockTime.toFixed(3);

		amount = Math.floor(amount / 1000);
		days = Math.floor(amount / 86400); // floor하면 내림, ceil하면 올림
		amount = amount % 86400;
		hours = Math.floor(amount / 3600);
		amount = amount % 3600;
		mins = Math.floor(amount / 60);
		amount = amount % 60;
		secs = Math.floor(amount);

		perDay = (Did / Day) * 100;
		perDay = perDay.toFixed(7);
		totalDid = Math.ceil(Did / 86400000);
		totalDay = Math.floor(Day / 86400000);

		setTaskItems(
			{
				timeNow: timeNow, //0
				timeGoal: timeGoal, //1
				clockTimeHours: clockTimeHours, //2
				clockTimeMins: clockTimeMins, //3
				clockTimeSecs: clockTimeSecs, //4
				clockTime1: clockTime1, //5
				days: days, //6
				hours: hours, //7
				mins: mins, //8
				secs: secs, //9
				timeNow: timeNow, //10
				timeGoal: timeGoal, //11
				totalDid: totalDid, //12
				totalDay: totalDay, //13
				perDay: perDay,
			} //14
		);
	};

	const handleClick = () => {
		if (num > 4) {
			setNum(0);
		} else {
			setNum(num + 1);
		}
	};

	const handleAddTask = () => {
		Keyboard.dismiss();
		setStart(prevstart);
		setFinal(prevfinal);
		finalDay = new Date(final);
		startDay = new Date(start);
	};

	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[
					sceneryOption[condition].gradient[0],
					sceneryOption[condition].gradient[1],
					sceneryOption[condition].gradient[2],
				]}
				style={styles.background}
			/>
			<StatusBar barStyle={sceneryOption[condition].statusBar} />
			<SafeAreaView>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.textbox2}>
						<Text style={styles.title}>{sceneryOption[condition].title}</Text>
						<Text style={styles.subtitle}>{sceneryOption[condition].subtitle}</Text>
					</View>

					<ClockContainer
						hours={taskItems['clockTimeHours']}
						mins={taskItems['clockTimeMins']}
						secs={taskItems['clockTimeSecs']}
					/>

					<View style={styles.textbox}>
						<Button title="push" onPress={() => handleClick()}></Button>
						<Text style={{ marginTop: 20, color: 'white' }}>
							clockTime={taskItems['clockTime1']}
						</Text>
						<Text style={styles.text}>
							clockTimeHours={taskItems['clockTimeHours']}
						</Text>
						<Text style={styles.text}>clockTimeMins={taskItems['clockTimeMins']}</Text>
						<Text style={styles.text}>clockTimeSecs={taskItems['clockTimeSecs']}</Text>
						<Text style={styles.text}>num={num}</Text>
						<Text style={styles.text}>start={start}</Text>
						<Text style={styles.text}>final={final}</Text>
						<Text style={{ marginTop: 20, color: 'white' }}>
							*국방 시계는 실제 시간보다 훨씬 느리게 흘러갑니다*
						</Text>
					</View>

					<View style={styles.textbox}>
						<Text style={styles.text}>days={taskItems['days']}</Text>
						<Text style={styles.text}>hours={taskItems['hours']}</Text>
						<Text style={styles.text}>minutes={taskItems['mins']}</Text>
						<Text style={styles.text}>seconds={taskItems['secs']}</Text>
						<Text style={styles.text}>timeGoal={taskItems['timeGoal']}</Text>
						<Text style={styles.text}>timeNow={taskItems['timeNow']}</Text>
						<Text style={styles.text}>totalDay={taskItems['totalDay']}</Text>
						<Text style={styles.text}>totalDid={taskItems['totalDid']}</Text>
						<Text style={styles.text}>perDay={taskItems['perDay']}%</Text>
						<ProgressBar per={taskItems['perDay']} />
					</View>
				</ScrollView>

				{/* Write a task */}
				{/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.writeTaskWrapper}
				>
					<TextInput
						style={styles.input}
						placeholder={'Write a task'}
						value={prevstart}
						onChangeText={(text) => setPrevstart(text)}
					/>
					<TextInput
						style={styles.input}
						placeholder={'Write a task'}
						value={prevfinal}
						onChangeText={(text) => setPrevfinal(text)}
					/>
					<TouchableOpacity onPress={() => handleAddTask()}>
						<View style={styles.addWrapper}>
							<Text style={styles.addText}>+</Text>
						</View>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	textbox: {
		marginBottom: 30,
	},
	textbox2: {
		marginTop: 120,
		marginBottom: 20,
		paddingHorizontal: 20,
		alignItems: 'flex-start',
	},
	title: {
		color: 'white',
		fontSize: 50,
		fontWeight: '300',
		marginBottom: 10,
	},
	subtitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 24,
	},
	background: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		height: 900,
	},
	button: {
		padding: 15,
		alignItems: 'center',
		borderRadius: 5,
	},
	text: {
		backgroundColor: 'transparent',
		fontSize: 15,
		color: '#fff',
	},
	writeTaskWrapper: {
		position: 'absolute',
		bottom: 60,
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: '#FFF',
		borderRadius: 60,
		borderColor: '#C0C0C0',
		borderWidth: 1,
		width: 250,
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: '#FFF',
		borderRadius: 60,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#C0C0C0',
		borderWidth: 1,
	},
	addText: {},
});