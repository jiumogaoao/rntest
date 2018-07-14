import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,ScrollView,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
export default class Swaper extends Component {
  style = StyleSheet.create({
    frame:{
      width:parseInt(750*w),
      position:'relative'
    },
    scrollFrame:{
      width:parseInt(750*w),
      position:'absolute',
      top:0,
      left:0
    },
    scroll:{
      flex:1,
      flexDirection:'row',
    },
    roll:{
      width:parseInt(750*5*w)
    },
    page:{
      width:parseInt(750*w)
    },
    pointFrame:{
      width:'20%',
      height:10,
      position:'absolute',
      left:'40%',
      bottom:20,
      flexDirection:'row',
      justifyContent:'space-around'
    },
    point:{
      width:parseInt(10*w),
      height:parseInt(10*w),
      borderRadius:parseInt(10*w),
      backgroundColor:'#fff'
    }
  })
  render() {
    return (<View style={[this.style.frame,{height:parseInt(this.props.height*w)}]}>
        <View style={[this.style.scrollFrame,{height:parseInt(this.props.height*w)}]}>
          <ScrollView style={[this.style.scroll,{height:parseInt(this.props.height*w)}]} horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
              <View style={[this.style.page,{height:parseInt(this.props.height*w)}]}>
                <Image style={[this.style.page,{height:parseInt(this.props.height*w)}]} source={require('../images/default.jpg')}/>
              </View>
              <View style={[this.style.page,{height:parseInt(this.props.height*w)}]}>
                <Image style={[this.style.page,{height:parseInt(this.props.height*w)}]} source={require('../images/default.jpg')}/>
              </View>
              <View style={[this.style.page,{height:parseInt(this.props.height*w)}]}>
                <Image style={[this.style.page,{height:parseInt(this.props.height*w)}]} source={require('../images/default.jpg')}/>
              </View>
              <View style={[this.style.page,{height:parseInt(this.props.height*w)}]}>
                <Image style={[this.style.page,{height:parseInt(this.props.height*w)}]} source={require('../images/default.jpg')}/>
              </View>
              <View style={[this.style.page,{height:parseInt(this.props.height*w)}]}>
                <Image style={[this.style.page,{height:parseInt(this.props.height*w)}]} source={require('../images/default.jpg')}/>
              </View>
          </ScrollView>
        </View>
        <View style={this.style.pointFrame}>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
          <View style={this.style.point}></View>
        </View>
      </View>)
  }
}
