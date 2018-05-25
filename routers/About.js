import asyncComponent from '../components/AsyncComponent'
const AboutCT = asyncComponent(() => import("../container/AboutCT"));

module.exports = [
  {
    path:'/about',
    exact:true,
    component:AboutCT
  }
]
