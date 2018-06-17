import React from 'react';
import { StyleSheet, Text, View,AppRegistry,Dimensions } from 'react-native';
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'
import rootReducer from './reducter'
import './mock'
import {Scene, Router,Stack,Modal,Lightbox,Drawer,Tabs} from 'react-native-router-flux';
import asyncComponent from './components/AsyncComponent'
import Nav from './components/Nav'
import { addTodo } from './actions'
global.w = Dimensions.get('window').width/750;
global.h = Dimensions.get('window').height/750;
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
const HomeCT = asyncComponent(() => import("./container/HomeCT"));
const MenuCT = asyncComponent(() => import("./container/MenuCT"));
const MineCT = asyncComponent(() => import("./container/MineCT"));
const OrderCT = asyncComponent(() => import("./container/OrderCT"));
const OrderNoFinishCT = asyncComponent(() => import("./container/OrderNoFinishCT"));
const OrderFinishedCT = asyncComponent(() => import("./container/OrderFinishedCT"));
const ShoppingCartCT = asyncComponent(() => import("./container/ShoppingCartCT"));
const LoginCT = asyncComponent(() => import("./container/LoginCT"));
const DetailCT = asyncComponent(() => import("./container/DetailCT"));
const Tab = asyncComponent(() => import("./components/Tab"));
const store = createStore(rootReducer)
const ConnectedRouter = connect()(Router)



const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    height:50
  },
  title:{
    marginLeft:'auto',
    marginRight:'auto'
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
  },
  tabbar:{

  }
})

export default class App extends React.Component {
    async getMoviesFromApi(){
      try {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        //let response = await fetch('http://g.cn');
        //response = await response.json()
        //console.log(response)
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

  render() {
    return (
    <Provider store={store}>
      <ConnectedRouter>
          <Modal>
          <Tabs
                  key="tabbar"
                  swipeEnabled
                  animationEnabled={true}
                  tabBarPosition="bottom"
                  tabBarComponent={Tab}
                >
          <Scene key="home" component={HomeCT} hideNavBar={true}/>
            <Scene key="Menu" tabBarLabel="Menu" component={MenuCT} title="Menu" navBar={Nav}>
              <Lightbox key="Detail" component={DetailCT} title="Detail"/>
            </Scene>
          <Scene key="Mine" component={MineCT} tabBarLabel="Mine" title="mine" navBar={Nav}/>
          <Scene key="Order" component={OrderCT} title="Order" navBar={Nav}/>
          <Scene key="ShoppingCart" component={ShoppingCartCT} title="shoppingCart" navBar={Nav}/>
          </Tabs>
          <Scene key="Login" component={LoginCT} title="Login"/>
          </Modal>
    </ConnectedRouter>
  </Provider>
    );
  }
}
