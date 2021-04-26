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
	};

	intervalId;
	intervalId2;

	componentDidMount() {
		const march = new Date('2022-02-02');

		this.intervalId = setInterval(() => {
			this.countDayFN(march);
		}, 1000);
	}

	countDayFN = (toDate) => {
		const now = new Date();
		const timeNow = now.getTime();
		const timeGoal = toDate.getTime();
		let amount = toDate.getTime() - now.getTime();

		if (amount < 0) {
			this.setState({
				...this.state,
				days: '0',
				hours: '0',
				minutes: '0',
				seconds: '0',
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

			this.setState({
				...this.state,
				days,
				hours,
				minutes: mins,
				seconds: secs,
				timeNow,
				timeGoal,
			});
		}
	};

	render() {
		const { days, hours, minutes, seconds, progress, timeNow, timeGoal } = this.state;
		return (
			<View>
				<Text>days={days}</Text>
				<Text>hours={hours}</Text>
				<Text>minutes={minutes}</Text>
				<Text>seconds={seconds}</Text>
				<Text>progress={progress}</Text>
				<Text>timeNow={timeNow}</Text>
				<Text>timeGoal={timeGoal}</Text>
			</View>
		);
	}
}

export default Calculate;