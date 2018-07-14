import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button,ImageBackground,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AsyncComponent from '../components/AsyncComponent'
const IconFont = AsyncComponent(() => import("../components/IconFont"));
const MineList = AsyncComponent(() => import("../components/MineList"));
export default class Mine extends Component {
  style=StyleSheet.create({
    topFrame:{
      height:parseInt(362*w),
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection:'row',
      position:'relative'
    },
    left:{
      flexDirection:'row',
      alignItems:'center'
    },
    headIcon:{
      width:parseInt(112*w),
      height:parseInt(112*w),
      borderRadius:parseInt(56*w),
      marginLeft:parseInt(38*w)
    },
    name:{
      fontSize:parseInt(34*w),
      color:'#fff',
      marginLeft:parseInt(22*w)
    },
    right:{
      marginRight:parseInt(46*w)
    },
    bell:{
      position:'absolute',
      top:parseInt(68*w),
      right:parseInt(25*w)
    }
  })
  render() {
    return (
      <View>
        <ImageBackground style={this.style.topFrame} source={require('../images/default.jpg')} resizeMode='cover'>
          <View style={this.style.left}>
            <Image style={this.style.headIcon} source={require('../images/default.jpg')}/>
            <Text style={this.style.name}>高</Text>
          </View>
          <View style={this.style.right}>
            <IconFont name="right" size={30} color="#a2887a"/>
          </View>
          <View style={this.style.bell}>
            <IconFont name="bell" size={30} color="#fff"/>
          </View>
        </ImageBackground>
        <MineList/>
      </View>
    )
    }
  }
