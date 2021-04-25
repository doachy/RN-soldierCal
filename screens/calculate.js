import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

class Calculate extends React.Component {
	state = {
		days: '0',
		hours: '0',
		minutes: '0',
		seconds: '0',
		nownow: '0',
		now2: '0',
	};

	intervalId;
	intervalId2;

	componentDidMount() {
		const march = new Date('2021-10-01');

		this.intervalId = setInterval(() => {
			this.countDayFN(march);
		}, 1000);
		// countDayFN 함수에 매개변수로 3월1일 객체를 넣어준 후 매 초마다 호출시켜줍니다.
	}

	countDayFN = (toDate) => {
		// 매개변수로는 목표날짜를 받아와줍니다.
		const now = new Date(); // 현재의 날짜 객체를 생성해줍니다.
		const nownow = Math.abs(now.getTime());
		const now2 = Math.abs(toDate.getTime());
		let amount = Math.abs(toDate.getTime() - now.getTime()); // 목표날짜와 현재의 날짜의 gap 을 계산해줍니다.
		// 그러면 날짜 객체의 모양으로 차이가 나오는게 아니라 일반 실수형의 값이 반환됩니다.

		// time is already past
		if (amount < 0) {
			this.setState({
				...this.state,
				days: '0',
				hours: '0',
				minutes: '0',
				seconds: '0',
			});
			// 일, 시, 분, 초를 모두 0으로 셋팅해주고,
			clearInterval(this.intervalId);
			// intervalId 를 삭제시켜줌으로써 더이상의 함수 호출을 멈춰줍니다.
		} else {
			let days = 0;
			let hours = 0;
			let mins = 0;
			let secs = 0;

			// 일, 시, 분, 초 를 모두 0으로 초기화시켜줍니다.

			amount = Math.floor(amount / 1000); // milliseconds 모두 지워줍니다.

			days = Math.floor(amount / 86400);
			// 하루는 총 86400 초이기 때문에 86400 으로 나눈 값이 d-day와의 남은 일수를 나타내줍니다.
			amount = amount % 86400;
			// 나머지값만 받아와줍니다.

			hours = Math.floor(amount / 3600);
			// 1시간은 총 3600 초이기 때문에 3600 으로 나눈 값이 d-day와의 남은 시간수를 나타내줍니다.
			amount = amount % 3600;
			// 나머지값만 받아와줍니다.

			mins = Math.floor(amount / 60);
			// 1분은 총 60 초이기 때문에 60 으로 나눈 값이 d-day와의 남은 분 수를 나타내줍니다.
			amount = amount % 60;
			// 나머지값만 받아와줍니다.

			secs = Math.floor(amount);
			// 나머지 값은 남은 초가 됩니다.

			this.setState({
				...this.state,
				days,
				hours,
				minutes: mins,
				seconds: secs,
				nownow,
				now2,
			});
			// day, hours, minutes, seconds 에 각각 대입해줍니다.
		}
	};

	render() {
		const { days, hours, minutes, seconds, progress, nownow, now2 } = this.state;
		return (
			<View>
				<Text>days={days}</Text>
				<Text>hours={hours}</Text>
				<Text>minutes={minutes}</Text>
				<Text>seconds={seconds}</Text>
				<Text>progress={progress}</Text>
				<Text>nownow={nownow}</Text>
				<Text>now2={now2}</Text>
			</View>
		);
	}
}

export default Calculate;