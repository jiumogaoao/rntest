import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class MineList extends Component {
  style=StyleSheet.create({
    frame:{
      height:parseInt(99*w),
      backgroundColor:'#fff',
      borderBottomWidth:1,
      borderBottomColor:'#e6e6e6',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    left:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:parseInt(30*w)
    },
    right:{
      flexDirection:'row',
      alignItems:'center',
      marginRight:parseInt(30*w)
    },
    name:{
      marginLeft:parseInt(43*w),
      color:'#333',
      fontSize:parseInt(26*w)
    },
    count:{
      marginLeft:parseInt(14*w),
      fontSize:parseInt(24*w),
      color:'#999'
    }
  })
  render() {
    return (
      <View style={this.style.frame}>
        <View style={this.style.left}>
          <IconFont name="menu"/>
          <Text style={this.style.name}>个人资料</Text>
        </View>
        <View style={this.style.right}>
          <Text style={this.style.count}>0杯</Text>
          <IconFont name="right"/>
        </View>
      </View>
    )
  }
  }
