import { LogoIcon } from "./icons/logo"
import { Twitter } from "./icons/twitter"
import { Youtube } from "./icons/youtube"
import { SideBarButton } from "./sidebaritems"

export const SideBar=()=>{

    return <div className="h-screen w-72 bg-white border-2">
        <div className="flex w-full items-center mt-4 ml-2 cursor-pointer">
            <LogoIcon/>
            <h1 className="ml-2 text-3xl">Second Brain</h1>
        </div>
          <div className="mt-12">
          <SideBarButton starticon={<Youtube/>} text="Youtube"/>
          <SideBarButton starticon={<Twitter/>} text="Twitter"/>
          </div>
    </div>
}