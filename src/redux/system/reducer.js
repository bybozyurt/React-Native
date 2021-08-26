import {TOGGLE_LOADER, HIDE_LOADER, SET_LANGUAGE, SET_THEME, SET_USER, USER_LOGOUT, SET_REGISTER} from './actionTypes';


const initialState = {
    loading:false,
    userInfo:{},
    token:'',
    language: 'TR',
    isDarkMode:false,
    isLogin:false,
    
};

export function systemReducer(state = initialState, action){
    switch (action.type) {
        case TOGGLE_LOADER:
            return{...state, loading:true};
        
        case HIDE_LOADER:
            return{...state, loading:false};
        
        case SET_THEME:
            return{...state, isDarkMode:action.payload}

        case SET_LANGUAGE:
             return{...state, language:action.payload};
        
        case USER_LOGOUT:
            return{
                ...state,
                userInfo:{},
                loading:false,
                token:'',
                language:'TR',
                isLogin:false

            };
        case SET_USER:
            return{
                ...state,
                userInfo:action.payload,
                isLogin:true,
                
            };
        case SET_REGISTER:
            return{
                ...state,


            };

        default:
            return state;
    }
}