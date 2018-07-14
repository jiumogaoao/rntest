import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
export default class MenuNav extends Component {
  style={
    frame:{
      height:parseInt(90*w),
      borderBottomWidth:this.props.hl?0:1,
      borderBottomColor:'#e5e5e5',
      backgroundColor:this.props.hl?'#fff':'#f7f7f7',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
      borderLeftWidth:this.props.hl?parseInt(6*w):0,
      borderLeftColor:'#7ca7d2'
    },
    font:{
      fontSize:parseInt(26*w),
      color:'#666666',
      textAlign:'center'
    }
  }
  render() {
    return (<View style={this.style.frame}>
        <Text style={this.style.font}>{this.props.name?this.props.name:''}</Text>
      </View>)
  }
}
