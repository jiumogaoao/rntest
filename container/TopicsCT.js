import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Topics from '../page/Topics'

const mapStateToProps = (state, ownProps) => ({
  list: state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addTodo('ssss'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topics)
