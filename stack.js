import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ClockScreen from './screens/clockScreen';
import NoticeScreen from './screens/noticeScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
						headerShown: false,}
					}>
      <Stack.Screen name="clock" component={ClockScreen} />
      <Stack.Screen name="notice" component={NoticeScreen} />
    </Stack.Navigator>
  );
}

export { StackNavigator };