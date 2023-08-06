import { createContext,useEffect, useState } from "react";
const context = createContext({
    isLoggedIn:false,
    isErrorInInput:false,
    onLoginHandler:()=>{},
    onLogoutHandler:()=>{},
    // onErrorHandler:()=>{},
});

export const ContextProvider = ({children}) =>{
     
    const [errorInInput,setErrorInInput] = useState(false);
    const [loggedIn,setLoggedIn] = useState(false);
    const loginHandler = (email,password,fromUse)=>{
        if(email.includes('@')&&email.includes('.com')&&email.length>0&&password.length>=6){
            setLoggedIn(true)
            setErrorInInput(false)
            localStorage.setItem("LoggedIn",true)
        }else if(fromUse){
            setLoggedIn(true)
        }
        else{
            setErrorInInput(true)
        }
    }
    const logoutHandler = ()=>{
        console.log("console")
        setLoggedIn(false)
        localStorage.removeItem("LoggedIn")
    }
    return (
    <context.Provider
      value={{
        isErrorInInput: errorInInput,
        isLoggedIn: loggedIn,
        onLoginHandler: loginHandler,
        onLogoutHandler:logoutHandler,
      }}
    >
      {children}
    </context.Provider>
    )
}

export default context;