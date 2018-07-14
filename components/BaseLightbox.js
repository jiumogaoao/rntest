import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Animated, Dimensions, Button,TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import asyncComponent from '../components/AsyncComponent';
const IconFont = asyncComponent(() => import("../components/IconFont"));
const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends Component {
  static propTypes = {
    children: PropTypes.any,
    horizontalPercent: PropTypes.number,
    verticalPercent: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 1,
    }).start();
  }

  closeModal = () => {
    Animated.timing(this.state.opacity, {
      duration: 100,
      toValue: 0,
    }).start(Actions.pop);
  }

  _renderLightBox = () => {
    const { children, horizontalPercent = 1, verticalPercent = 1 } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
    return (
      <View
        style={{
          width,
          backgroundColor: 'white',
          position:'relative'
        }}
      >
        {children}
        <TouchableOpacity onPress={this.closeModal}
        style={{
          position:'absolute',
          top:parseInt(10*w),
          right:parseInt(10*w)
        }}
        >
          <View
            style={{
              width:parseInt(44*w),
              height:parseInt(44*w),
              borderWidth:1,
              borderColor:'#fff',
              borderRadius:parseInt(44*w),
              justifyContent:'center',
              alignItems:'center'
            }}
          >
            <IconFont name="close" color="#fff" size={44}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
        {this._renderLightBox()}
      </Animated.View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
