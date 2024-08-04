

import { useContext } from "react";
import ToggleBtn from "./ToggleBtn";
import { MainContext } from "@/context/MainContext";

const Navbar = ()=>{
    
    const {setDarkMode} = useContext(MainContext)

    return (
        <nav className="bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg">
             <div className="w-full h-full p-1">
                 <div className="flex justify-center items-center h-full">
                    <ToggleBtn title={"Dark"} onChange={(e)=>setDarkMode(e.target.checked ? "dark" : "light")}/>
                 </div>
             </div>
        </nav>
    )
}

export default Navbar;