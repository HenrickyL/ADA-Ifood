import { InputHTMLAttributes } from "react"
import { Container } from "../Container/style"
import { InputSty } from "./style"

type InputProp =  InputHTMLAttributes<HTMLInputElement> & {
    withButton: boolean
    buttonValue: string
}

export const Input = ({withButton, buttonValue,...rest}: InputProp)=>{
    return (
        <Container>
            <InputSty {...rest} />
            {withButton && 
                <InputSty type="button" value={buttonValue}/>
            }
            
        </Container>
    )
}