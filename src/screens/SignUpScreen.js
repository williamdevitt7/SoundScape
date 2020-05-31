import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { tester } from '../helpers/Helpers'
//import defaultStyles from './stylesheet';
//import Autocomplete from 'react-native-autocomplete-input';

// Sign-up screen: for users to create their logins specific to our app,
// and connect their spotify / lastfm account.

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.CallTester();

    //state bracket
    this.state = {
    };

    //binders
    this.CallTester = this.CallTester.bind(this);
  }; //end constructor(props)

  CallTester(){
    tester();
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>Sign up stuff</Text>
       </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SignUpScreen;
