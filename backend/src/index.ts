import { Hono } from 'hono'
import { cors } from 'hono/cors';
import { blogRoute } from './routes/blog';
import { userRoute } from './routes/user';

const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    	JWT_SECRET:string
	}
}>();

// app.use('/api/v1/blog/*',async(c,next)=>{
// 	const header = c.req.header('Authorization')||""
// 	const response = await verify(header,c.env.JWT_SECRET);
// 	if(response.id)
// 	{
// 		next()
// 	}
// 	else{
// 		c.status(403);
// 		return c.json({
// 			error:"user not found"
// 		})
// 	}
// })

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMzM0YzM0NTktYWI5YS00ZTBkLThmZTctZDI2MDQ5ZjE4MTcxIiwidGVuYW50X2lkIjoiMzg0ZTI5NGQyZTc3OTljNTYxOGJmZGQxMTA4NDc5N2QzNTNiODhkNTNjODIwZjAxZTVmZWNkYzc4MjFlYThmMCIsImludGVybmFsX3NlY3JldCI6ImNkMTUwMTEzLTgxOTUtNDkwYS04YmFiLTY3YjcyOWEwMDBjMCJ9._sRlvBdpoqKmnuzJD-zyBx8uvDeamjC54ptqJz4_3lU
app.use(cors())
app.route('/api/v1/user',userRoute)
app.route('api/v1/blog',blogRoute)



export default app
