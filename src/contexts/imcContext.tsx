import Result from "postcss/lib/result";
import { ReactNode, createContext, useContext, useState } from "react";
import { set } from "react-hook-form";

type imcType = {
    calc: (altura:number,peso:number) => number
    result:number
}
const imcContext= createContext<imcType | null>(null)

export const ImcProvider = ({children}: {children : ReactNode}) => {
   
    const [result,setResult] = useState(0)
    const calc = (height:number,weight:number)=>{
        if (height === 0) {
            setResult(0)
            return(0)}
        
        let newresult = weight / (height * height)
        setResult(weight / (height * height)) 
        return newresult
    }

    
    return(
        <imcContext.Provider value={{calc,result}}>
            {children}
        </imcContext.Provider>
    )
}

export const useImc = () => useContext(imcContext)