import z from 'zod'



export const signupInputs = z.object({
    email:z.string().email(),
    name:z.string().optional(),
    password:z.string().min(6)

})

export const signinInputs = z.object({
    email:z.string().email(),
    password:z.string().min(6)
})


export const createBlogInputs = z.object({
    title:z.string(),
    content:z.string()
})

export const updateBlogInputs = z.object({
    title:z.string(),
    content:z.string(),
    id:z.string()
})
export type UpdateBlogInputs= z.infer<typeof updateBlogInputs>
export type SignupInputs= z.infer<typeof signupInputs>
export type SignipInputs= z.infer<typeof signinInputs>
export type CreateBlogInputs= z.infer<typeof createBlogInputs>