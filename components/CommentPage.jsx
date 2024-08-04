"use client"
import { useEffect, useState } from "react";
import TableLoading from "./TableLoading";
import axios from "axios";

const CommentPage  = ()=>{

    const [Comments , setComments] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const handleGetComments = async ()=>{
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
        if(res.status == 200){
            setComments(res.data)
        }
        setIsLoading(false)
    }

    useEffect(()=>{ 
        handleGetComments()
    } , [])

    return isLoading ? (<TableLoading/>) : (
        <div className="w-full p-4">
            <table className="table w-full">
                <thead>
                    <tr className="h-8">
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300"}>نام کاربر</td>
                        <td className={"bg-gray-300 rounded-l-md"}>ایمیل</td>
                    </tr>
                </thead>
                <tbody>
                    {Comments.map(c=>(
                        <tr key={c.id}>
                            <td className="bg-white rounded-r-md p-1">{c.id}</td>
                            <td className="bg-white p-1">{c.name}</td>
                            <td className="bg-white p-1 rounded-l-md ">{c.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CommentPage;