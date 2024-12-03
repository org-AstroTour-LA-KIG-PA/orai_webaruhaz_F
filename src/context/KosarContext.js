import { useState, useEffect, createContext } from "react"
import { myAxios } from "./MyAxios"

export const KosarContext=createContext("")

export const KosarProvider=({children})=>{
    const [kosarLista, setKosarLista]=useState([])
    
    const getAdat= async (vegpont)=> {
        try {
            const response = await myAxios.get(vegpont);
            console.log(response)
            setKosarLista([...response.data])
            }catch (err){
                console.log("Hiba történt az adatok lekérésekor.")
            }finally{

            }
        };


    useEffect(() => {
        getAdat("/api/kosar");
    }, []);
    return(
        <KosarContext.Provider value={{kosarLista}}>
            {children}
        </KosarContext.Provider>
    )
}
