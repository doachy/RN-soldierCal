import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Clock from './clock';

class CalculateClock extends React.Component {
	state = {
		clockTimeHours: '0',
		clockTimeMins: '0',
		clockTimeSecs: '0',
		clockTime1: '0',
	};

	intervalId;
	intervalId2;

	componentDidMount() {
		const finalDay = new Date('2021-10-01');
		const startDay = new Date('2020-06-01');

		this.intervalId = setInterval(() => {
			this.countDayFN(finalDay, startDay);
		}, 200);
	}

	countDayFN = (final, start) => {
		const now = new Date();
		const timeNow = now.getTime();
		const timeStart = start.getTime();
		const timeGoal = final.getTime();
		let Day = timeGoal - timeStart;
		let Did = timeNow - timeStart;

		let clockTime = 0;
		let clockTime1 = 0;
		let clockTimeHours = 0;
		let clockTimeMins = 0;
		let clockTimeSecs = 0;

		clockTime1 = (Did / Day) * 86400; //x secs
		clockTime1 = clockTime1.toFixed(3);
		clockTime = (Did / Day) * 86400; //x secs
		clockTime = clockTime % 86400;
		clockTimeHours = Math.floor(clockTime / 3600);
		clockTime = clockTime % 3600;
		clockTimeMins = Math.floor(clockTime / 60);
		clockTime = clockTime % 60;
		clockTimeSecs = Math.floor(clockTime);

		this.setState({
			...this.state,
			timeNow,
			timeGoal,
			clockTimeHours,
			clockTimeMins,
			clockTimeSecs,
			clockTime1,
		});
	};

	render() {
		const { clockTimeHours, clockTimeMins, clockTimeSecs, clockTime1 } = this.state;
		return (
			<View style={styles.container}>
				<Clock hours={clockTimeHours} mins={clockTimeMins} secs={clockTimeSecs} />
				<Text>clockTime={clockTime1}</Text>
				<Text>clockTimeHours={clockTimeHours}</Text>
				<Text>clockTimeMins={clockTimeMins}</Text>
				<Text>clockTimeSecs={clockTimeSecs}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 500,
		justifyContent: 'center',
	},
});

export default CalculateClock;