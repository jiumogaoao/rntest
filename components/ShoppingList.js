import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,Image } from 'react-native';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class ShoppingList extends Component {
  style=StyleSheet.create({
    frame:{
      height:parseInt(160*w),
      backgroundColor:'#fff',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    left:{
      flexDirection:'row',
      alignItems:'center'
    },
    right:{
      flexDirection:'row',
      alignItems:'center',
      marginRight:parseInt(28*w)
    },
    check:{
      marginLeft:parseInt(33*w)
    },
    titleFrame:{
      marginLeft:parseInt(36*w)
    },
    title:{
      fontSize:parseInt(30*w),
      color:'#999'
    },
    dsc:{
      fontSize:parseInt(18*w),
      color:'#999'
    },
    price:{
      fontSize:parseInt(25*w),
      color:'#999',
      marginRight:parseInt(20*w)
    },
    count:{
      fontSize:parseInt(18*w),
      color:'#7ca7d2',
      marginRight:parseInt(25*w),
      marginLeft:parseInt(25*w)
    }
  })
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.left}>
          <View style={this.style.check}>
            <IconFont name="round"/>
          </View>
          <View style={this.style.titleFrame}>
            <Text style={this.style.title}>蓝莓软心麦粉</Text>
            <Text style={this.style.dsc}>库存不足</Text>
          </View>
        </View>
        <View style={this.style.right}>
          <Text style={this.style.price}>￥ 13</Text>
          <IconFont name="sub"/>
          <Text style={this.style.count}>1</Text>
          <IconFont name="add"/>
        </View>
      </View>)
  }
}
