import actionTypes from '../actionTypes/cases'

const initialState = {
    loadedCases: false,
    cases: [{
        _id: '',
        status: '',
        licenseNumber: '',
        type: '',
        ownerFullName: '',
        clientId: '',
        createdAt: new Date(''),
        updatedAt: new Date(''),
        color: '',
        date: new Date(''),
        officer: '',
        description: '',
        resolution: ''
    }]
}

function casesReducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CASES:
            return {...state, cases: action.cases}
        case actionTypes.UNSET_CASES:
            return {...state, cases: initialState}
        case actionTypes.SET_LOADED_CASES:
            return {...state, loadedCases: action.loaded}
        case actionTypes.DELETE_CASE:
            return {...state,
				cases: state.cases.filter(item => item._id !== action.id)
			}
        case actionTypes.EDIT_CASE:
            return {...state,
                cases: state.cases.map(item => {
                    if (item._id === action.case._id) {
                        return action.case
                    } else {
                        return item
                    }
                })
            }
        case actionTypes.ADD_CASE:
            return {...state, cases: [...state.cases, action.case]}
        default:
            return state
    }
} 

export default casesReducer
