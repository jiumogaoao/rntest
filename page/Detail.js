import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Detail extends Component {
  render() {
    return (
      <View>
      <TouchableOpacity onPress={this.props.onClick}>
        <Text>
          {this.props.list.todos.length}Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Actions.about}><Text>about</Text></TouchableOpacity>
      </View>
    )
    }
  }
