"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import TableLoading from "./TableLoading";

const UserPage = ()=>{
    const [users , setUsers] = useState([])
    const [isLoading , setIsLoading] = useState(false)

    const handleGetUsers = async ()=>{
        setIsLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        if(res.status == 200){
            setUsers(res.data)
        }
        setIsLoading(false)
    }

    useEffect(()=>{ 
       handleGetUsers()
    } , [])
    return isLoading ? (<TableLoading/>) : (
        <div className="w-full p-4">
            <table className="table w-full">
                <thead>
                    <tr className="h-8">
                        <td className={"bg-gray-300 rounded-r-md"}>#</td>
                        <td className={"bg-gray-300"}>نام کاربر</td>
                        <td className={"bg-gray-300"}>نام کاربری</td>
                        <td className={"bg-gray-300"}>ایمیل</td>
                        <td className={"bg-gray-300 rounded-l-md"}>آدرس</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u=>(
                        <tr key={u.id}>
                            <td className="bg-white rounded-r-md p-1">{u.id}</td>
                            <td className="bg-white p-1">{u.name}</td>
                            <td className="bg-white p-1">{u.username}</td>
                            <td className="bg-white p-1">{u.email}</td>
                            <td className="bg-white rounded-l-md p-1">{u.address.street}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserPage;