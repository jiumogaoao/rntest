import { connect } from 'react-redux'
import { addCount,subCount } from '../actions'
import Detail from '../page/Detail'

const mapStateToProps = (state, ownProps) => {
  if(state.menu[ownProps.data[1].gid]&&state.menu[ownProps.data[1].gid]["list"][ownProps.data[0]]){
    return {point:state.menu[ownProps.data[1].gid]["list"][ownProps.data[0]]}
  }else{
    return {point:null}
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  add:(gid,id)=>dispatch(addCount(gid,id)),
  sub:(gid,id)=>dispatch(subCount(gid,id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)
