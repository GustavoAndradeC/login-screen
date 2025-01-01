'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { registerUser } from './action'

const formSchema = z.object({
    username: z.string().min(5, { message: 'O nome de usuário deve ter pelo menos 5 caracteres' }),
    email: z.string().email({ message: 'Endereço de e-mail inválido' }),
    password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    confirm_password: z.string().min(8, { message: 'A senha deve ter pelo menos 8 caracteres' }),
    terms: z.boolean().refine(val => val === true, { message: 'Você deve aceitar os termos e condições' })
})

export function RegistrationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirm_password: '',
            terms: false,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const result = await registerUser(values)
            if (result.success) {
                console.log('Registration successful')
            } else {
                console.error('Registration failed:', result.error)
                form.setError('root', { type: 'manual', message: result.error })
            }
        } catch (error) {
            console.error('Registration error:', error)
            form.setError('root', { type: 'manual', message: 'An unexpected error occurred' })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome de Usuário</FormLabel>
                            <FormControl>
                                <Input placeholder="johndoe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirme sua senha</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Accept terms and conditions
                                </FormLabel>
                                <FormDescription>
                                    You agree to our Terms of Service and Privacy Policy.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Registrando...' : 'Registrar'}
                </Button>
                {form.formState.errors.root && (
                    <p className="text-red-500">{form.formState.errors.root.message}</p>
                )}
            </form>
        </Form>
    )
}

