import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,Image } from 'react-native';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class subTab extends Component {
  style=StyleSheet.create({
      frame:{
        backgroundColor:'#fff',
        height:parseInt(86*w),
        flexDirection:'row',
        justifyContent:'space-between'
      },
      point:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      text:{
        fontSize:parseInt(28*w)
      }
  })
  render() {
    return (<View style={this.style.frame}>
          <View style={this.style.point}>
            <Text style={this.style.text}>全部</Text>
          </View>
          <View style={this.style.point}>
            <Text style={this.style.text}>未完成</Text>
          </View>
          <View style={this.style.point}>
            <Text style={this.style.text}>已完成</Text>
          </View>
      </View>)
  }
}
