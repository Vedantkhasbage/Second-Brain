import { useState } from "react"
import { Button } from "./Button"
import { CrossIcon } from "./icons/crossicon"
import axios from "axios";

export const PopUpModal=({open,onclose})=>{
    // const [postarray,setpostarray]=useState([]);
      const [title,settitle]=useState("");    
      const [link,setlink]=useState("");    
      const [type,settype]=useState("");    
    
   async function handlesubmit(){
          const response=await axios.post("http://localhost:2000/api/v1/content",{
            title:title,
            type:type,
            link:link
          },
        {
            headers:{
                "Authorization":localStorage.getItem("token")  
            }
        }
        )
        console.log(response)
    }
    return <div>
         
            {open && <form onSubmit={handlesubmit}>
                <div  className="bg-black h-screen w-full bg-opacity-80 fixed left-0 top-0 z-20 flex justify-center items-center">
                 <div className="h-72 w-80  bg-white z-30 text-gray-950 rounded-xl">
                    <div className="w-full font-semibold flex justify-between text-center border rounded-xl ">
                        <h1 className="ml-20 mt-2">Add Your Content</h1>
                       <div className="mr-2 mt-2">
                       <div onClick={onclose} className="cursor-pointer">
                       <CrossIcon/>
                       </div>
                       </div>
                    </div>

                    <div className="w-full h-48 mt-8">
                        <input onChange={(e)=>{settitle(e.target.value)}} type="text" placeholder="Enter Your Title" className="w-full h-[40px] mb-4 rounded-xl border-2 outline-none" />
                        <input onChange={(e)=>{setlink(e.target.value)}} type="text" placeholder="Paste Your Link" className="w-full h-[40px] mb-4 rounded-xl border-2 outline-none" />
                        <input onChange={(e)=>{settype(e.target.value)}} type="text" placeholder="Platform (e.g Youtube.)" className="w-full h-[40px] mb-4 rounded-xl border-2 outline-none" />
                     <div className="flex justify-center">
                     <Button variants="primary" size="sm" text="Submit"/>
                     </div>
                    </div>
                 </div>
                
                
                </div>
                
                </form>}
         
    </div>
}