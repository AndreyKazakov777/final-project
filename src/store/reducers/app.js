import actionTypes from '../actionTypes/app'

const initialState = {
    activeUser: '',
    activeToken: ''
}

function appReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {...state, activeUser: action.user}
            break
        case actionTypes.UNSET_USER:
            return {...state, activeUser: ''}
            break
        case actionTypes.SET_TOKEN:
            return {...state, activeToken: action.token}
            break
        case actionTypes.UNSET_TOKEN:
            return {...state, activeToken: ''}
            break
        default:
            return state
    }
} 

export default appReducer
