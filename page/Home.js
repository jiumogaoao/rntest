import React, { Component } from 'react';
import { StyleSheet, Text, View,AppRegistry,TouchableOpacity,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent';
import IconFont from '../components/IconFont';
const Swaper = asyncComponent(() => import("../components/Swaper"));
const BigCell = asyncComponent(() => import("../components/BigCell"));
const Switch = asyncComponent(() => import("../components/Switch"));
export default class Home extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#fff',flex:1}}>
        <Swaper height={490}/>
        <BigCell title='广州绿地中心店' dsc='距您6.7km' other={(
          <Switch t="自提" f="外送"/>
        )}/>
        <BigCell title='现在下单' dsc='ORDER NOW' icon="hotcup"/>
        <BigCell title='咖啡钱包' dsc='COFFEE WALLET' icon="ticket" tag="买2赠1，买5赠5"/>
        <BigCell title='企业帐户' dsc='ENTERPRISE ACCOUNT' icon="company"/>
      </View>
    )
    }
  }
