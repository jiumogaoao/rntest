import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
export default class Swaper extends Component {
  style = StyleSheet.create({
    frame:{
      width:parseInt(750*w),
      height:parseInt(490*w),
      position:'release'
    },
    scrollFrame:{
      width:parseInt(750*w),
      height:parseInt(490*w),
      position:'absolute',
      top:0,
      left:0
    },
    scroll:{
      flex:1,
      flexDirection:'row',
    },
    roll:{
      width:parseInt(750*5*w),
      height:parseInt(490*w)
    },
    page:{
      width:parseInt(750*w),
      height:parseInt(490*w)
    },
    pointFrame:{
      width:60%,
      height:10,
      position:'absolute',
      left:20%,
      bottom:20,
      flexDirection:'row',
      justifyContent:'justify-content:space-around'
    },
    point:{
      width:parseInt(10*w),
      height:parseInt(10*w),
      borderRadius:parseInt(10*w),
      backgroundColor:'#fff'
    }
  })
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.scrollFrame}>
          <ScrollView style={this.style.scroll}>
            <View style={this.style.roll}>
              <View style={[this.style.page,{backgroundColor:'red'}]}></View>
              <View style={[this.style.page]}></View>
              <View style={[this.style.page]}></View>
              <View style={[this.style.page]}></View>
              <View style={[this.style.page]}></View>
            </View>
          </ScrollView>
        </View>
        <View style={this.style.pointFrame}>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
        </View>
      </View>)
  }
}
