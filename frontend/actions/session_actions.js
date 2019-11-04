export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as SessionAPIUtil from "../util/session_api_util";

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors: errors
    }
}

export const login = currentUser => dispatch => {
    return SessionAPIUtil.login(currentUser)
        .then( user => dispatch(receiveCurrentUser(user)) )
}

export const signup = user => dispatch => {
    return SessionAPIUtil.signup(user)
        .then( () => dispatch(receiveCurrentUser(user)))
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
        .then( () => dispatch(logoutCurrentUser()))
}
