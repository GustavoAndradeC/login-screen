'use client'

import Image from 'next/image'
import logo1 from './image/image1.png'
import logo2 from './image/image2.png'
import logo3 from './image/image3.png'
import hand from './image/imagehand.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react';

const images = [logo1, logo2, logo3];

export default function Login() {
    const [imageIndex, setImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 500);

        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-screen flex items-center justify-evenly p-4 overflow-hidden">
            <Card className="w-1/2 max-w-md border-0 shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        Bem vindo de volta
                        <Image
                            src={hand}
                            alt="Login page illustration"
                            className="object-contain h-6 w-6"
                        />
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Hoje é um novo dia. É o seu dia. Você o molda.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Entre para começar a gerenciar seus projetos.
                    </p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Email
                            </label>
                            <Input
                                id="email"
                                placeholder="Example@email.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium">
                                Senha
                            </label>
                            <Input
                                id="password"
                                placeholder="Pelo menos 8 caracteres"
                                type="password"
                                required
                            />
                        </div>
                        <Button
                            variant="link"
                            className="px-0 text-sm font-normal"
                            type="button"
                        >
                            Esqueceu sua senha?
                        </Button>
                        <Button className="w-full" type="submit">
                            Entrar
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-evenly text-xs">
                            <span className="bg-background px-1 text-muted-foreground">Ou</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Button variant="outline" className="w-full" type="button">
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                    fill="#EA4335"
                                />
                            </svg>
                            Entrar com o Google
                        </Button>
                        <Button variant="outline" className="w-full" type="button">
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                            </svg>
                            Entrar com o Facebook
                        </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground">
                        Você não tem uma conta?{" "}
                        <Button variant="link" className="px-0" type="button">
                            Inscrever-se
                        </Button>
                    </p>
                </CardContent>
            </Card>
            <Card className="w-full md:w-1/2 max-w-md h-auto md:h-full border-0 shadow-none overflow-hidden">
                <CardContent className="p-0 h-full flex items-center justify-center">
                    <Image
                        src={images[imageIndex]}
                        alt="Login page illustration"
                        className={`object-contain w-full h-auto max-h-full transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                </CardContent>
            </Card>
        </div>
    )
}
