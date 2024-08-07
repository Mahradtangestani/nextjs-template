

import { useContext } from "react";
import ToggleBtn from "./ToggleBtn";
import { MainContext } from "@/context/MainContext";
import { useRouter } from "next/navigation";

const Navbar = ()=>{
    
    const router = useRouter()
    const {setDarkMode} = useContext(MainContext)

    return (
        <nav className="bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg">
             <div className="w-full h-full p-1">
                
                 <div className="flex justify-center items-center h-full">
                    <ToggleBtn title={"Dark"} onChange={(e)=>setDarkMode(e.target.checked ? "dark" : "light")}/>
                    <button className="mr-80 p-1 border border-blue-700 bg-blue-400 text-white rounded-md dark:bg-white dark:text-gray-700 dark:border-white" onClick={()=>router.push("/")}>HOME</button>
                 </div>
                 
             </div>
        </nav>
    )
}

export default Navbar;