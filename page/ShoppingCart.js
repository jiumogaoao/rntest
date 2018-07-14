import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
const ShoppingList = asyncComponent(() => import("../components/ShoppingList"));
export default class ShoppingCart extends Component {
  style = StyleSheet.create({
    frame:{
      flex:1,
      justifyContent:'space-between',
      height:'100%'
    },
    banner:{
      height:parseInt(136*w)
    },
    centerFrame:{
      flex:1
    },
    bottomFrame:{
      height:parseInt(119*w),
      justifyContent:'space-between',
      flexDirection:'row',
      backgroundColor:'#fff'
    },
    bottomLeft:{
      flexDirection:'row',
      alignItems:'center'
    },
    bottomRight:{
      width:parseInt(260*w),
      backgroundColor:'#b8cfe6',
      justifyContent:'center',
      alignItems:'center'
    },
    bottomFont:{
      color:'#fff',
      fontSize:parseInt(32*w)
    },
    total:{
      color:'#333',
      fontSize:parseInt(28*w),
      marginLeft:parseInt(30*w)
    },
    price:{
      color:'#333',
      fontSize:parseInt(36*w),
      marginLeft:parseInt(18*w)
    }
  })
  render() {
    return (
      <View style={this.style.frame}>
        <Image style={this.style.banner} source={require('../images/default.jpg')}/>
        <View style={this.style.centerFrame}>
          <ShoppingList/>
        </View>
        <View style={this.style.bottomFrame}>
          <View style={this.style.bottomLeft}>
            <Text style={this.style.total}>应付合计</Text>
            <Text style={this.style.price}>￥ 0</Text>
          </View>
          <View style={this.style.bottomRight}>
            <Text style={this.style.bottomFont}>去结算</Text>
          </View>
        </View>
      </View>
    )
    }
  }
