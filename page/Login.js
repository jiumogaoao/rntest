import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Login extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.props.onClick}>
        <Text>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.about}><Text>about</Text></TouchableOpacity>
      </View>
    )
    }
  }
