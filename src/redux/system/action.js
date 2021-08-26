import {TOGGLE_LOADER, HIDE_LOADER, SET_THEME, SET_USER, USER_LOGOUT, SET_REGISTER } from './actionTypes';

export function toogleLoader(){
    return{
        type: TOGGLE_LOADER
    };
}

export function hideLoader(){
    return{
        type: HIDE_LOADER
    };
}

export function setTheme(payload){
    return{
        type:SET_THEME,
        payload
    };
}


export function setUser(payload){
    return{
        type:SET_USER,
        payload
    };
}

export function setLogout(){
    return{
        type:USER_LOGOUT
    };
}

export function setRegister(payload){
    return{
        type:SET_REGISTER,
        payload
    };
}






