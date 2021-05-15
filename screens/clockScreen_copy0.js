import React, { useState, useEffect } from 'react';
import Calculate from '../components/calculate';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Button } from 'react-native';
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
	const [final, setFinal] = useState('2021-12-01');
	const [taskItems, setTaskItems] = useState([]);

	const condition = conditions[num];

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

	useEffect(() => {
		const finalDay = new Date(start);
		const startDay = new Date(final);

		this.intervalId = setInterval(() => {
			this.countDayFN(finalDay, startDay);
		}, 200);
	});

	const countDayFN = (final, start) => {
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
		days = Math.floo6r(amount / 86400); // floor하면 내림, ceil하면 올림
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

		setTaskItems([
			...taskItems,
			timeNow, //0
			timeGoal, //1
			clockTimeHours, //2
			clockTimeMins, //3
			clockTimeSecs, //4
			clockTime1, //5
			days, //6
			hours, //7
			mins, //8
			secs, //9
			timeNow, //10
			timeGoal, //11
			totalDid, //12
			totalDay, //13
			perDay, //14
		]);
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

					<ClockContainer hours={taskItems[2]} mins={taskItems[3]} secs={taskItems[4]} />

					<View style={styles.textbox}>
						<Button title="push" onPress={() => setNum(num + 1)}></Button>
						<Text style={{ marginTop: 20, color: 'white' }}>
							clockTime={taskItems[5]}
						</Text>
						<Text style={styles.text}>clockTimeHours={taskItems[2]}</Text>
						<Text style={styles.text}>clockTimeMins={taskItems[3]}</Text>
						<Text style={styles.text}>clockTimeSecs={taskItems[4]}</Text>
						<Text style={styles.text}>num={num}</Text>
						<Text style={{ marginTop: 20, color: 'white' }}>
							*국방 시계는 실제 시간보다 훨씬 느리게 흘러갑니다*
						</Text>
					</View>

					<View style={styles.textbox}>
						<Text style={styles.text}>days={taskItems[6]}</Text>
						<Text style={styles.text}>hours={taskItems[2]}</Text>
						<Text style={styles.text}>minutes={taskItems[3]}</Text>
						<Text style={styles.text}>seconds={taskItems[4]}</Text>
						<Text style={styles.text}>timeGoal={taskItems[1]}</Text>
						<Text style={styles.text}>timeNow={taskItems[0]}</Text>
						<Text style={styles.text}>totalDay={taskItems[13]}</Text>
						<Text style={styles.text}>totalDid={taskItems[12]}</Text>
						<Text style={styles.text}>perDay={taskItems[14]}%</Text>
						<ProgressBar per={taskItems[14]} />
					</View>
				</ScrollView>
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
});