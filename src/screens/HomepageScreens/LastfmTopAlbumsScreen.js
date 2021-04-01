import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from '.src/screens/stylesheet';

// TODO: get user variable passed as params

class LastfmTopAlbumsScreen extends React.Component {
 constructor(props) {
   super(props);
   const { navigation } = this.props;
   const { route } = this.props;

  //state bracket
  this.state = {
    userAlbums: [],
  };

  this.getTopLastfmAlbums = this.getTopLastfmAlbums.bind(this);

  }//end constructor

  componentDidMount() { //auto calls on load
    const params = this.props.route.params;
    this.getTopLastfmAlbums(params.key, params.username);
  }

  getTopLastfmAlbums(key, username) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user='+ username +'&api_key='+ key +'&format=json', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        this.setState({ userAlbums: json}); //logs the raw JSON object into state
        alert(this.state.userAlbums.topalbums.album[0].artist.name + ': "' + this.state.userAlbums.topalbums.album[0].name + '"') //testing
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
       <View style={{alignItems: 'left', justifyContent: 'center'}}>
       </View>
      </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    }
  });

  export default LastfmTopAlbumsScreen;
