import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,Image,TouchableOpacity } from 'react-native';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class MenuPoint extends Component {
  style={
    frame:{
      width:parseInt(519*w),
      height:parseInt(188*w),
      borderBottomWidth:1,
      borderBottomColor:'#e5e5e5',
      flexDirection:'row',
      alignItems:'center'
    },
    img:{
      width:parseInt(140*w),
      height:parseInt(140*w),
      borderRadius:parseInt(10*w)
    },
    right:{
      flex:1,
      height:parseInt(140*w),
      marginLeft:parseInt(17*w),
      justifyContent:'space-between'
    },
    title:{
      fontSize:parseInt(28*w),
      color:'#333333'
    },
    dsc:{
      fontSize:parseInt(14*w),
      color:'#9b9b9b'
    },
    default:{
      fontSize:parseInt(18*w),
      color:'#9b9b9b'
    },
    bottom:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
    buttonFrame:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:parseInt(100*w)
    }
  }
  render() {
    return (<View style={this.style.frame}>
        <View>
          <Image style={this.style.img} source={{uri:this.props.img}}/>
        </View>
        <View style={this.style.right}>
          <View>
            <Text style={this.style.title}>{this.props.title?this.props.title:''}</Text>
          </View>
          <View>
            <Text style={this.style.dsc}>{this.props.dsc?this.props.dsc:''}</Text>
          </View>
          <View>
            <Text style={this.style.default}>{this.props.default?this.props.default:''}</Text>
          </View>
          <View style={this.style.bottom}>
            <View>
              <Text>￥{this.props.price?this.props.price:0}</Text>
            </View>
            <View style={this.style.buttonFrame}>
              <TouchableOpacity onPress={this.props.cl}>
                <IconFont name='sub'/>
              </TouchableOpacity>
              <Text>{this.props.count?this.props.count:0}</Text>
              <TouchableOpacity onPress={this.props.cl}>
                <IconFont name='add'/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>)
  }
}
