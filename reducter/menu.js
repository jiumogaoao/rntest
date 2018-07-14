const menu = (state = {}, action) => {
  switch (action.type) {
    case 'REFLESH':
      return action.data
    case 'REFLESH_GROUP':
      if(state[action.gid]){
        state[action.gid]=action.data
      }
      return state
    case 'REFLESH_POINT':
      if(state[action.gid]&&state[action.gid][action.id]){
        state[action.gid][action.id]=action.data
      }
      return state
    case 'ADD_GROUP':
      if(!state[action.gid]){
        state[action.gid]=action.data
      }
      return state
    case 'ADD_POINT':
      if(state[action.gid]&&!state[action.gid][action.id]){
        state[action.gid][action.id]=action.data
      }
      return state
    case 'REMOVE_GROUP':
      if(state[action.gid]){
        delete state[action.gid]
      }
      return state
    case 'REMOVE_POINT':
      if(state[action.gid]&&state[action.gid][action.id]){
        delete state[action.gid][action.id]
      }
      return state
    default:
      return state
  }
}

export default menu
