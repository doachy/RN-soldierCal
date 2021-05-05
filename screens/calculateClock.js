import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Clock from './clock';
import Scenery from './scenery';

class CalculateClock extends React.Component {
	state = {
		clockTimeHours: '0',
		clockTimeMins: '0',
		clockTimeSecs: '0',
		clockTime1: '0',
		num: '0',
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
		clockTimeSecs = clockTime.toFixed(3);

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

	 handleClick() {
    this.setState(() => {
      return {num: this.state.num + 1};
    });
  };

	render() {
		const { clockTimeHours, clockTimeMins, clockTimeSecs, clockTime1, num } = this.state;
		const conditions = ['EarlyMorning', 'Morning', 'Sunrise', 'Afternoon', 'Sunset', 'Midnight'];

		return (
			<View style={styles.container}>
				<Scenery condition={conditions[this.state.num]} />
				<Clock hours={clockTimeHours} mins={clockTimeMins} secs={clockTimeSecs} />
				<View style={styles.textbox}>
					<Button title="push" onPress={() => this.handleClick()}></Button>
					<Text style={{ marginTop: 20, color: 'white' }}>clockTime={clockTime1}</Text>
					<Text style={styles.text}>clockTimeHours={clockTimeHours}</Text>
					<Text style={styles.text}>clockTimeMins={clockTimeMins}</Text>
					<Text style={styles.text}>clockTimeSecs={clockTimeSecs}</Text>
					<Text style={{ marginTop: 20, color: 'white' }}>
						*국방 시계는 실제 시간보다 훨씬 느리게 흘러갑니다*
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: 414,
	},
	textbox: {
		alignItems: 'center',
	},
	text: {
		color: 'white',
	},
});

export default CalculateClock;