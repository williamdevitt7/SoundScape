import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Login form screen. User logs into their existing account here.

class LoginScreen extends React.Component {
 constructor(props) {
   super(props);

  //state bracket
  this.state = {
  };
} //end constructor

render() {
  const {navigation} = this.props;
  return (
    <SafeAreaView style = {styles.container}>
     <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text> Log in ya dummy!</Text>
     </View>
    </SafeAreaView>
  );
} // end render

} //end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default LoginScreen;
