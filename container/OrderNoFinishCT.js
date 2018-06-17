import { connect } from 'react-redux'
import { addTodo } from '../actions'
import OrderNoFinish from '../page/OrderNoFinish'

const mapStateToProps = (state, ownProps) => ({
  list: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addTodo('ssss'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderNoFinish)
