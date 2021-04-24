import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function MainScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.navigate('share')} title="go to share" />
		</View>
	);
}