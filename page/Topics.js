import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity } from 'react-native';

export default class Topics extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <Text>
          {this.props.list.todos.length}Topics
        </Text>
      </TouchableOpacity>
    )
    }
  }
