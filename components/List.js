import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,Image } from 'react-native';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class List extends Component {
  style=StyleSheet.create({
    frame:{
      backgroundColor:'#fff',
      height:parseInt(320*w),
      alignItems:'center'
    },
    headFrame:{
      height:parseInt(80*w),
      width:'100%',
      borderBottomWidth:1,
      borderBottomColor:'#e6e6e6',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    title:{
      color:'#999',
      fontSize:parseInt(24*w),
      marginLeft:parseInt(34*w)
    },
    state:{
      color:'#999',
      fontSize:parseInt(24*w),
      marginRight:parseInt(32*w)
    },
    bottomFrame:{
      flex:1,
      justifyContent:'space-between',
      width:parseInt(695*w)
    },
    shopFrame:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:parseInt(32*w),
      alignItems:'center'
    },
    shopName:{
      fontSize:parseInt(29*w),
      color:'#333'
    },
    date:{
      fontSize:parseInt(18*w),
      color:'#999'
    },
    count:{
      fontSize:parseInt(24*w),
      color:'#333',
      marginTop:parseInt(21*w)
    },
    priceFrame:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginBottom:parseInt(27*w),
      alignItems:'center'
    },
    price:{
      fontSize:parseInt(20*w),
      color:'#333'
    },
    button:{
      width:parseInt(146*w),
      height:parseInt(54*w),
      borderWidth:1,
      borderColor:'#ddd',
      borderRadius:parseInt(10*w),
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText:{
      fontSize:parseInt(24*w),
      color:'#333'
    }
  })
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.headFrame}>
          <Text style={this.style.title}>自提订单：32212352707536</Text>
          <Text style={this.style.state}>已完成</Text>
        </View>
        <View style={this.style.bottomFrame}>
          <View>
            <View style={this.style.shopFrame}>
              <Text style={this.style.shopName}>羊城商贸店 （NO.0278）</Text>
              <Text style={this.style.date}>2018-05-29 08:44</Text>
            </View>
            <Text style={this.style.count}>拿铁等 共1件商品</Text>
          </View>
          <View style={this.style.priceFrame}>
            <Text style={this.style.price}>￥4.32</Text>
            <View style={this.style.button}><Text style={this.style.buttonText}>再来一单</Text></View>
          </View>
        </View>
      </View>)
  }
}
