import axios from "axios";
import { useEffect, useState } from "react"

export const useContent=()=>{
    const [content,setcontent]=useState([]);

        useEffect(()=>{
           axios.get("http://localhost:2000/api/v1/mycontent",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
           }).then((response)=>{
            {console.log(response)}
               setcontent(response.data.content)
            })
        },[])

    return content

}