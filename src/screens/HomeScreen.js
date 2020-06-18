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

    this.lastfmApiKey = this.lastfmApiKey.bind(this);
    this.passTopAlbumParams = this.passTopAlbumParams.bind(this);
    this.passTopSongParams = this.passTopSongParams.bind(this);
    this.passTopArtistParams = this.passTopArtistParams.bind(this);
    this.passRecentlyPlayedParams = this.passRecentlyPlayedParams.bind(this);
  }

  lastfmApiKey() {
    let API_KEY = API_KEY_LASTFM();
    return API_KEY;
  }

  passTopAlbumParams() {
    var API_KEY = this.lastfmApiKey();
    this.props.navigation.navigate('LastfmTopAlbums', {
      key: API_KEY, //passes API key as a param to the next screen
    });
  }

  passTopSongParams() {
    var API_KEY = this.lastfmApiKey();
    this.props.navigation.navigate('LastfmTopSongs', {
      key: API_KEY,
    });
  }

  passTopArtistParams() {
    var API_KEY = this.lastfmApiKey();
    this.props.navigation.navigate('LastfmTopArtists', {
      key: API_KEY,
    });
  }

  passRecentlyPlayedParams() {
    var API_KEY = this.lastfmApiKey();
    this.props.navigation.navigate('LastfmRecentlyPlayed', {
      key: API_KEY,
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
           this.passTopAlbumParams()}}>
          <Text>Top Last.fm Albums</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => {
           this.passTopSongParams()}}>
          <Text>Top Last.fm Tracks</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => {
           this.passTopArtistParams()}}>
          <Text>Top Last.fm Artists</Text>
       </TouchableOpacity>
       <TouchableOpacity
         style={styles.buttonLeft}
         onPress={() => {
           this.passRecentlyPlayedParams()}}>
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
