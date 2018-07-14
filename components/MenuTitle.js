import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
export default class MenuTitle extends Component {
  style={
    frame:{
      height:parseInt(87*w),
      justifyContent:'center'
    },
    titleFrame:{
      marginLeft:parseInt(25*w)
    },
    title:{
      fontSize:parseInt(25*w),
      color:'333333'
    },
    dscFrame:{
      marginLeft:parseInt(25*w),
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    dsc:{
      fontSize:parseInt(14*w),
      color:'#999999'
    },
    line:{
      marginLeft:parseInt(10*w),
      flex:1,
      height:1,
      backgroundColor:'#999999'
    }
  }
  render() {
    return (<View style={this.style.frame}>
        <View style={this.style.titleFrame}>
          <Text style={this.style.title}>{this.props.title?this.props.title:''}</Text>
        </View>
        <View style={this.style.dscFrame}>
          <View>
            <Text style={this.style.dsc}>{this.props.dsc?this.props.dsc:''}</Text>
          </View>
          <View style={this.style.line}></View>
        </View>
      </View>)
  }
}
