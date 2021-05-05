import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class NewClock extends React.Component {
	render() {
		let {
			size,
			colorClock,
			colorNumber,
			colorCenter,
			colorHour,
			colorMinutes,
			colorSeconds,
			hour,
			minutes,
			seconds,
		} = this.props;

		var date = new Date();
		if (!hour) hour = date.getHours();
		hour = hour > 12 ? hour - 12 : hour;
		if (!minutes) minutes = date.getMinutes();
		minutes = minutes * 6;
		if (!seconds) seconds = date.getSeconds();
		seconds = seconds * 6;

		var lanHour = size / 5;
		var lanMinutes = size / 3.75;
		var lanSeconds = size / 2.8;

		return (
			<View
				style={{
					backgroundColor: colorClock,
					borderRadius: size / 2,
					justifyContent: 'center',
					alignItems: 'center',
					height: size,
					width: size,
				}}
			>
				{[...Array(12).keys()].map((i, key) => {
					let a = -60 + 30 * i;
					let b = 60 - 30 * i;
					return (
						<View
							key={key}
							style={{
								position: 'absolute',
								transform: [{ rotate: a + 'deg' }, { translateX: size / 2 - 15 }],
							}}
						>
							<Text
								style={{
									color: colorNumber,
									fontSize: size / 9,
									fontWeight: 'bold',
									transform: [{ rotate: b + 'deg' }],
								}}
							>
								{i + 1}
							</Text>
						</View>
					);
				})}
				<View
					style={{
						zIndex: 1,
						width: 8,
						height: 8,
						borderRadius: 4,
						backgroundColor: colorCenter,
					}}
				/>
				<View
					style={{
						position: 'absolute',
						width: lanHour,
						height: 4,
						borderRadius: 4,
						backgroundColor: colorHour,
						transform: [
							{ rotate: -90 + hour * 30 + minutes / 12 + 'deg' },
							{ translateX: lanHour / 2 },
						],
					}}
				/>
				<View
					style={{
						position: 'absolute',
						width: lanMinutes,
						height: 4,
						borderRadius: 4,
						backgroundColor: colorMinutes,
						transform: [
							{ rotate: -90 + minutes + 'deg' },
							{ translateX: lanMinutes / 2 },
						],
					}}
				/>
				<View
					style={{
						position: 'absolute',
						width: lanSeconds,
						height: 2,
						borderRadius: 4,
						backgroundColor: colorSeconds,
						transform: [
							{ rotate: -90 + seconds + 'deg' },
							{ translateX: lanSeconds / 2 },
						],
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({});

NewClock.propTypes = {
	size: PropTypes.number,
	colorClock: PropTypes.string,
	colorNumber: PropTypes.string,
	colorCenter: PropTypes.string,
	colorHour: PropTypes.string,
	colorMinutes: PropTypes.string,
};

NewClock.defaultProps = {
	size: 250,
	colorClock: 'rgba(255,255,255,0)',
	colorNumber: '#fff',
	colorCenter: '#fff',
	colorHour: '#fff',
	colorMinutes: '#fff',
	colorSeconds: '#fff',
};