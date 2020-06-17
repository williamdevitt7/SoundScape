import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from '.src/screens/stylesheet';

class LastfmTopAlbumsScreen extends React.Component {
 constructor(props) {
   super(props);
   const { navigation } = this.props;
   const { route } = this.props;

   // TODO: the JSON perfoms super weirdly. either fix it, or move all the actual API calling stuff to this screen.

  //state bracket
  this.state = {
    userAlbums: [],
  };

  this.doStuff = this.doStuff.bind(this);
  this.handlePassedParams = this.handlePassedParams.bind(this);

  }//end constructor

  componentDidMount() { //auto calls on load
    var response = this.props.route.params;
    console.log(response); //this works, the var response holds the correct json object
    //this.handlePassedParams(response);
    //this.doStuff();
  }

  handlePassedParams(text) {
    this.setState({ userAlbums: text });
  }

  doStuff() {
    console.log(this.state.userAlbums.topalbums);
  }

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
