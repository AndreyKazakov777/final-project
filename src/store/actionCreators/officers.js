import actionTypes from "../actionTypes/officers"

export const setOfficers = (value) => {
	return {
		type: actionTypes.SET_OFFICERS,
		officers: value
	}
}

export const unsetOfficers = () => {
	return {
		type: actionTypes.UNSET_OFFICERS,
	}
}

export const setLoadedOfficers = (value) => {
	return {
		type: actionTypes.SET_LOADED_OFFICERS,
		loaded: value
	}
}

export const deleteOfficer = (value) => {
	return {
		type: actionTypes.DELETE_OFFICER,
		id: value
	}
}

export const editOfficer = (value) => {
	return {
		type: actionTypes.EDIT_OFFICER,
		officer: value
	}
}

export const addOfficer = (value) => {
	return {
		type: actionTypes.ADD_OFFICER,
		officer: value,
	}
}
