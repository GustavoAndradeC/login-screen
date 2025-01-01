import { Zap, Shield, BarChart, Users } from 'lucide-react'

const features = [
    {
        icon: Zap,
        title: 'Ultra Rápido',
        description: 'Nossa plataforma é otimizada para velocidade, garantindo que você trabalhe de forma eficiente, sem atrasos.'
    },
    {
        icon: Shield,
        title: 'Seguro e Confiável',
        description: 'Seus dados estão protegidos com medidas de segurança de ponta, garantindo tranquilidade.'
    },
    {
        icon: BarChart,
        title: 'Análises profundas',
        description: 'Obtenha insights valiosos com nossas ferramentas completas de análise e relatórios.'
    },
    {
        icon: Users,
        title: 'Colaboração em Equipe',
        description: 'Promova o trabalho em equipe com nossos recursos robustos de colaboração, projetados para comunicação fluida.'
    }
]

export default function Features() {
    return (
        <section id="features" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recursos avançados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
                            <feature.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

