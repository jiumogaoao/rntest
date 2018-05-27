import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'
import rootReducer from './reducter'
import './mock'
import {Scene, Router,Stack,Modal,Lightbox,Drawer} from 'react-native-router-flux';
import asyncComponent from './components/AsyncComponent'
import { addTodo } from './actions'
if (!window.location) {
    // App is running in simulator
    window.navigator.userAgent = 'ReactNative';
}

// This must be below your `window.navigator` hack above
const io = require('socket.io-client/dist/socket.io');
const socket = io('http://192.168.2.195:3000', {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});
socket.on('connect', () => {
  console.log('connected!');
});
const AboutCT = asyncComponent(() => import("./container/AboutCT"));
const HomeCT = asyncComponent(() => import("./container/HomeCT"));
const TopicsCT = asyncComponent(() => import("./container/TopicsCT"));
const store = createStore(rootReducer)
const ConnectedRouter = connect()(Router)



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

export default class App extends React.Component {
  async getMoviesFromApi(){
      try {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        let response = await fetch('http://g.cn');
        response = await response.json()
        console.log(response)
      } catch(error) {
        console.error(error);
      }
    }

  componentWillMount(){
    this.getMoviesFromApi();
    socket.on('add', () => {
      store.dispatch(addTodo('ssss'))
    });
  }

  componentDidMount(){

  }

  render() {
    return (
  <Provider store={store}>
    <ConnectedRouter>
      <Drawer key="drawer"
              contentComponent={TopicsCT} drawerPosition="right">
          <Modal>
          <Scene key="home" component={HomeCT} title="Home"/>
          <Scene key="about" component={AboutCT} title="About"/>
          </Modal>
      </Drawer>
    </ConnectedRouter>
  </Provider>
    );
  }
}
