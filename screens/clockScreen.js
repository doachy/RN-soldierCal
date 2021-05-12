import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculate from '../components/calculate';

export default function ClockScreen({ navigation , start, final}) {
	return <Calculate start={start} final={final}/>;
}