import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';

const sceneryOption = {
	EarlyMorning: {
		gradient: ['#000428', '#004e92', '#004e92'], //done frost ㅇㅇ
		title: 'early Morning',
		subtitle: 'have a good day',
		statusBar: 'dark-content',
	},
	Morning: {
		gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'], //done cool sky ㅇㅇ
		title: 'Morning',
		subtitle: 'have a good day',
		statusBar: 'dark-content',
	},
	Sunrise: {
		gradient: ['#003973', '#6DD5FA', '#F2A1A0'], //done ㅇㅇ
		title: 'Sunrise',
		subtitle: 'its time to get up!',
		statusBar: 'dark-content',
	},
	Afternoon: {
		gradient: ['#0082c8', '#0082c8', '#FFFFFF'], // done hydrogen ㅇㅇ
		title: 'Afternoon',
		subtitle: 'time to go out',
		statusBar: 'dark-content',
	},
	Sunset: {
		gradient: ['#0B486B', '#0B486B', '#F56217'], //done sunset ㅇㅇ
		title: 'Sunset',
		subtitle: 'time to have dinner',
		statusBar: 'dark-content',
	},
	Midnight: {
		gradient: ['#000428', '#000428', '#004E92'], //done frost ㅇㅇ
		title: 'Midnight',
		subtitle: 'its time to go sleep',
		statusBar: 'light-content',
	},
};

export default function Scenery({ condition }) {
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
			<View style={styles.textbox}>
				<Text style={styles.title}>{sceneryOption[condition].title}</Text>
				<Text style={styles.subtitle}>{sceneryOption[condition].subtitle}</Text>
			</View>
		</View>
	);
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

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	textbox:{
		marginTop:200,
		marginBottom:30,
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