import actionTypes from "../actionTypes/cases"

export const setCases = (value) => {
	return {
		type: actionTypes.SET_CASES,
		cases: value
	}
}

export const unsetCases = () => {
	return {
		type: actionTypes.UNSET_CASES,
	}
}

export const setLoadedCases = (value) => {
	return {
		type: actionTypes.SET_LOADED_CASES,
		loaded: value
	}
}

export const deleteCase = (value) => {
	return {
		type: actionTypes.DELETE_CASE,
		id: value
	}
}

export const editCase = (value) => {
	return {
		type: actionTypes.EDIT_CASE,
		case: value
	}
}

export const addCase = (value) => {
	return {
		type: actionTypes.ADD_CASE,
		case: value,
	}
}
