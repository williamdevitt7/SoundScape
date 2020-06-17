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

    this.state = {
      topLastfmAlbums: [],
    };

    this.getTopLastfmAlbums = this.getTopLastfmAlbums.bind(this);
    this.lastfmApiKey = this.lastfmApiKey.bind(this);
    this.passParams = this.passParams.bind(this);
  }

  lastfmApiKey() {
    var API_KEY = API_KEY_LASTFM();
    return API_KEY;
  }

  getTopLastfmAlbums() {
    // fetch data here, then pass it as a param to the album results screen (use recipEZ for easy hints)
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=ScumGangWilly&api_key='+ this.lastfmApiKey() +'&format=json', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        this.setState({ topLastfmAlbums: json}); //logs the raw JSON object into state
        //console.log(this.state.topLastfmAlbums);
        //console.log(this.state.topLastfmAlbums.topalbums.album[0].artist.name + ': "' + this.state.topLastfmAlbums.topalbums.album[0].name + '"') //testing
      })
      //on fail
      .catch((error) => {
        alert(JSON.stringify(error));
        console.log(error);
      }); //end fetch
  } // end function

  passParams() {
    this.props.navigation.navigate('LastfmTopAlbums', {
      response: this.state.topLastfmAlbums,
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
         onPress={() => {
           this.getTopLastfmAlbums()
           this.passParams()}}>
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
