import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Reinvente sua produtividade
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Simplifique suas tarefas, aumente sua produtividade e alcance seus objetivos mais rapidamente.
      </p>
      <div className="flex justify-center space-x-4">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
          Experimente grátis
        </Button>
        <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black text-lg px-8 py-3">
          Assistir à demonstração
        </Button>
      </div>
    </section>
  )
}

