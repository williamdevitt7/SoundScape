import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';

// screen imports from src

import FirstScreen from './src/screens/FirstScreen';

// The main hub for our app - think of it as a central train station for the user to navigate from

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
  };

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Init">
        <Stack.Screen name="Init" component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
}
