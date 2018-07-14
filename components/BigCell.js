import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class BigCell extends Component {
  style = StyleSheet.create({
    frame:{
      width:parseInt(670*w),
      height:parseInt(140*w),
      borderBottomWidth:1,
      borderBottomColor:'#e5e5e5',
      marginLeft:'auto',
      marginRight:'auto',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    title:{
      fontSize:parseInt(30*w),
      lineHeight:parseInt(32*w)
    },
    tag:{
      fontSize:parseInt(18*w),
      backgroundColor:'#e06e11',
      color:'#fff',
      marginLeft:parseInt(20*w),
      paddingLeft:parseInt(10*w),
      paddingRight:parseInt(10*w),
      borderRadius:parseInt(5*w),
      fontWeight:'bold'
    },
    dsc:{
      fontSize:parseInt(18*w),
      color:'#818181',
      lineHeight:parseInt(26*w)
    },
    right:{
      justifyContent:'space-between',
      alignItems:'center',
      width:parseInt(92*w),
      height:parseInt(92*w),
      borderRadius:parseInt(46*w),
      borderWidth:2,
      borderColor:'#c9bcb0'
    },
    left:{
      flexDirection:'row'
    }
  })
  render() {
    return (
        <View style={this.style.frame}>
          <View>
            <View style={this.style.left}>
              <Text style={this.style.title}>{this.props.title||''}</Text>
              {this.props.tag?(<Text style={this.style.tag}>{this.props.tag||''}</Text>):null}
            </View>
            <View>
              <Text style={this.style.dsc}>{this.props.dsc||''}</Text>
            </View>
          </View>
          <View>
            {this.props.icon?(<View style={this.style.right}><IconFont name={this.props.icon} color='#856141' size={75}/></View>):null}
            {this.props.other?this.props.other:null}
          </View>
        </View>
      )
  }
}
