import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Calculate from '../components/calculate';

export default function ClockScreen({ navigation }) {
	return <Calculate start='2020-06-01' final='2021-09-28'/>;
}