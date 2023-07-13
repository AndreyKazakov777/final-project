
const SERVER = 'https://sf-final-project-be.herokuapp.com'

const REQUESTS = {
    POST_SIGN_UP: '/api/auth/sign_up',
    POST_SIGN_IN: '/api/auth/sign_in',
    GET_TOKEN: '/api/auth',
    POST_CASE_PUBLIC: '/api/public/report',
    POST_CASE: '/api/cases',
    PUT_CASE: '/api/cases/:id',
    DELETE_CASE: '/api/cases/:id',
    GET_CASES: '/api/cases',
    GET_CASE: '/api/cases/:id',
    POST_OFFICER: '/api/officers',
    PUT_OFFICER: '/api/officers/:id',
    DELETE_OFFICER: '/api/officers/',
    GET_OFFICERS: '/api/officers',
    GET_OFFICER: '/api/officers/:id'
}

const CLIENT_ID = '14c807ea-c2ac-485d-b8d1-b4636dd6383b'

const STATUS_BIKE = {
    NEW: 'new', 
    IN_PROGRESS: 'in_progress', 
    DONE: 'done'
}

const TYPE_BIKE = ['general', 'sport']


export { SERVER, REQUESTS, CLIENT_ID, TYPE_BIKE, STATUS_BIKE}
