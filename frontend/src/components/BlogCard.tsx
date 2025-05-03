import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName:string;
    title:string;
    content:string;
    publishDate:string;
    id:string
}
export const BlogCard = ({authorName,title,content,publishDate,id}:BlogCardProps)=>{
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-sm cursor-pointer">
            <div className="flex">
                <div className="justify-center flex-col">
                    <Avatar name={authorName} size="small"/>

                </div>
                <div className="font-extralight pl-2 text-sm ">
                    {authorName}
                </div>
                <div className="j flex justify-center flex-col pl-2 text-sm">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-500 ">
                {publishDate}

                </div>
            </div>

            <div className="font-semibold  text-xl pt-2" >
                {title}
            </div>
            <div className="font-thin text-sm">
                {/* if content length is greater then 100 then apply */}
                {content.slice(0,150) + "..."}
            </div>
            <div className="text-slate-400 font-thin text-xs pt-4">
                {`${Math.ceil(content.length/100)}  minute(s)`}
            </div>

        </div>

    </Link>

}
export function Circle(){
    return <div className=" w-1 h-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({name,size="small"}:{name:string,size:"small"|"big"},){
    return <div>
        
            <div className={`relative inline-flex items-center justify-center ${size==="small"? "w-6 h-6":"w-10 h-10"}  overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
                <span className={` ${size==="small"?"text-xs":"text-md"}text-xs text-gray-600 dark:text-gray-300`}>{name[0]}</span>
            </div>

    </div>
}