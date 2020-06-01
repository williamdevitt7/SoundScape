import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
//import { getRequest } from '../helpers/Helpers'
import { tester } from '../helpers/Helpers'
//import Autocomplete from 'react-native-autocomplete-input';
//import NavigationBar from './NavigationBar';

// Homepage: this is the page logged in users land on - displays stuff

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.callTester();
    //this.handleGetRequest();
    this.callGetRequest('https://jsonplaceholder.typicode.com/posts/1');

    this.state = {
      requestReturn: [],
    }

    this.callTester = this.callTester.bind(this);
    this.callGetRequest = this.callGetRequest.bind(this);
  }

  callTester() {
    tester();
  }

  callGetRequest(x) { // fetches data via get
    var data = [];
    fetch(x, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((responseJson) => {
        data.push((responseJson));
        this.setState({ requestReturn: data})
        console.log(this.state.requestReturn)
        //console.log(this.state.requestReturn);
      })
      //on fail
      .catch(error => {
        alert(JSON.stringify(error));
        console.error(error);
      });
      return data;
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text>customized user stuff (homepage)</Text>
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

export default HomeScreen;
