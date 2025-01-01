'use server'

import { z } from 'zod'

const formSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirm_password: z.string().min(8),
    terms: z.boolean().refine(val => val === true)
})

export async function registerUser(data: z.infer<typeof formSchema>) {
    const result = formSchema.safeParse(data)

    if (!result.success) {
        return { success: false, error: 'Invalid form data' }
    }

    // Here you would typically:
    // 1. Hash the password
    // 2. Check if the user already exists
    // 3. Save the user to your database
    // 4. Create a session or token

    // For this example, we'll just simulate a successful registration
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate network delay

    // Return a success response
    return { success: true }
}

