import { connect } from 'react-redux'
import Menu from '../page/Menu'

const mapStateToProps = (state, ownProps) => ({
  list: state.menu
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(addTodo('ssss'))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
