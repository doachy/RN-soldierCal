import * as React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';
import Clock from './clock';
import { LinearGradient } from 'expo-linear-gradient';

export default class Scenery extends React.Component {
	state = {
		num: 0,
	};

	handleClick() {
		this.setState(() => {
			if (this.state.num > 4) {
				this.setState({
					num: 0,
				});
			} else {
				return { num: this.state.num + 1 };
			}
		});
	}
	render() {
		let {
			clockTimeHours,
			clockTimeMins,
			clockTimeSecs,
			clockTime1,
		} = this.props;
		
		const { num } = this.state;
		const conditions = [
			'EarlyMorning',
			'Sunrise',
			'Morning',
			'Afternoon',
			'Sunset',
			'Midnight',
		];
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
		return (
			<View style={styles.container}>
				<LinearGradient
					// Background Linear Gradient
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
						<Clock hours={clockTimeHours} mins={clockTimeMins} secs={clockTimeSecs} />
						<View style={styles.textbox}>
							<Button title="push" onPress={() => this.handleClick()}></Button>
							<Text style={{ marginTop: 20, color: 'white' }}>
								clockTime={clockTime1}
							</Text>
							<Text style={styles.text}>clockTimeHours={clockTimeHours}</Text>
							<Text style={styles.text}>clockTimeMins={clockTimeMins}</Text>
							<Text style={styles.text}>num={num}</Text>
							<Text style={styles.text}>clockTimeSecs={clockTimeSecs}</Text>
							<Text style={{ marginTop: 20, color: 'white' }}>
								*국방 시계는 실제 시간보다 훨씬 느리게 흘러갑니다*
							</Text>
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}

Scenery.propTypes = {
	condition: PropTypes.oneOf([
		'EarlyMorning',
		'Morning',
		'Sunrise',
		'Afternoon',
		'Sunset',
		'Midnight',
	]).isRequired,
};
Scenery.defaultProps = {
	condition: 'Morning',
};

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
	},
	hour: {
		fontSize: 36,
		color: 'white',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
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
	textContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
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