
import constants from '../../utils/constants'

const INITIAL_STATE = {
    isLoading: false,
    selected: constants.POSTS[0],
    list: constants.POSTS
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {    
        case 'SELECT.POST':
            return {...state, selected: action.data} 
        default:
            return { ...state }
    }
}

export default reducer