export const refresh = data => ({
  type: 'REFLESH',
  data
})

export const refreshGroup = (gid,data) => ({
  type: 'REFLESH_GROUP',
  gid,
  data
})

export const refreshPoint = (gid,id,data) => ({
  type: 'REFLESH_POINT',
  gid,
  id,
  data
})

export const addGroup = (gid,data) => ({
  type: 'ADD_GROUP',
  gid,
  data
})

export const addPoint = (gid,id,data) => ({
  type: 'ADD_POINT',
  gid,
  id,
  data
})

export const removeGroup = (gid,data) => ({
  type: 'REMOVE_GROUP',
  gid,
  data
})

export const removePoint = (gid,id,data) => ({
  type: 'REMOVE_POINT',
  gid,
  data
})

export const addCount = (gid,id) => ({
  type: 'ADD_COUNT',
  gid,
  id
})

export const subCount = (gid,id) => ({
  type: 'SUB_COUNT',
  gid,
  id
})
