import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';

// TODO: get user variables passed as params (params are an object, see the .key thing)

class LastfmRecentlyPlayedScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { route } = this.props;

    this.state = {
      recent: [],
    };

    this.getRecentlyPlayed = this.getRecentlyPlayed.bind(this);
  }

  componentDidMount() {
    const params = this.props.route.params;
    this.getRecentlyPlayed(params.key, params.username);
  }

  getRecentlyPlayed(key, username) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user='+ username +'&api_key='+ key +'&format=json', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        this.setState({ recent: json}); //logs the raw JSON object into state
        alert('1: '+ this.state.recent.recenttracks.track[0].artist['#text'] + ': ' +this.state.recent.recenttracks.track[0].name +'. 2: '+ this.state.recent.recenttracks.track[1].artist['#text'] + ': ' + this.state.recent.recenttracks.track[1].name +'. 3: '+ this.state.recent.recenttracks.track[2].artist['#text'] + ': ' + this.state.recent.recenttracks.track[2].name)
      })
      //on fail
      .catch((error) => {
        console.log(error);
      }); //end fetch
  } // end function

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style = {styles.container}>
       <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text></Text>
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

export default LastfmRecentlyPlayedScreen;
