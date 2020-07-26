import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View, SafeAreaView, Keyboard, TouchableOpacity, Dimensions, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import defaultStyles from './stylesheet';

//displays a user's top spotify artists and tracks

class SpotifyTopAllScreen extends React.Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { route } = this.props;

    this.state = {

    };
  }

  componentDidMount() {
    const params = this.props.route.params;
  }

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

export default SpotifyTopAllScreen;
