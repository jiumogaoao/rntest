import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,ScrollView,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
export default class Switch extends Component {
  constructor(props) {
    super(props);
    this.state={
      result:false
    }
  }
  style = StyleSheet.create({
    frame:{
      position:'relative',
      width:parseInt(180*w),
      height:parseInt(70*w),
      borderRadius:parseInt(35*w),
      borderWidth:1,
      borderColor:'#7ca7d2',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#fff'
    },
    point:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    handle:{
      width:'50%',
      height:parseInt(66*w),
      borderRadius:parseInt(35*w),
      backgroundColor:'#7ca7d2',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      top:0,
      borderWidth:2,
      borderColor:'#fff'
    },
    font:{
      fontSize:parseInt(22*w),
      color:'#7ca7d2'
    },
    handleFont:{
      fontSize:parseInt(22*w),
      color:'#fff'
    }
  })
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.point}>
          <Text style={this.style.font}>{this.props.t?this.props.t:null}</Text>
        </View>
        <View style={this.style.point}>
          <Text style={this.style.font}>{this.props.f?this.props.f:null}</Text>
        </View>
        <View style={[this.style.handle,{left:this.state.result?0:'50%'}]}>
          <Text style={this.style.handleFont}>{this.state.result?this.props.t:this.props.f}</Text>
        </View>
      </View>)
  }
}
