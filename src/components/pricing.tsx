import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const plans = [
    {
        name: 'Basic',
        price: 'R$50',
        features: ['5 Projetos', '10 GB Armazenamento', 'Suporte por E-mail']
    },
    {
        name: 'Pro',
        price: 'R$150',
        features: ['Projetos Ilimitados', '100 GB Armazenamento', 'Análises Fundamentais', 'Suporte Prioritário']
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Soluções Sob Medida', '1 TB Armazenamento', 'Análises Profundas', 'Suporte Telefônico 24/7']
    }
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Escolha o seu plano</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-lg text-center">
                            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-xl text-gray-400">/month</span></p>
                            <ul className="mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center justify-center mb-2">
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Escolha o plano</Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

