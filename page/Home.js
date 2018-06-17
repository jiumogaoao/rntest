import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncComponent from '../components/AsyncComponent';
import IconFont from '../components/IconFont';
const Swaper = asyncComponent(() => import("../components/Swaper"));
export default class Home extends Component {
  render() {
    return (
      <View>
        <Swaper/>
      </View>
    )
    }
  }
