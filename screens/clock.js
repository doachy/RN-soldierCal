import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalogClock from 'react-native-clock-analog';

//https://www.npmjs.com/package/react-native-clock-analog#-usage

export default function Clock() {
    return (
      <View style={styles.container}>
          <AnalogClock
            colorClock="#fff"
            colorNumber="#000000"
            colorCenter="#000000"
            colorHour="#000000"
            colorMinutes="#000000"
            hour="5"
            minutes={55}
          />
      </View>
    );
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center',
	}
});