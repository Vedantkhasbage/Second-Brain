import { useState } from "react"
import { Button } from "../components/Button"
import axios from 'axios'
// import { SignIn } from "./signIn";
import { useNavigate } from "react-router-dom";
 

export const SignUp = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    
    function visitTologIn(){
        navigate("/SignIn")
    }
   async function handlesubmit(e){
    e.preventDefault();
        const response=await axios.post("http://localhost:2000/api/v1/signUp",{
            name:name,
            email:email,
            password:password
        }) 
        console.log(response)
        alert("You're Sign Up")
    }
    
    return <form onSubmit={handlesubmit} className="font-sour">
     <div className="h-screen w-full flex justify-center items-center">
        <div className="h-2/3  w-[400px] rounded-xl shadow-xl border-2	shadow-black">
            <div className="h-12 flex justify-center mt-4">
                <h1 className="text-semibold mt-4 text-3xl">Sign Up!!</h1>
            </div>
               
           <div className=" mb-48">
           <div className="flex h-[50px]  mt-24 justify-center relative">
                <svg className="text-gray-500 absolute left-3 top-1/4 h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input onChange={(e)=>{setname(e.target.value)}} className="w-96 rounded-3xl pl-10 pr-3 border-4 outline-none py-2 " type="text" placeholder="Enter Your Name" name="" id="" />

            </div>

            <div className="flex h-[50px]  mt-4 justify-center relative">
                <svg className="text-gray-500 absolute left-3 top-1/4 h-[25px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input onChange={(e)=>{setemail(e.target.value)}} className="w-96 rounded-3xl pl-10 pr-3 border-4 outline-none py-2 " type="text" placeholder="Enter Your Email" name="" id="" />

            </div>


            <div className="flex h-[45px]  mt-6 justify-center relative">
                <svg className=" text-gray-500  absolute left-3 top-1/4 h-[25px] " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input onChange={(e)=>{setpassword(e.target.value)}}  className="w-96 rounded-3xl pl-10 pr-3 border-4 outline-none py-2" type="text" placeholder="Enter Your Password" name="" id="" />

            </div>
            <div onClick={visitTologIn} className="w-full flex items-center justify-center mt-8">
            <Button variants="primary" size="lg" text="Submit"/>
            </div>
           </div>
          

        </div>

    </div>
    </form> 

}