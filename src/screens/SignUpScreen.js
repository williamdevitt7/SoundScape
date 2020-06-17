import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
//import Autocomplete from 'react-native-autocomplete-input';

// Sign-up screen: for users to create their logins specific to our app,
// and connect their spotify / lastfm account.

// TODO: USERNAME DUPLICATE CHECK MUST BE ADDED
// TODO: lastfm username must be passed to the database
// TODO: make sure this POST request works
// TODO: on success of account creation, must pass info as params (nav) to Home (see recipEZ)

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

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
    this.postRequest = this.postRequest.bind(this);
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
      alert('Enter password(s)!');
    } else if (this.state.username == '') {
      alert('Enter a username!');
    } else if (this.state.password === this.state.passwordConfirm) {
      this.createAccount();
    } else {
      alert('Passwords do not match!');
    }
  }

  createAccount() {
    // function that passes and adds state values to database
    // this will also navigate to the home screen with specific user data (accounts)
    this.postRequest('http://18.204.82.238:5000/users/add');
    //alert('make database api calls here');
  }

  postRequest(x) { // fetches data via POST
    return fetch(x, {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({
        admin: '@LymanOW!',
        username: this.state.username,
        password: this.state.passwordConfirm
      })
    })
      .then((response) => response.json()) //success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        if (responseJson.status == 200) { //could also be json.status
          alert("user added to the database succesfully");
          this.props.navigation.navigate('Home'); //if this doesnt work, try creating a navigation const like in render
        }
      })
      //on fail
      .catch((error) => {
        alert(JSON.stringify(error));
        console.log(error);
      });
  }

  //////////////////// BEGIN RENDER /////////////////////////

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <TextInput
        clearButtonMode = "always"
        autoCapitalize = "none"
        autoCorrect = 'false'
        placeholder = "Enter Username"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.username}
        onChangeText = {this.handleUsername}
      />
       <TextInput
        secureTextEntry = 'true'
        clearButtonMode="always"
        autoCapitalize = "none"
        autoCorrect = 'false'
        placeholder = "Enter Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.password}
        onChangeText = {this.handlePassword}
      />
       <TextInput
        secureTextEntry = 'true'
        clearButtonMode="always"
        autoCapitalize = "none"
        autoCorrect = 'false'
        placeholder = "Confirm Password"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.passwordConfirm}
        onChangeText = {this.handlePasswordConfirm}
      />
       <TextInput
        clearButtonMode = "always"
        autoCapitalize = "none"
        autoCorrect = 'false'
        placeholder = "Enter last.fm Username"
        style={defaultStyles.textInput}
        onBlur = {Keyboard.dismiss}
        value = {this.state.lastFmUsername}
        onChangeText = {this.handleLastFmUsername}
     />
       </View>
       <TouchableOpacity
         style={defaultStyles.signupButton}
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default SignUpScreen;
