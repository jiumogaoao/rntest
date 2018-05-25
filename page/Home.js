import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <Text>
          {this.props.list.todos.length}Home
        </Text>
      </TouchableOpacity>
    )
    }
  }
