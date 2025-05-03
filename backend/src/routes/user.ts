import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from "hono/jwt";
import { cors } from "hono/cors";
import { signupInputs } from '@p434680/medium-comman';
//https://backend.2023btcse017.workers.dev/api/v1/blog/bulk
export const userRoute =new Hono<{
	Bindings: {
		DATABASE_URL: string
    	JWT_SECRET:string
	}
}>();

userRoute.use(cors())


userRoute.post('/signup', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	}).$extends(withAccelerate())

	const body = await c.req.json();
	console.log(body);
    const { success } = signupInputs.safeParse(body)
    if(!success)
    {
        c.status(411);
        return c.json({
            message:"Inputs is not correc"
        })
    }
	
	// zod validation
  	
  
	try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password,
				name:body.name
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt });
	} catch(e) {
		c.status(403);
		console.log(e);
		
		return c.json({ error: "error while signing up" });
	}
})
userRoute.post("/signin",async(c)=>{
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where:{
			email:body.email,
			password:body.password
		}
	})

	if(!user)
	{
		c.status(403);
		return c.json({error:"user not found"})
	}
 
	const jwt = await sign({id:user.id},c.env.JWT_SECRET);
	return c.json({jwt})
})