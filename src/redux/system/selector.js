import { useSelector } from "react-redux";

export function getIsDarkMode(){

    const isDarkMode = useSelector(state => state.system.isDarkMode);

    return isDarkMode;
}


export function getUser(){
    const user = useSelector(state => state.system.user);
    
    return user;
}

export function getLang(){
    const language = useSelector(state => state.system.language);

    return language;
}

export function getProject(){
    const project = useSelector(state => state.system.projectDetail);

    return project;
}