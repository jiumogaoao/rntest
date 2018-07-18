import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button,TouchableOpacity,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Lightbox from '../components/BaseLightbox';
import asyncComponent from '../components/AsyncComponent';
const IconFont = asyncComponent(() => import("../components/IconFont"));
export default class Detail extends Component {
  styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize:parseInt(40*w),
      color:'#fff',
      marginLeft:parseInt(33*w),
      marginBottom:parseInt(21*w)
    },
    subTitle:{
      fontSize:parseInt(18*w),
      color:'#fff',
      marginLeft:parseInt(33*w),
      marginBottom:parseInt(36*w)
    },
    listFrame:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    listLeft:{
      width:parseInt(115*w),
      alignItems:'center',
      marginTop:parseInt(43*w)
    },
    leftText:{
      fontSize:parseInt(24*w)
    },
    listRight:{
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap'
    },
    listRightPoint:{
      width:parseInt(160*w),
      height:parseInt(60*w),
      borderRadius:parseInt(60*w),
      marginRight:parseInt(20*w),
      justifyContent:'center',
      alignItems:'center',
      marginTop:parseInt(30*w),
      borderWidth:1,
      borderColor:'#cec1b3'
    },
    listRightPointText:{
      fontSize:parseInt(22*w)
    },
    countFrame:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:parseInt(38*w)
    },
    countTitle:{
      fontSize:parseInt(26*w)
    },
    countSubTitle:{
      fontSize:parseInt(16*w),
      marginTop:parseInt(20*w)
    },
    countRight:{
      flexDirection:'row',
      alignItems:'center'
    },
    bottomFrame:{
      justifyContent:'space-around',
      flexDirection:'row',
      marginTop:parseInt(50*w)
    },
    button:{
      height:parseInt(66*w),
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#e06e11',
      flexDirection:'row',
      marginRight:parseInt(13*w),
      borderRadius:parseInt(5*w)
    },
    buttonText:{
      fontSize:parseInt(26*w),
      color:'#fff'
    }
  });

  render(){
    return (
    <Lightbox verticalPercent={0.5} horizontalPercent={0.9}>
      <ImageBackground source={{uri:this.props.point.img}} resizeMode='cover'
      style={{
        width:parseInt(750*w),
        height:parseInt(300*w),
        flexDirection:'column-reverse'
      }}
      >
        <Text style={this.styles.subTitle}>this.props.point.dsc</Text>
        <Text style={this.styles.title}>this.props.point.name</Text>
      </ImageBackground>
      <View>
        <View style={this.styles.listFrame}>
          <View style={this.styles.listLeft}>
            <Text style={this.styles.leftText}>规格</Text>
          </View>
          <View style={this.styles.listRight}>
            <View style={this.styles.listRightPoint}>
              <Text>大</Text>
            </View>
          </View>
        </View>
        <View style={this.styles.listFrame}>
          <View style={this.styles.listLeft}>
            <Text style={this.styles.leftText}>温度</Text>
          </View>
          <View style={this.styles.listRight}>
            <View style={this.styles.listRightPoint}>
              <Text>冰</Text>
            </View>
            <View style={this.styles.listRightPoint}>
              <Text>热</Text>
            </View>
          </View>
        </View>
        <View style={this.styles.listFrame}>
            <View style={this.styles.listLeft}>
              <Text style={this.styles.leftText}>糖</Text>
            </View>
            <View style={this.styles.listRight}>
              <View style={this.styles.listRightPoint}>
                <Text>无糖</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>半份糖</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>单份糖</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>香草3元</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>榛子3元</Text>
              </View>
            </View>
        </View>
        <View style={this.styles.listFrame}>
            <View style={this.styles.listLeft}>
              <Text style={this.styles.leftText}>奶</Text>
            </View>
            <View style={this.styles.listRight}>
              <View style={this.styles.listRightPoint}>
                <Text>无奶</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>单份奶</Text>
              </View>
              <View style={this.styles.listRightPoint}>
                <Text>双份奶</Text>
              </View>
            </View>
        </View>
      </View>
      <View>
        <View style={this.styles.countFrame}>
          <View>
            <Text style={this.styles.countTitle}>￥{this.props.point.price*this.props.point.count}</Text>
            <Text style={this.styles.countSubTitle}>标准美式￥{this.props.point.price}+无糖￥0+无奶￥0</Text>
          </View>
          <View style={this.styles.countRight}>
            <TouchableOpacity onPress={()=>{this.props.sub(this.props.point.gid,this.props.point.id)}}>
              <IconFont name="sub" color="#81aad2" size={42}/>
            </TouchableOpacity>
            <Text>{this.props.point.count}</Text>
            <TouchableOpacity onPress={()=>{this.props.add(this.props.point.gid,this.props.point.id)}}>
              <IconFont name="add" color="#81aad2" size={42}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={this.styles.bottomFrame}>
          <View style={this.styles.button}>
            <IconFont name="ticket3" color="#fff" size={26}/>
            <Text style={this.styles.buttonText}>买2赠1，买5赠5</Text>
          </View>
          <View style={this.styles.button}>
            <IconFont name="heart" color="#fff" size={26}/>
            <Text style={this.styles.buttonText}>收藏口味</Text>
          </View>
          <View style={[this.styles.button,{marginRight:0}]}>
            <IconFont name="shoppingCart" color="#fff" size={26}/>
            <Text style={this.styles.buttonText}>加入购物车</Text>
          </View>
        </View>
      </View>
    </Lightbox>
  );
  }
}
