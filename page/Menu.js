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
            <MenuNav name="大师咖啡" hl={true}/>
            <MenuNav name="零度拿铁"/>
            <MenuNav name="瑞纳冰"/>
            <MenuNav name="经典饮品"/>
            <MenuNav name="健康轻食"/>
            <MenuNav name="新鲜沙拉"/>
          </View>
          <View style={this.style.right}>
            <MenuTitle title="大师咖啡" dsc="WBC (世界咖啡师大赛) 冠军团队拼配"/>
            <View style={{alignItems:'center'}}>
              <MenuPoint title="标准美式" dsc="Americano" default="默认：大/无糖/无奶/热" price="24" count="0" cl={Actions.Detail}/>
              <MenuPoint title="标准美式" dsc="Americano" default="默认：大/无糖/无奶/热" price="24" count="0" cl={Actions.Detail}/>
              <MenuPoint title="标准美式" dsc="Americano" default="默认：大/无糖/无奶/热" price="24" count="0" cl={Actions.Detail}/>
              <MenuPoint title="标准美式" dsc="Americano" default="默认：大/无糖/无奶/热" price="24" count="0" cl={Actions.Detail}/>
              <MenuPoint title="标准美式" dsc="Americano" default="默认：大/无糖/无奶/热" price="24" count="0" cl={Actions.Detail}/>
            </View>
          </View>
        </View>
      </View>
    )
    }
  }
