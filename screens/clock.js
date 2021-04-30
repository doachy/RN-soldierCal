import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalogClock from 'react-native-clock-analog';

//https://www.npmjs.com/package/react-native-clock-analog#-usage

function App() {
    return (
      <View style={styles.container}>
          <AnalogClock
            size={100}
          />
          <View style={{ marginBottom: 5 }} />
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;