import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';

// TODO: get user variables passed as params (params are an object, see the .key thing)

class LastfmTopSongsScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { route } = this.props;

    this.state = {
      userSongs: [],
    };

    this.getTopLastfmSongs = this.getTopLastfmSongs.bind(this);

  }

  componentDidMount() {
    const params = this.props.route.params;
    this.getTopLastfmSongs(params.key, params.username);
  }

  getTopLastfmSongs(key, username) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user='+ username +'&api_key='+ key +'&format=json', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        this.setState({ userSongs: json}); //logs the raw JSON object into state
        alert(this.state.userSongs.toptracks.track[0].artist.name + ': "' + this.state.userSongs.toptracks.track[0].name +'"');
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

export default LastfmTopSongsScreen;
