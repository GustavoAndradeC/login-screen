const testimonials = [
    {
        quote: "Este SaaS transformou completamente nosso fluxo de trabalho. É intuitivo, poderoso e nos economizou inúmeras horas.",
        author: "Jane Doe",
        company: "Tech Innovators Inc."
    },
    {
        quote: "O recurso de análises é um divisor de águas. Obtivemos insights que impactaram diretamente nossos resultados financeiros.",
        author: "John Smith",
        company: "Data Driven Co."
    },
    {
        quote: "O suporte ao cliente é de primeira. Qualquer problema que tivemos foi resolvido de forma rápida e eficiente.",
        author: "Emily Brown",
        company: "Startup Ventures"
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg">
                            <p className="text-lg mb-4">"{testimonial.quote}"</p>
                            <p className="font-semibold">{testimonial.author}</p>
                            <p className="text-gray-400">{testimonial.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

