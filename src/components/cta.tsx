import { Button } from '@/components/ui/button'

export default function CTA() {
    return (
        <section className="py-20 px-4 bg-blue-600">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar a sua jornada?</h2>
                <p className="text-xl mb-8">Junte-se a milhares de clientes satisfeitos e transforme seu fluxo de trabalho hoje mesmo.</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                    Experimente grátis
                </Button>
            </div>
        </section>
    )
}

