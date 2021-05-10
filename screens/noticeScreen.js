import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Input from '../components/input';


export default function NoticeScreen({ navigation }) {
  return (
    <View style={{ flex: 1,justifyContent: 'center' }}>
		  <Input/>
    </View>
  );
}