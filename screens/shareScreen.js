import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ShareScreen ({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('main')}
        title="go to main"
      />
    </View>
  );
}