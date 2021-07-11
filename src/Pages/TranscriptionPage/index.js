

import { connect } from 'react-redux'
import Component from './Component'

const mapStateToProps = state => ({
    list: state.posts.list
}) 

export default connect(mapStateToProps)(Component)
