import actionTypes from '../actionTypes/officers'

const initialState = {
    loadedOfficers: false,
    officers: [{
        _id: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        clientId: '',
        approved: false
    }]
}

function officersReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_OFFICERS:
            return {...state, officers: action.officers }     
        case actionTypes.UNSET_OFFICERS:
            return {...state, officers: initialState}
        case actionTypes.SET_LOADED_OFFICERS:
                return {...state, loadedOfficers: action.loaded}      
        case actionTypes.DELETE_OFFICER:
            return {...state,
			    officers: state.officers.filter(item => item._id !== action.id)
			}
            
        case actionTypes.EDIT_OFFICER:
            return {...state,
                officers: state.officers.map(item => {
                    if (item._id === action.officer._id) {
                        return action.officer
                    } else {
                        return item
                    }
                })
            }
            
        case actionTypes.ADD_OFFICER:
            return {...state, officers: [...state.officers, action.officer]}  
        default:
            return state
    }
} 

export default officersReducer
