import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Scenery from '../screens/scenery';

export default function ShareScreen({ navigation }) {
	const condition='Morning';
	return (
			<Scenery condition={condition}/>
	);
}