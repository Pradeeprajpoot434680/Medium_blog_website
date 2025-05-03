import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";


export interface Blog {
    title:string,
    content:string,
    id:string,
    publishDate:string,
    author:{
        name:string
    }
}

export const useBlog= ({id}:{id:string})=>{
        const [loading,setLoadig] = useState(true)
        const [blog, setBlog] = useState<Blog>()
    
        useEffect(()=>{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers:{
                    Authorization:localStorage.getItem('token')
                }
            })
            .then(response=>{
                setBlog(response.data.blog)
                setLoadig(false)
            })
        },[id])
                
                
    
        return {
            loading,
            blog
        }
    }
export const useBlogs= ()=>{
    const [loading,setLoadig] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:localStorage.getItem('token')
            }
        })
        .then(response=>{
            setBlogs(response.data.blogs)
            setLoadig(false)
        })
    },[])
            
            

    return {
        loading,
        blogs
    }
}