'use client'

import Image from 'next/image'
import logo1 from './image/image1.png'
import logo2 from './image/image2.png'
import logo3 from './image/image3.png'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox'

const images = [logo1, logo2, logo3];

export default function Register() {
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
        <div className="h-screen flex items-center justify-evenly p-4 overflow-hidden flex-col md:flex-row">
            {/* Card with Image */}
            <Card className="w-full md:w-1/2 max-w-md h-auto md:h-full border-0 shadow-none overflow-hidden hidden md:block">
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
            <Card className="w-full md:w-1/2 max-w-md border-0 shadow-none">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                        Bem-vindo ao nosso sistema!
                        {/* <Image
                            src={hand}
                            alt="Login page illustration"
                            className="object-contain h-6 w-6"
                        /> */}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Hoje é um novo dia. É o seu dia. Você o molda.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Crie sua conta e comece a gerenciar seus projetos.
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
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </label>
                        </div>
                        <Button className="w-full" type="submit">
                            Entrar
                        </Button>
                    </form>

                </CardContent>
            </Card>
        </div>
    )
}
