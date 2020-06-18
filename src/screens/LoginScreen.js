import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';

// Login form screen. User logs into their existing account here.
// TODO:implement sendLogin function, aka make POST request with user's inputted data and navigate with params to home
// TODO: pass user info thats needed as params

class LoginScreen extends React.Component {
 constructor(props) {
   super(props);

  //state bracket
  this.state = {
    username: '',
    password: ''
  };

  this.sendLogin = this.sendLogin.bind(this);
  this.postRequest = this.postRequest.bind(this);
  this.handleUsername = this.handleUsername.bind(this);
  this.handlePassword = this.handlePassword.bind(this);
} //end constructor

sendLogin() {
  this.postRequest('http://18.204.82.238:5000/login');
}

handleUsername(text) {
  this.setState({ username: text });
}

handlePassword(text) {
  this.setState({ password: text });
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
      password: this.state.password
    })
  })
    .then((response) => response.json()) //success
    .then((responseJson) => {
      alert(JSON.stringify(responseJson));
      if (responseJson.status == 200) {
        alert("user logged in successfully");
        this.props.navigation.navigate('Home'); //if this doesnt work, try creating a navigation const like in render
      }
    })
    //on fail
    .catch((error) => {
      alert(JSON.stringify(error));
      console.log(error);
    });
}

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
     </View>
     <TouchableOpacity
       style={defaultStyles.loginButton}
       onPress={() => this.sendLogin()}>
        <Text>Login</Text>
     </TouchableOpacity>
    </SafeAreaView>
  );
} // end render
} //end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default LoginScreen;
