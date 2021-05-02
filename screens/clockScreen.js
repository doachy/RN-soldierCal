import * as React from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import CalculateClock from './calculateClock';
import Clock from './clock';

export default function ClockScreen({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View>
					<CalculateClock/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});