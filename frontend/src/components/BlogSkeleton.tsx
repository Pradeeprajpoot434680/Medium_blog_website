import { Avatar, Circle } from "./BlogCard"

export const BlogSkeleton = ()=>{
    return <div >

<div className="border-b border-slate-200 pb-4 p-4 w-screen max-w-screen-sm cursor-pointer">
            <div className="flex">
                <div className="justify-center flex-col">
                <div className="h-4 w-4 bg-gray-200 rounded-full max-w-[360px] mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>


                </div>
                <div className="font-extralight pl-2 text-sm ">
                <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>

                </div>
                <div className="j flex justify-center flex-col pl-2 text-sm">
                    <Circle/>
                </div>
                <div className="pl-2 font-thin text-slate-500 ">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>


                </div>
            </div>

            <div className="font-semibold  text-xl pt-2" >
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>
            <div className="font-thin text-sm">
                {/* if content length is greater then 100 then apply */}
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>
            <div className="text-slate-400 font-thin text-xs pt-4">
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>

            </div>

        </div>
        
        <div role="status" className="max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
        </div>


    </div>
}