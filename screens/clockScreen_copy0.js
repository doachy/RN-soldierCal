import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculate from '../components/calculate';
import Loading from '../components/loading';

export default class ClockScreen extends React.Component {
	state = {
		isLoading: true,
	};

	render() {
		const { isLoading } = this.state;
		return isLoading ? <Loading /> : <Calculate />;
	}
}