import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
//import { NativeRouter, Route, Link } from 'react-router-native';
import { createStore } from 'redux'
import { Provider,connect } from 'react-redux'
import rootReducer from './reducter'
//import {renderRoutes} from 'react-router-config'
import './mock'
import {Scene, Router} from 'react-native-router-flux';
//const routes = [
  //...require('./routers/About'),
  //...require('./routers/Home')
//]
import asyncComponent from './components/AsyncComponent'
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
  }


  render() {
    return (
      /*<Provider store={store}>
        <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Home</Text>
          </Link>
          <Link
            to="/about"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>About</Text>
          </Link>
          <Link
            to="/topics"
            underlayColor='#f0f4f7'
            style={styles.navItem} >
              <Text>Topics</Text>
          </Link>
        </View>
        {renderRoutes(routes)}
      </View>
    </NativeRouter>
  </Provider>*/
  <Provider store={store}>
    <ConnectedRouter>
      <Scene key="root">
        <Scene key="home" component={HomeCT} title="Home"/>
        <Scene key="about" component={AboutCT} title="About"/>
        <Scene key="topics" component={TopicsCT} title="Topics"/>
      </Scene>
    </ConnectedRouter>
  </Provider>
    );
  }
}
