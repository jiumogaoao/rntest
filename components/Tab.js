import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent'
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
       hl: 0,
       tab:[
         {
           icon:"coffeeBean",
           hlIcon:"coffeeBean",
           name:"Home",
           press:Actions.home
         },
         {
           icon:"cup",
           hlIcon:"cup",
           name:"Menu",
           press:Actions.Menu
         },
         {
           icon:"menu",
           hlIcon:"menu",
           name:"Order",
           press:Actions.Order
         },
         {
           icon:"shoppingCart",
           hlIcon:"shoppingCart",
           name:"ShoppingCart",
           press:Actions.ShoppingCart
         },
         {
           icon:"mine",
           hlIcon:"mine",
           name:"Mine",
           press:Actions.Mine
         }
       ]
     };
  }
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
      {this.state.tab.map((point,x) => <View style={this.style.point} key={x}>
        <TouchableOpacity onPress={()=>{this.setState({hl:x});point.press()}} style={this.style.point}>
          <IconFont color="#2a4c7e" size={54} name={x==this.state.hl?point.hlIcon:point.icon} style={this.style.icon}/>
          <Text style={this.style.font}>{point.name}</Text>
        </TouchableOpacity>
      </View>)}
      </View>)
  }
}
