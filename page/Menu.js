import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent';
const Swaper = asyncComponent(() => import("../components/Swaper"));
const MenuNav = asyncComponent(() => import("../components/MenuNav"));
const MenuTitle = asyncComponent(() => import("../components/MenuTitle"));
const MenuPoint = asyncComponent(() => import("../components/MenuPoint"));
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  style={
    frame:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'#fff',
      height:'100%'
    },
    left:{
      width:parseInt(180*w),
      backgroundColor:'#f7f7f7'
    },
    right:{
      flex:1
    }
  }
  render() {
    return (
      <View style={{flew:1,backgroundColor:'red',height:'100%'}}>
        <Swaper height={260}/>
        <View style={this.style.frame}>
          <View style={this.style.left}>
            {
              Object.entries(this.props.list).map((group)=><MenuNav name={group[1].name}/>)
            }
          </View>
          <View style={this.style.right}>
            {
              Object.entries(this.props.list).map((group)=><View>
                <MenuTitle title={group[0]} dsc={group[1].dsc}/>
                <View style={{alignItems:'center'}}>
                  {
                    Object.entries(group[1].list).map(point => <MenuPoint title={point[1].name} img={point[1].img} dsc={point[1].dsc} default={point[1].state} price={point[1].price} count={point[1].count} cl={()=>{Actions.Detail(point)}}/>)
                  }
                </View>
              </View>)
            }
          </View>
        </View>
      </View>
    )
    }
  }
