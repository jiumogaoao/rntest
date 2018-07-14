import React, { Component } from 'react'
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import { Font } from 'expo';
import { createIconSet } from '@expo/vector-icons';
const glyphMap = {
  'default': 58945,
  'sub': 58945,
  'info': 58882,
  'fire': 58921,
  'coffee': 59050,
  'gift': 58894,
  'check': 59369,
  'shoppingCart': 58886,
  'left': 58937,
  'heart':58940,
  'place':58962,
  'round':59201,
  'hotcup':58899,
  'ticket':58963,
  'down':58897,
  'coffeeBean':58964,
  'company':58932,
  'bill':58939,
  'cup':58994,
  'add':59025,
  'ticket2':59009,
  'menu':60076,
  'right':58880,
  'paperCup':58902,
  'bigCup':58981,
  'scan':58881,
  'bell':58883,
  'mine':58887,
  'close':58888,
  'heart':59623,
  'ticket3':58889
 };
const CustomIcon = createIconSet(glyphMap, 'FontName');
export default class IconFont extends Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'FontName': require('../font/iconfont.ttf')
    });
    this.setState({fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) { return (<View><Text>333</Text></View>)}
    return (<CustomIcon name={this.props.name||'default'} size={parseInt((this.props.size||32)*w)} color={this.props.color||'#ddd'} />)
  }
}
