import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { cors } from "hono/cors";




export const blogRoute = new Hono<{
	Bindings: {
		DATABASE_URL: string
    	JWT_SECRET:string
	},
    Variables:{
        userId:string
        
    }
}>();
blogRoute.use(cors())

blogRoute.use('/*',async(c:any,next)=>{
    const authHeader = c.req.header('Authorization')||"";
    try{
        const user =await verify(authHeader,c.env.JWT_SECRET)
        if(user)
        {
            c.set("userId",user.id);
             await next();
        }else
        {
            c.status(403);
            return c.json({
                message:"you are not logged in"
            })
        }

    }
    catch(e){
        return c.json({
            message:"you are not logged in"
        })
    }


})

  
blogRoute.post("/",async(c)=>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

    const userId = c.get("userId")
    const  blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:userId
        }
    
    })

    return c.json({
        id:blog.id
    }) 


    
  })
  blogRoute.put("/",async(c)=>{
    const body =await c.req.json();
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())


    const  blog = await prisma.post.update({
        where:{
            id:body.id
        },
        data:{
            title:body.title,
            content:body.content,
           
        }
    
    })
    
    return c.json({
        id:blog.id
    }) 
  })

  //Todo add pagination
 blogRoute.get("/bulk",async(c)=>{
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())
    
    const blogs = await prisma.post.findMany({
        select:{
            content:true,
            title:true,
            id:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

    return c.json({
        blogs
    })
 })

  blogRoute.get("/:id",async(c)=>{
    const id =await c.req.param('id');
    const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())


    try{
        const  blog = await prisma.post.findFirst({
            where:{
             id:id
            },
            select:{
                id:true,
                title:true,
                content:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
         
         })
         
         return c.json({
             blog
         })  
    }catch(e)
    {
        c.status(411);
        return c.json({
            msg:"error while the data fetching" 
        })
    }
 })
