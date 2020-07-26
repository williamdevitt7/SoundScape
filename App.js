import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Component } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppLoading } from 'expo';

// screen imports from src

import FirstScreen from './src/screens/FirstScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import LastfmTopAlbumsScreen from './src/screens/Homepage Screens/LastfmTopAlbumsScreen';
import LastfmTopSongsScreen from './src/screens/Homepage Screens/LastfmTopSongsScreen';
import LastfmTopArtistsScreen from './src/screens/Homepage Screens/LastfmTopArtistsScreen';
import LastfmRecentlyPlayedScreen from './src/screens/Homepage Screens/LastfmRecentlyPlayedScreen';
import SpotifyTopAllScreen from './src/screens/Homepage Screens/SpotifyTopAllScreen';
import CreatePlaylistScreen from './src/screens/Homepage Screens/CreatePlaylistScreen';

// The main hub for our app - think of it as a central station for the user to navigate from

const Stack = createStackNavigator();

export default class App extends React.Component {
  state = {
  };

  render() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome!">
        <Stack.Screen name="Welcome!" component={FirstScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LastfmTopAlbums" component={LastfmTopAlbumsScreen} />
        <Stack.Screen name="LastfmTopSongs" component={LastfmTopSongsScreen} />
        <Stack.Screen name="LastfmTopArtists" component={LastfmTopArtistsScreen} />
        <Stack.Screen name="LastfmRecentlyPlayed" component={LastfmRecentlyPlayedScreen} />
        <Stack.Screen name="SpotifyTopAllTime" component={SpotifyTopAllScreen} />
        <Stack.Screen name="CreatePlaylist" component={CreatePlaylistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
}
