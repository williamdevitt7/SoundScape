import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';

class LastfmTopArtistsScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { route } = this.props;

    this.state = {
      userArtists: [],
    };

    this.getTopLastfmArtists = this.getTopLastfmArtists.bind(this);

  }

  componentDidMount() {
    const params = this.props.route.params;
    this.getTopLastfmArtists(params.key);
  }

  getTopLastfmArtists(key) {
    fetch('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=ScumGangWilly&api_key='+ key +'&format=json', {
      method: 'GET',
      headers: {
        Accept: "application/json",
        "Content-Type" : "application/json"
      }
    })
      .then((response) => response.json()) //success
      .then((json) => {
        this.setState({ userArtists: json}); //logs the raw JSON object into state
        alert(this.state.userArtists.topartists.artist[0].name + ', ' + this.state.userArtists.topartists.artist[1].name + ', ' + this.state.userArtists.topartists.artist[2].name);
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

export default LastfmTopArtistsScreen;
