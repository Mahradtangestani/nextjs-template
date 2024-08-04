"use client"

import TableLoading from "@/components/TableLoading";
import axios from "axios";
import { useEffect, useState } from "react";

const PostPage = ()=>{
    const [posts , setPosts] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const handleGetPosts = async ()=>{
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(res);
        if(res.status == 200){
            setPosts(res.data)
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        handleGetPosts()
    } , [])
    return isLoading ? (<TableLoading/>) : (
        <div className="w-full p-4">
            <table className="table w-full">
                <thead>
                    <tr className="h-8">
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300 rounded-l-md"}>توضیحات</td>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(p=>(
                        <tr key={p.id}>
                            <td className="bg-white rounded-r-md p-1">{p.id}</td>
                            <td className="bg-white rounded-l-md p-1">{p.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default PostPage;