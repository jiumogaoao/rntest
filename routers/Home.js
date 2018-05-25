import asyncComponent from '../components/AsyncComponent'
const HomeCT = asyncComponent(() => import("../container/HomeCT"));
const TopicsCT = asyncComponent(() => import("../container/TopicsCT"));
module.exports = [
  {
    path:'/',
    exact:true,
    component:HomeCT
  },
  {
    path:'/topics',
    component:TopicsCT
  }
]
