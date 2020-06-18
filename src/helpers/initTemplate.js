import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';

class LastfmTopSongsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userSongs: [],
    };

  }

/*  passTopAlbumParams() {
    var API_KEY = this.lastfmApiKey();
    this.props.navigation.navigate('LastfmTopAlbums', {
      key: API_KEY, //passes API key as a param to the next screen
    });
  } */

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
