import { connect } from 'react-redux'
import Component from './Component'

const mapDispatchToProps = { 
    selectPost: data => ({type:'SELECT.POST', data })
}

export default connect(null, mapDispatchToProps)(Component)
