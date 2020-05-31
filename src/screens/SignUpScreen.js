import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { tester } from '../helpers/Helpers'
import defaultStyles from './stylesheet';
//import Autocomplete from 'react-native-autocomplete-input';

// Sign-up screen: for users to create their logins specific to our app,
// and connect their spotify / lastfm account.

// MUST  HIDE PASSWORD IN SECURE WAY
// ADDITIONALLY, SECURITY MUST BE ADDED
// ADDITIONALLY, USERNAME DUPLICATE CHECK MUST BE ADDED

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.CallTester();

    //state bracket
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
    }

    //binders
    this.CallTester = this.CallTester.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
  }; //end constructor(props)

  // function defintions

  CallTester(){ //example
    tester();
  }

  handleUsername(text) {
    this.setState({ username: text });
  }

  handlePassword(text) {
    this.setState({ password: text });
  }

  handlePasswordConfirm(text) {
    this.setState({ passwordConfirm: text })
  }

  validatePassword() {
    if ((this.state.password || this.state.passwordConfirm) == '')
    {
      alert('Enter a password(s)');
    } else if (this.state.password === this.state.passwordConfirm) {
      this.createAccount();
    } else {
      alert('Passwords do not match!');
    }
  }

  createAccount() {
    // function that passes and adds state values to database
    // this will also navigate to the home screen with specific user data (accounts)
    alert('make database api calls here');
  }

  //////////////////// BEGIN RENDER /////////////////////////

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <TextInput
        placeholder = "Enter Username"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.username}
        onChangeText = {this.handleUsername}
      />
       <TextInput
        clearButtonMode="always"
        placeholder = "Enter Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.password}
        onChangeText = {this.handlePassword}
      />
       <TextInput
        clearButtonMode="always"
        placeholder = "Confirm Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.passwordConfirm}
        onChangeText = {this.handlePasswordConfirm}
      />
       </View>
       <TouchableOpacity
         style={styles.button}
         onPress={() => this.validatePassword()}>
          <Text>Create Account</Text>
       </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default SignUpScreen;
