import { useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/card"
import { PlusIcon } from "../components/icons/plusicon"
import { ShareIcon } from "../components/icons/shareicon"
import { PopUpModal } from "../components/Popupmodal"
import { SideBar } from "../components/sidebar"
import { useContent } from "../components/content"
// import { useNavigate } from "react-router-dom"
// import { SignUp } from "./signUp"

export const DashBoard=()=>{
    const [modalopen,setmodalopen]=useState(false);
        const content=useContent();
        console.log(content)

    return <div>
      
     
     <div className="bg-white h-screen flex font-sour">
        < PopUpModal open={modalopen} onclose={()=>{       //we pass this whole function as props to component we can do this now 
        // popupmodal have access to this onclose function 
          setmodalopen(false)
        }}/>
            <div >
           <SideBar/>
            </div>
       
         <div className="w-full h-screen ml-8">

        
        <div className="flex justify-end">

        <div  className="mr-4 mt-1">
        <Button onClick={()=>{setmodalopen(true)}} starticon={<PlusIcon/>} text="Add Content" size="md" variants="secondary"/> 
        </div >  

        <div className="mr-4 mt-1">
        <Button starticon={<ShareIcon/>} text="Share Brain" size="md" variants="secondary"/>
        </div>
          
        
        </div>
       
          <div className="flex gap-4 ml-4 mt-8 flex-wrap ">
            {content.map(({type,title,link})=> <Card title={title} type={type} link={link}/>
            )}
          {/* <Card title="first twitte" type="twitter" link="https://x.com/narendramodi/status/1863584412732166419"/>
          <Card title="first twitte" type="twitter" link="https://x.com/narendramodi/status/1863584412732166419"/> */}

          </div>


          </div>



    </div>

    
  
    </div>
}