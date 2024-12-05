import axios from "axios"
import { DeleteIcon } from "./icons/deleteicon"
import { ShareIcon } from "./icons/shareicon"

interface Cardprops{
    link:String,
    title:String,
    type:"youtube" |"twitter"
}

export const Card = ({title,link,type}:Cardprops) => {
      
   async function deletecontent(){
          const response=await axios.delete("http://localhost:2000/api/v1/delete",{
             headers:{
                "Authorization":localStorage.getItem("token")
             }
          })
          console.log("hello ")
          console.log(response)
    }

    return <div>
        <div className="min-h-64 w-80 rounded-xl bg-white shadow shadow-black ">
        <div className="flex justify-between border-2 rounded-xl items-center h-12">
            <div className="flex ml-4 items-center">
                <div onClick={deletecontent} className="cursor-pointer">
                <DeleteIcon />
                </div>
                <h1 className="font-semibold text-xl ml-2"> {title}</h1>
            </div>
            <div className="flex mr-4">
                <div className="mr-2">
                    <ShareIcon />
                </div>
                <div >
                    <ShareIcon />
                </div>
            </div>
        </div>

        <div className="py-2 px-2 relative">
            {type==="youtube" &&   <iframe className="w-full h-full rounded-xl" src={link.replace("watch","embed").replace("?v=","/")} 
            title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
}
          

          
           {type==="twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com","twitter.com")}></a>
            </blockquote>}
           
        </div>
    </div>
    </div>
}