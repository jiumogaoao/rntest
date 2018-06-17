import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
import { Constants } from 'expo';
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class Nav extends Component {
  render() {
    return (
        <View style={{backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:"#dfdfdf"}}>
          <View style={{height:Constants.statusBarHeight}}></View>
          <View style={{'flexDirection':'row',height:parseInt(84*w),'justifyContent':'space-between'}}>
            <View style={{width:parseInt(100*w),height:parseInt(84*w)}}>
            {this.props.back?(<IconFont name="left"/>):null}
            </View>
            <View style={{flex:1,textAlign:'center'}}>
              <Text style={{height:parseInt(84*w),textAlign:'center',lineHeight:parseInt(84*w)}}>{this.props.title||''}</Text>
            </View>
            <View style={{width:parseInt(100*w),height:parseInt(84*w)}}>
            {this.props.right?(<IconFont name={this.props.right}/>):null}
            </View>
          </View>
        </View>
      )
  }
}
