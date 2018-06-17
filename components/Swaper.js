import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
export default class Swaper extends Component {
  style = StyleSheet.create({
    frame:{
      width:parseInt(750*w),
      height:parseInt(490*w)
    }
    scroll:{
      flex:1
    }
  })
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.frame}>
          <ScrollView style={this.style.scroll}>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
          </ScrollView>
        </View>
        <View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
          <View></View>
        </View>
      </View>)
  }
}
