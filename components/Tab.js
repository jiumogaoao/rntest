import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class Tab extends Component {
  style = StyleSheet.create({
    point:{
      flex:1,
      height:parseInt(98*w),
      alignItems:'center'
    },
    font:{
      fontSize:parseInt(18*w),
      textAlign:'center'
    },
    icon:{

    }
  })
  render() {
    return (<View style={{'flexDirection':'row','height':parseInt(98*w),'backgroundColor':'#f9f9f9','borderTopWidth':1,'borderTopColor':'#dfdfdf'}}>
        <View style={this.style.point}>
          <TouchableOpacity onPress={Actions.home} style={this.style.point}>
            <IconFont color="#2a4c7e" size={parseInt(54*w)} name="coffeeBean" style={this.style.icon}/>
            <Text style={this.style.font}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={this.style.point}>
          <TouchableOpacity onPress={Actions.Menu} style={this.style.point}>
          <IconFont color="#2a4c7e" size={parseInt(54*w)} name="cup" style={this.style.icon}/>
            <Text style={this.style.font}>Menu</Text>
          </TouchableOpacity>
        </View>
        <View style={this.style.point}>
          <TouchableOpacity onPress={Actions.Mine} style={this.style.point}>
          <IconFont color="#2a4c7e" size={parseInt(54*w)} name="menu" style={this.style.icon}/>
            <Text style={this.style.font}>Mine</Text>
          </TouchableOpacity>
        </View>
        <View style={this.style.point}>
          <TouchableOpacity onPress={Actions.Order} style={this.style.point}>
          <IconFont color="#2a4c7e" size={parseInt(54*w)} name="shoppingCart" style={this.style.icon}/>
            <Text style={this.style.font}>Order</Text>
          </TouchableOpacity>
        </View>
        <View style={this.style.point}>
          <TouchableOpacity onPress={Actions.ShoppingCart} style={this.style.point}>
          <IconFont color="#2a4c7e" size={parseInt(54*w)} name="mine" style={this.style.icon}/>
            <Text style={this.style.font}>ShoppingCart</Text>
          </TouchableOpacity>
        </View>
      </View>)
  }
}
