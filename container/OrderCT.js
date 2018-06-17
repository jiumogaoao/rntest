import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Order from '../page/Order'

const mapStateToProps = (state, ownProps) => ({
  list: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addTodo('ssss'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order)
