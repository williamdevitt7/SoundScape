import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import defaultStyles from './stylesheet';
import { tester } from '../helpers/Helpers'
import { API_KEY_LASTFM } from '../helpers/lastFmVars'

// Homepage: this is the page logged in users land on - displays stuff

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    //this.callTester()
    //this.getRequest('https://reactnative.dev/movies.json');

    this.state = {
      requestReturn: [],
    };

    this.callTester = this.callTester.bind(this);
    this.getRequest = this.getRequest.bind(this);
    this.assignApiKey = this.assignApiKey.bind(this);
  }

  callTester() { //just for testing, can remove
    tester();
  }

  getTopLastfmAlbums() {
    // feed URL here
  }

  assignApiKey() {
    var API_KEY = API_KEY_LASTFM();
  }

  getRequest(x) { // fetches data via get
    var data = [];
    fetch(x, {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        data.push((json));
        this.setState({ requestReturn: json.movies}) //logs the raw JSON object
        console.log(this.state.requestReturn[4].title) //returns interstellar
      })
      //on fail
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text></Text>
       </View>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => console.log("helo")}>
          <Text>Top Last.fm Albums</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => console.log("helo")}>
          <Text>Top Last.fm Songs</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => console.log("helo")}>
          <Text>Top Last.fm Artists</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => console.log("helo")}>
          <Text>Last.fm Recently Played</Text>
       </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonLeft: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#d8bfd8',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: 175,
    borderRadius: 15, //borderRadius curves edges!
    borderWidth: 2,
  },
  buttonRight: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#d8bfd8',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    width: 175,
    borderRadius: 15, //borderRadius curves edges!
    borderWidth: 2,
  }
});

export default HomeScreen;
