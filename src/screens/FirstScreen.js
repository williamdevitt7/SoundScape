import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';
//import Autocomplete from 'react-native-autocomplete-input';

// This is the landing screen  - appears when you open the app for the first time.
// On launch, have this only show to new users

class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'left', justifyContent: 'center'}}>
        <Text> Welcome to your SoundScape</Text>
        <Text> Login form goes here, </Text>
        <Text> Along with button that calls a function to validate login,  </Text>
        <Text> and if validated, navigates to the home screen </Text>
       </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
           <Text>Login here!</Text>
        </TouchableOpacity>
        <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('Sign Up')}>
            <Text>Signup here!</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('Home')}>
            <Text>(Development only) Home Screen</Text>
         </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default FirstScreen;
