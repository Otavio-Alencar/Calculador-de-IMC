"use client"
import { Calculator } from "@/components/Calculator"
import { Header } from "@/components/Header"
import { Quadros } from "@/components/quadros"
import { ImcProvider } from "@/contexts/imcContext";
const Page = ()=>{
  return(
 
    <div className="h-screen w-full bg-white">
      <ImcProvider>
      <div className="container pt-5 md:pt-10"><Header/></div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-10">
        
        <div className="flex flex-col gap-4 flex-1">
          
          <Calculator/>
        </div>
        <div className="flex-1 flex col items-center justify-center pb-6 md:pb-0">
            <Quadros/>
        </div>
      
      
      </div>
      </ImcProvider>
    </div>
    
  )
}

export default Page