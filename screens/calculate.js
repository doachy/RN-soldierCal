import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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
	};

	intervalId;
	intervalId2;

	componentDidMount() {
		const finalDay = new Date('2021-10-01');
		const startDay = new Date('2020-06-01');

		this.intervalId = setInterval(() => {
			this.countDayFN(final, start);
		}, 1000);
	}

	countDayFN = (final, start) => {
		const now = new Date();
		const timeNow = now.getTime();
		const timeStart = start.getTime();
		const timeGoal = final.getTime();
		const total = timeGoal - timeStart;
		const did = timeNow - timeStart;
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

			amount = Math.floor(amount / 1000);
			days = Math.floor(amount / 86400); // floor하면 내림, ceil하면 올림
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			amount = amount % 60;
			secs = Math.floor(amount);

			perDay = (totalDid / totalDay) * 100;
			totalDid = Math.ceil(totalDid / 86400000);
			totalDay = Math.floor(totalDay / 86000000);

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
		} = this.state;
		return (
			<View>
				<Text>days={days}</Text>
				<Text>hours={hours}</Text>
				<Text>minutes={minutes}</Text>
				<Text>seconds={seconds}</Text>
				<Text>progress={progress}</Text>
				<Text>timeNow={timeNow}</Text>
				<Text>timeGoal={timeGoal}</Text>
				<Text>totalDay={totalDay}</Text>
				<Text>totalDid={totalDid}</Text>
				<Text>perDay={perDay}</Text>
			</View>
		);
	}
}

export default Calculate;