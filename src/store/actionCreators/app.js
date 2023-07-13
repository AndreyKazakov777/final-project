import actionTypes from "../actionTypes/app"

export const setUser = (value) => {
	return {
		type: actionTypes.SET_USER,
		user: value
	}
}

export const unsetUser = () => {
	return {
		type: actionTypes.UNSET_USER,
	}
}

export const setToken = (value) => {
	return {
		type: actionTypes.SET_TOKEN,
		token: value
	}
}

export const unsetToken = () => {
	return {
		type: actionTypes.UNSET_TOKEN,
	}
}
