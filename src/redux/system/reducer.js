import {TOGGLE_LOADER, 
        HIDE_LOADER, 
        SET_LANGUAGE, 
        SET_THEME, 
        SET_USER, 
        USER_LOGOUT, 
        SET_REGISTER, 
        SAVE_PROJECT, 
        FETCH_USER,

    } from './actionTypes';


const initialState = {
    loading:false,
    token:'',
    language: 'tr',
    isDarkMode:false,
    isLogin:false,
    user:{},
    projectDetail:{},
    fetchUsers:{}

    
    
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
                loading:false,
                token:'',
                language:'tr',
                isLogin:false

            };

        case SET_USER:
            return{
            ...state,
            isLogin:true,
                
        };

        case SET_REGISTER:
            return{
                ...state,
                user:action.payload,
                
            };
        
        case SAVE_PROJECT:
            
            return{
                ...state,
                projectDetail:action.payload,

            }
        
        case FETCH_USER:
            return{
                ...state,
                fetchUsers:action.payload,

            }
        
        


        default:
            return state;
    }
}