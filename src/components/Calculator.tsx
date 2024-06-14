import { useForm } from "react-hook-form"
import { Input } from "./ui/input"
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Button } from "./ui/button"
import { useImc } from "@/contexts/imcContext"
import { useState } from "react"

const imcShema = z.object({
    altura: z.coerce.number({invalid_type_error:'O valor digitado não é um número'}),
    peso: z.coerce.number({invalid_type_error:'O valor digitado não é um número'})
})


export const Calculator = ()=>{
    const useCtx = useImc()
    const form = useForm<z.infer<typeof imcShema>>({
        resolver: zodResolver(imcShema),
    })
    const handleCalcSubmit = (data: z.infer<typeof imcShema>)=>{
        console.log(useCtx)
        if (useCtx) {
            const imc = useCtx.calc(data.altura,data.peso);
            form.reset({altura:'',peso:''}) 
        }
    }
    console.log(form)
    return(
        <div className="flex flex-col h-full justify-between">
            
            <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold">Calcule seu IMC</h1>
                <p>IMC é a sigla para índice de massa corpórea, parâmetro adotado pela organização mundial de saúde para calcular o peso ideal de cada pessoa</p>
            </div>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleCalcSubmit)} className="flex flex-col gap-10 justify-between">
                        <div className="flex flex-col gap-6 py-5 md:py-20">
                            <FormField
                            control={form.control}
                            name="altura"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                    <Input
                                    className="outline-none border-b"
                                    autoFocus
                                    placeholder="Digite a sua altura. Ex: 1.5 (em metros)"
                                    {...field}/>
                                    </FormControl>
                                    <FormControl/>
                                </FormItem>
                            )}/>
                            <FormField
                            control={form.control}
                            name="peso"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                    <Input
                                    className="outline-none border-b"
                                    placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                                    {...field}/>
                                    
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                        </div>



                        <Button type="submit" className="p-7 rounded-lg bg-teal-600 hover:bg-teal-600/90">Calcular</Button>


                    </form>
                    
                </Form>
            </div>
            
        </div>
        
    )
}