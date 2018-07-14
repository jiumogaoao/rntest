import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent';
const SubTab = asyncComponent(() => import("../components/SubTab"));
const List = asyncComponent(() => import("../components/List"));
export default class Order extends Component {
  render() {
    return (
      <View>
        <SubTab/>
        <List/>
      </View>
    )
    }
  }
