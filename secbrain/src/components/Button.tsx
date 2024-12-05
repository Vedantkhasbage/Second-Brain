import { ReactElement } from "react"

interface buttonprops{
    size:"sm"|"lg"|"md",
    text:string,
    variants:"primary"|"secondary",
    starticon:ReactElement,
    onClick?:()=>void,
}
const variantstyle={
    "primary":"bg-gray-500",
    "secondary":"bg-gray-500"
}

const sizestyle={
    "sm":"h-8 w-32",
    "lg":"h-12 w-[380px] rounded-xl",
    "md":"h-12 w-40"
}
const defaultStyles="rounded font-semibold justify-center items-center flex text-white"

export const Button=(props:buttonprops)=>{

    return <button onClick={props.onClick} className={`${variantstyle[props.variants]} ${sizestyle[props.size]} ${defaultStyles}`}> <div className="pr-2"> {props.starticon} </div> <div className="mr-2">{props.text}</div></button>
}