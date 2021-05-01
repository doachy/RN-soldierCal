import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ProgressBar from './progressBar';
import Clock from './clock.js';

class Calculate extends React.Component {
	state = {
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
		timeNow: '0',
		timeGoal: '0',
		totalDay: '0',
		totalDid: '0',
		perDay: '0',
		clockTimeHours: '0',
		clockTimeMins: '0',
		clockTimeSecs: '0',
	};

	intervalId;
	intervalId2;

	componentDidMount() {
		const finalDay = new Date('2021-10-01');
		const startDay = new Date('2020-06-01');

		this.intervalId = setInterval(() => {
			this.countDayFN(finalDay, startDay);
		}, 100);
	}

	countDayFN = (final, start) => {
		const now = new Date();
		const timeNow = now.getTime();
		const timeStart = start.getTime();
		const timeGoal = final.getTime();
		let Day = timeGoal - timeStart;
		let Did = timeNow - timeStart;
		let amount = final.getTime() - now.getTime(); //남은 복무일

		if (amount < 0) {
			this.setState({
				...this.state,
				days: '0',
				hours: '0',
				minutes: '0',
				seconds: '0',
				totalDay: '0',
				totalDid: '0',
				perDay: '0',
			});
			// 일, 시, 분, 초를 모두 0으로 셋팅해주고
			clearInterval(this.intervalId);
			// intervalId 를 삭제시켜줌으로써 더이상의 함수 호출을 멈춰줍니다.
		} else {
			let days = 0;
			let hours = 0;
			let mins = 0;
			let secs = 0;
			let perDay = 0;
			let totalDay = 0;
			let totalDid = 0;
			let clockTime = 0;
			let clockTimeHours = 0;
			let clockTimeMins = 0;
			let clockTimeSecs = 0;

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

			clockTime = (Did / Day) * 86400; //x secs
			clockTimeHours = Math.floor(clockTime / 3600);
			clockTime = clockTime % 3600;
			clockTimeMins = Math.floor(clockTime / 60);
			clockTime = clockTime % 60;
			clockTimeSecs = Math.floor(clockTime);

			this.setState({
				...this.state,
				days,
				hours,
				minutes: mins,
				seconds: secs,
				timeNow,
				timeGoal,
				totalDid,
				totalDay,
				perDay,
				clockTimeHours,
				clockTimeMins,
				clockTimeSecs,
			});
		}
	};

	render() {
		const {
			days,
			hours,
			minutes,
			seconds,
			progress,
			timeNow,
			timeGoal,
			totalDay,
			totalDid,
			perDay,
			clockTimeHours,
			clockTimeMins,
			clockTimeSecs,
		} = this.state;
		return (
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<Text>days={days}</Text>
					<Text>hours={hours}</Text>
					<Text>minutes={minutes}</Text>
					<Text>seconds={seconds}</Text>
					<Text>progress={progress}</Text>
					<Text>timeNow={timeNow}</Text>
					<Text>timeGoal={timeGoal}</Text>
					<Text>totalDay={totalDay}</Text>
					<Text>totalDid={totalDid}</Text>
					<Text style={{marginBottom:100}}>perDay={perDay}%</Text>
				</View>
				<View style={styles.containerBottom}>
					<ProgressBar per={perDay} />
					<Clock />
					<Text>clockTimeHours={clockTimeHours}</Text>
					<Text>clockTimeMins={clockTimeMins}</Text>
					<Text>clockTimeSecs={clockTimeSecs}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: 'center',
	},
	containerTop: {
		flex:1,
		marginTop: 20,
		justifyContent: 'center',
	},
	containerBottom: {
		marginTop: 10,
		justifyContent: 'center',
	},
});

export default Calculate;