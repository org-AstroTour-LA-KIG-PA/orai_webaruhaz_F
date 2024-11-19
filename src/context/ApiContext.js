import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext=createContext("")

export const ApiProvider=({children})=>{
    const [termekLista, setTermekLista]=useState([])
    const getAdat= async (vegpont, callbackFv)=> {
        try {
            const response = await myAxios.get(vegpont);
            console.log(response)
            callbackFv([...response.data])
            }catch (err){
                console.log("Hiba történt az adatok lekérésekor.")
            }finally{

            }
        };


    useEffect(() => {
        getAdat("/api/termek", setTermekLista);
    }, []);

    return (
        <ApiContext.Provider value={{termekLista}}>
            {children}
        </ApiContext.Provider>
    )
}