import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button,TouchableOpacity,ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Lightbox from '../components/BaseLightbox';
import asyncComponent from '../components/AsyncComponent';
const IconFont = asyncComponent(() => import("../components/IconFont"));
const styles = StyleSheet.create({
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

const Detail = ({ data, children }) => (
  <Lightbox verticalPercent={0.5} horizontalPercent={0.9}>
    <ImageBackground source={require('../images/default.jpg')} resizeMode='cover'
    style={{
      width:parseInt(750*w),
      height:parseInt(300*w),
      flexDirection:'column-reverse'
    }}
    >
      <Text style={styles.subTitle}>Americano</Text>
      <Text style={styles.title}>标准美式</Text>
    </ImageBackground>
    <View>
      <View style={styles.listFrame}>
        <View style={styles.listLeft}>
          <Text style={styles.leftText}>规格</Text>
        </View>
        <View style={styles.listRight}>
          <View style={styles.listRightPoint}>
            <Text>大</Text>
          </View>
        </View>
      </View>
      <View style={styles.listFrame}>
        <View style={styles.listLeft}>
          <Text style={styles.leftText}>温度</Text>
        </View>
        <View style={styles.listRight}>
          <View style={styles.listRightPoint}>
            <Text>冰</Text>
          </View>
          <View style={styles.listRightPoint}>
            <Text>热</Text>
          </View>
        </View>
      </View>
      <View style={styles.listFrame}>
          <View style={styles.listLeft}>
            <Text style={styles.leftText}>糖</Text>
          </View>
          <View style={styles.listRight}>
            <View style={styles.listRightPoint}>
              <Text>无糖</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>半份糖</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>单份糖</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>香草3元</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>榛子3元</Text>
            </View>
          </View>
      </View>
      <View style={styles.listFrame}>
          <View style={styles.listLeft}>
            <Text style={styles.leftText}>奶</Text>
          </View>
          <View style={styles.listRight}>
            <View style={styles.listRightPoint}>
              <Text>无奶</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>单份奶</Text>
            </View>
            <View style={styles.listRightPoint}>
              <Text>双份奶</Text>
            </View>
          </View>
      </View>
    </View>
    <View>
      <View style={styles.countFrame}>
        <View>
          <Text style={styles.countTitle}>￥21</Text>
          <Text style={styles.countSubTitle}>标准美式￥21+无糖￥0+无奶￥0</Text>
        </View>
        <View style={styles.countRight}>
          <IconFont name="sub" color="#81aad2" size={42}/>
          <Text>1</Text>
          <IconFont name="add" color="#81aad2" size={42}/>
        </View>
      </View>
      <View style={styles.bottomFrame}>
        <View style={styles.button}>
          <IconFont name="ticket3" color="#fff" size={26}/>
          <Text style={styles.buttonText}>买2赠1，买5赠5</Text>
        </View>
        <View style={styles.button}>
          <IconFont name="heart" color="#fff" size={26}/>
          <Text style={styles.buttonText}>收藏口味</Text>
        </View>
        <View style={[styles.button,{marginRight:0}]}>
          <IconFont name="shoppingCart" color="#fff" size={26}/>
          <Text style={styles.buttonText}>加入购物车</Text>
        </View>
      </View>
    </View>
  </Lightbox>
);

export default Detail;
