import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
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
      lastFmUsername: '',
    }

    //binders
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
    this.handleLastFmUsername = this.handleLastFmUsername.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.callGetRequest = this.callGetRequest.bind(this);
  }; //end constructor(props)

  // function defintions

  handleUsername(text) {
    this.setState({ username: text });
  }

  handlePassword(text) {
    this.setState({ password: text });
  }

  handlePasswordConfirm(text) {
    this.setState({ passwordConfirm: text });
  }

  handleLastFmUsername(text) {
    this.setState({ lastFmUsername: text });
  }

  validatePassword() {
    if ((this.state.password || this.state.passwordConfirm) == '')
    {
      alert('Enter password(s)');
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

  // POST or GET request on http://18.204.82.238:5000/users/add?username='+ this.state.username +'&password='+ this.state.password +'

  callGetRequest(x) { // fetches data via get
    fetch(x, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        alert((json));
        //set state and etc here
      })
      //on fail
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }
  //////////////////// BEGIN RENDER /////////////////////////

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container1}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <TextInput
        clearButtonMode = "always"
        autoCapitalize = "none"
        autoCorrect = "false"
        placeholder = "Enter Username"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.username}
        onChangeText = {this.handleUsername}
      />
       <TextInput
        secureTextEntry = "true"
        clearButtonMode="always"
        autoCapitalize = "none"
        autoCorrect = "false"
        placeholder = "Enter Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.password}
        onChangeText = {this.handlePassword}
      />
       <TextInput
        secureTextEntry = "true"
        clearButtonMode="always"
        autoCapitalize = "none"
        autoCorrect = "false"
        placeholder = "Confirm Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.passwordConfirm}
        onChangeText = {this.handlePasswordConfirm}
      />
       <TextInput
        clearButtonMode = "always"
        autoCapitalize = "none"
        autoCorrect = "false"
        placeholder = "Enter last.fm Username"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.lastFmUsername}
        onChangeText = {this.handleLastFmUsername}
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
    //backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default SignUpScreen;
