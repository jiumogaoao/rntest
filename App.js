import React from 'react';
import { StyleSheet, Text, View,AppRegistry,Dimensions } from 'react-native';
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'
import rootReducer from './reducter'
import './mock'
import {Scene, Router,Stack,Modal,Lightbox,Drawer,Tabs} from 'react-native-router-flux';
import asyncComponent from './components/AsyncComponent'
import Nav from './components/Nav'
import { refresh } from './actions'
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
      //store.dispatch(addTodo('ssss'))
    });
    store.dispatch(refresh({
      "大师咖啡":{
        name:"大师咖啡",
        dsc:"",
        list:{
          "标准美式":{
            gid:"大师咖啡",
            id:"标准美式",
            name:"标准美式",
            dsc:"Americano",
            state:"默认：大/无糖/无奶/热",
            price:21,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "加浓美式":{
            gid:"大师咖啡",
            id:"加浓美式",
            name:"加浓美式",
            dsc:"Extra Americano",
            state:"默认：大/无糖/无奶/热",
            price:24,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "焦糖标准美式":{
            gid:"大师咖啡",
            id:"焦糖标准美式",
            name:"焦糖标准美式",
            dsc:"Caramel Americano",
            state:"默认：大/无糖/无奶/热",
            price:24,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "焦糖加浓美式":{
            gid:"大师咖啡",
            id:"焦糖加浓美式",
            name:"焦糖加浓美式",
            dsc:"Caramel Extra Americano",
            state:"默认：大/无糖/无奶/热",
            price:27,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      },
      "零度拿铁":{
        name:"零度拿铁",
        dsc:"",
        list:{
          "红茶拿铁":{
            gid:"零度拿铁",
            id:"红茶拿铁",
            name:"红茶拿铁",
            dsc:"Black Tea Latte",
            state:"默认：大/热",
            price:27,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "抹茶拿铁":{
            gid:"零度拿铁",
            id:"抹茶拿铁",
            name:"抹茶拿铁",
            dsc:"Matcha Latte",
            state:"默认：大/热",
            price:27,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      },
      "瑞纳冰":{
        name:"瑞纳冰",
        dsc:"",
        list:{
          "小雪荔枝瑞纳冰":{
            gid:"瑞纳冰",
            id:"小雪荔枝瑞纳冰",
            name:"小雪荔枝瑞纳冰",
            dsc:"Lychee Exfreezo",
            state:"默认：大",
            price:27,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "卡布奇诺瑞纳冰":{
            gid:"瑞纳冰",
            id:"卡布奇诺瑞纳冰",
            name:"卡布奇诺瑞纳冰",
            dsc:"Cappuccion Exfreezo",
            state:"默认：大",
            price:27,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      },
      "经典饮品":{
        name:"经典饮品",
        dsc:"",
        list:{
          "柑橘百香果":{
            gid:"经典饮品",
            id:"柑橘百香果",
            name:"柑橘百香果",
            dsc:"Citrus Passionfruit Refresher",
            state:"默认：大/热",
            price:21,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "热巧克力":{
            gid:"经典饮品",
            id:"热巧克力",
            name:"热巧克力",
            dsc:"Hot Chocolate",
            state:"默认：大/热",
            price:24,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      },
      "健康轻食":{
        name:"健康轻食",
        dsc:"",
        list:{
          "越蔓莓司康":{
            gid:"健康轻食",
            id:"越蔓莓司康",
            name:"越蔓莓司康",
            dsc:"Cranberry Scone",
            state:"",
            price:12,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "巧克力司康":{
            gid:"健康轻食",
            id:"巧克力司康",
            name:"巧克力司康",
            dsc:"Chocolate Scone",
            state:"",
            price:12,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      },
      "新鲜沙拉":{
        name:"新鲜沙拉",
        dsc:"",
        list:{
          "鸡蛋火腿沙拉":{
            gid:"新鲜沙拉",
            id:"鸡蛋火腿沙拉",
            name:"鸡蛋火腿沙拉",
            dsc:"Egg Ham Salad",
            state:"",
            price:21,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          },
          "鸡肉火腿沙拉":{
            gid:"新鲜沙拉",
            id:"鸡肉火腿沙拉",
            name:"鸡肉火腿沙拉",
            dsc:"Chicken Bacon Salad",
            state:"",
            price:21,
            tap:"买2赠1，买5赠5",
            img:"../images/default.jpg",
            saleEnd:false,
            count:0
          }
        }
      }
    }))
  }

  render() {
    return (
    <Provider store={store}>
      <ConnectedRouter>
          <Modal>
          <Tabs
                  key="tabbar"
                  swipeEnabled={true}
                  animationEnabled={true}
                  tabBarPosition="bottom"
                  tabBarComponent={Tab}
                >
          <Scene key="home" component={HomeCT} hideNavBar={true}/>
          <Stack tabBarLabel="Menu" hideNavBar={true}>
            <Scene key="Menu" component={MenuCT} title="Menu" hideNavBar={false} navBar={Nav}/>
            <Lightbox key="Detail" component={DetailCT} title="Detail"/>
          </Stack>
          <Scene key="Order" component={OrderCT} title="Order" navBar={Nav}/>
          <Scene key="ShoppingCart" component={ShoppingCartCT} title="shoppingCart" navBar={Nav}/>
          <Scene key="Mine" component={MineCT} tabBarLabel="Mine" title="mine" hideNavBar={true}/>
          </Tabs>
          <Scene key="Login" component={LoginCT} title="Login"/>
          </Modal>
    </ConnectedRouter>
  </Provider>
    );
  }
}
