"use client"
import { useEffect, useState } from "react";
import TableLoading from "./TableLoading";
import axios from "axios";

const GalleryPage  = ()=>{

    const [gallery , setGallery] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const handleGetGallery = async ()=>{
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/photos")
        if(res.status == 200){
            setGallery(res.data)
        }
        setIsLoading(false)
    }

    useEffect(()=>{ 
        handleGetGallery()
    } , [])

    return isLoading ? (<TableLoading/>) : (
        <div className="w-full p-4">
            <table className="table w-full">
                <thead>
                    <tr className="h-8">
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300"}>عنوان</td>
                        <td className={"bg-gray-300 rounded-l-md"}>url</td>
                    </tr>
                </thead>
                <tbody>
                    {gallery.map(g=>(
                        <tr key={g.id}>
                            <td className="bg-white rounded-r-md p-1">{g.id}</td>
                            <td className="bg-white p-1">{g.title}</td>
                            <td className="bg-white p-1 rounded-l-md ">{g.url}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GalleryPage;