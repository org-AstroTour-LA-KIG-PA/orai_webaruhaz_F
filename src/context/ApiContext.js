import { createContext, useState } from "react";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista]=useState([])
    return (
    <ApiContext.Provider value={{termekLista }}>
        {children}
    </ApiContext.Provider>
    )
}