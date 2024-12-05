import { ReactElement } from "react"

interface SideBarProps{
    starticon?:ReactElement,
    text:string,
}

export const SideBarButton=(props:SideBarProps)=>{


    return <button className="h-16 w-full shadow border-2 flex text-xl items-center mb-2">
    {props.starticon} {props.text}
    </button>
}