import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';

// A file composed of helper functions to be used anywhere. Import this file,
// or preferably, only what you need.
// This is to be used for abstraction

export const tester = () => {
  alert('Hello world!');
};

// single parameter GET (for example, pass it a link to a lastfm api) most common
// return an array of the JSON data

/* export const getRequest = (x) => {
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
      alert(responseJson);
    })
    //on fail
    .catch(error => {
      alert(JSON.stringify(error));
      console.error(error);
    });
    return data;
}; //end getRequest
 */
// no parameter get - specialized, multiple functions that have specific purposes

// POST, PUT , etc
