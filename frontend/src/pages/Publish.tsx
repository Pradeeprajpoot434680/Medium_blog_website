import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish=()=>{
    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    return <div>
            <Appbar/>
            <div className="flex justify-center pt-10 ">
                <div className="max-w-screen-sm w-full">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey-600">Your Title</label>
                    <input onChange={(e)=>{
                        setTitle(e.target.value)
                    }} type="text"  className=" focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter the title of the blog ..."/>

                    <TextEditor onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{
                        setContent(e.target.value)
                    }} />   
                    <button onClick={async()=>{
                        const response =await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                            title,
                            content
                        },{
                            headers:{
                                Authorization:localStorage.getItem('token')
                            }
                        })
                        navigate(`/blog/${response.data.id}`)
                    }} type="submit" className=" mt-5 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                         Publish post
                 </button>
                </div>
                    

            </div>
    </div>
}

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void})
{
    return <div>
      
           <div className="flex items-center justify-between  bg-gray-50 border border-gray-300 w-full rounded-lg focus:border-blue-500 mt-5">
               
            <div className="  bg-white rounded-b-lg w-full ">
                <label  className="sr-only">Publish post</label>
                <textarea onChange={onChange} id="editor" rows={6} className=" focus:outline-none   bg-gray-50 pl-2 block w-full px-0 text-sm text-gray-800 border-0 focus:ring-0 dark:text-slate-700 dark:placeholder-gray-400 p-4" placeholder="Write the content of the blog..." required ></textarea>
            </div>
          
           </div>
      
      
    </div>
    
}