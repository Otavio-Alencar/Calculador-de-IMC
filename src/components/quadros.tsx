import { useImc } from "@/contexts/imcContext"

export const Quadros = ()=>{
    const useCtx = useImc()
    if(useCtx === null){
        return null
    }
    const handleClickclear = ()=>{
        useCtx.calc(0,0)
    }
    console.log(useCtx.result)
    return(
        <>
        {useCtx?.result === 0 &&
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="flex flex-col px-10 py-4 p-2 gap-3 rounded-md bg-gray-500 text-white items-center justify-center hover:scale-[1.05]">
                    <div className="bg-gray-600/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
                    <h1 className="font-semibold text-xl">Desnutrição</h1>
                    <p>IMC está entre 0 e 18.5</p>
                </div>
                <div className="flex flex-col px-10 py-4 p-2 gap-3 rounded-md bg-green-600 text-white items-center justify-center hover:scale-[1.05]">
                    <div className="bg-green-700/50 rounded-full p-5 items-center flex justify-center"><img src="./images/up.png" alt="" /></div>
                    <h1 className="font-semibold text-xl">Normal</h1>
                    <p>IMC está entre 18.5 e 24.9</p>
                    
                </div>
                <div className="flex flex-col px-10 py-4 p-2 gap-3 rounded-md bg-yellow-500 text-white items-center justify-center hover:scale-[1.05]">
                    <div className="bg-yellow-600/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
                    <h1 className="font-semibold text-xl">Sobrepeso</h1>
                    <p>IMC está entre 24.9 e 30</p>
                </div>
                <div className="flex flex-col px-10 py-4 gap-3 rounded-md bg-red-700 text-white items-center justify-center hover:scale-[1.05]">
                    <div className="bg-red-800/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
                    <h1 className="font-semibold text-xl">Obesidade</h1>
                    <p>IMC está entre 30 e 99</p>
                </div>
            </div>
            
        }
        {useCtx?.result < 18.5 && useCtx.result > 0 && <div className="flex flex-col px-40 py-28 gap-3 rounded-md bg-gray-500 text-white items-center justify-center">
                    <div className="bg-gray-600/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
                    <h1 className="font-semibold text-xl">Desnutrição</h1>
                    <p>IMC está entre 0 e 18.5</p>
                    <button onClick={handleClickclear} className="mt-2"><img src="./images/leftarrow.png" className="size-9" alt="" /></button>
                </div> }
        {useCtx?.result < 24.9 && useCtx.result > 18.5 && <div className="flex flex-col px-20 py-14 lg:px-40 lg:py-28 p-2 gap-3 rounded-md bg-green-600 text-white items-center justify-center ">
            <div className="bg-green-700/50 rounded-full p-5 items-center flex justify-center"><img src="./images/up.png" alt="" /></div>
            <h1 className="font-semibold text-xl">Normal</h1>
            <p className="text-center">IMC está entre 18.5 e 24.9</p>
            <button onClick={handleClickclear} className="mt-2"><img src="./images/leftarrow.png" className="size-9" alt="" /></button>
        </div> }
        {useCtx?.result < 30 && useCtx.result > 24.9 && 
        <div className="flex flex-col px-40 py-28 gap-3 rounded-md bg-yellow-500 text-white items-center justify-center ">
            <div className="bg-yellow-600/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
        <h1 className="font-semibold text-xl">Sobrepeso</h1>
        <p>IMC está entre 24.9 e 30</p>
        <button onClick={handleClickclear} className="mt-2"><img src="./images/leftarrow.png" className="size-9" alt="" /></button>
        </div> }
        {useCtx?.result > 30 && 
        <div className="flex flex-col px-40 py-28 gap-3 rounded-md bg-red-700 text-white items-center justify-center ">
        <div className="bg-red-800/50 rounded-full p-5 items-center flex justify-center"><img src="./images/down.png" alt="" /></div>
        <h1 className="font-semibold text-xl">Obesidade</h1>
        <p>IMC está entre 30 e 99</p>
        <button onClick={handleClickclear} className="mt-2"><img src="./images/leftarrow.png" className="size-9" alt="" /></button>
        </div>}
        </>
    )
}