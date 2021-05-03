import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';

const sceneryOption = {
	EarlyMorning: {
		gradient: ['#000428', '#004e92', '#004e92'], //done frost
		title: 'Morning',
		subtitle: 'have a good day',
		statusBar: 'light-content',
	},
	Morning: {
		gradient: ['#2980B9', '#6DD5FA', '#FFFFFF'], //done cool sky
		title: 'Morning',
		subtitle: 'have a good day',
		statusBar: 'light-content',
	},
	Sunrise: {
		gradient: ['#003973', '#003973', '#E5E5BE'], //done horizon
		title: 'Sunrise',
		subtitle: 'its time to get up!',
		statusBar: 'light-content',
	},
	BeforeSunrise: {
		gradient: ['#334d50', '#334d50', '#cbcaa5'], //done anwar
		title: 'Sunrise',
		subtitle: 'its time to get up!',
		statusBar: 'light-content',
	},
	Noon: {
		gradient: ['#2193b0', '#6dd5ed', '#6dd5ed'], //done sexy blue
		title: 'Noon',
		subtitle: 'did you have lunch?',
		statusBar: 'light-content',
	},
	Afternoon: {
		gradient: ['#2193b0', '#6dd5ed', '#6dd5ed'],
		title: 'Afternoon',
		subtitle: 'time to go out',
		statusBar: 'light-content',
	},
	Evening: {
		gradient: ['#1A2980', '#26D0CE', '#26D0CE'], //done aqua marine
		title: 'Evening',
		subtitle: 'hi',
		statusBar: 'light-content',
	},
	Sunset: {
		gradient: ['#0B486B', '#0B486B', '#F56217'], //done sunset
		title: 'Sunset',
		subtitle: 'time to have dinner',
		statusBar: 'light-content',
	},
	Midnight: {
		gradient: ['#000428', '#000428', '#004E92'], //done frost
		title: 'Midnight',
		subtitle: 'its time to go sleep',
		statusBar: 'dark-content',
	},
};

export default function Scenery({ condition }) {
	return (
		<View>
			<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
			<StatusBar barStyle={sceneryOption[condition].statusBar} />
			<Text style={styles.title}>{sceneryOption[condition].title}</Text>
			<Text style={styles.subtitle}>{sceneryOption[condition].subtitle}</Text>
</LinearGradient>
		</View>
	);
}

Scenery.propTypes = {
	condition: PropTypes.oneOf([
		'Morning',
		'Sunrise',
		'Noon',
		'Afternoon',
		'Evening',
		'Sunset',
		'Midnight',
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
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
		fontSize: 44,
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
});