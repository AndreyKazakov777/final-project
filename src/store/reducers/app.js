import actionTypes from '../actionTypes/app'

const initialState = {
    activeUser: '',
    activeToken: ''
}

function appReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {...state, activeUser: action.user}
        case actionTypes.UNSET_USER:
            return {...state, activeUser: ''}
        case actionTypes.SET_TOKEN:
            return {...state, activeToken: action.token}
        case actionTypes.UNSET_TOKEN:
            return {...state, activeToken: ''}
        default:
            return state
    }
} 

export default appReducer
