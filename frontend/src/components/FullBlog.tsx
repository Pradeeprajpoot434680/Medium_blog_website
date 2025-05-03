import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog})=>{
    return <div>
            <Appbar/>
            <div className="flex justify-center ">
                <div className="grid grid-cols-12 w-full px-20 max-w-screen-xl pt-14">
                    <div className="col-span-8">
                        <div className="text-5xl font-bold">
                            {blog.title}
                        </div>
                        <div className="pt-2">
                            Posted at 21 Jan 2024
                        </div>
                        <div className="text-xl font-sm pt-4 text-slate-700">
                            {blog.content}
                        </div>
                        
                    </div>
                    <div className="col-span-4 font-semibold text-lg">
                        <div className="text-gray-600">
                            Author

                        </div>
                        <div className="flex pt-2">
                            <div className="flex justify-center">

                                <Avatar size="big" name={blog.author.name||"Anonymous" }/>
                            </div>
                            <div className="mx-4">
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>

                                <div className="text-lg font-medium text-slate-400">
                                Random catch phase about the author's ablity to grap
                                the user's attention
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
}