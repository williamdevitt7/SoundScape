import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';

// screen imports from src

import FirstScreen from './src/screens/FirstScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';

// The main hub for our app - think of it as a central station for the user to navigate from

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
  };

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome!">
        <Stack.Screen name="Welcome!" component={FirstScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
}
