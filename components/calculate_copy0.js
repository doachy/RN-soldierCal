import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Scenery from './scenery';
import PropTypes from 'prop-types';

export default function Calculate() {
	const [start, setStart] = useState();
	const [final, setFinal] = useState();

	intervalId;

	useEffect(() => {
		const finalDay = new Date(start);
		const startDay = new Date(final);

		this.intervalId = setInterval(() => {
			this.countDayFN(finalDay, startDay);
		}, 200);
	});

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
	};

	return (
		<Scenery
			clockTimeHours={clockTimeHours}
			clockTimeMins={clockTimeMins}
			clockTimeSecs={clockTimeSecs}
			clockTime1={clockTime1}
			days={days}
			hours={hours}
			minutes={minutes}
			seconds={seconds}
			timeNow={timeNow}
			timeGoal={timeGoal}
			totalDay={totalDay}
			totalDid={totalDid}
			perDay={perDay}
		/>
	);
}

Calculate.defaultProps = {
	start: '2020-06-01',
	final: '2021-09-28',
};