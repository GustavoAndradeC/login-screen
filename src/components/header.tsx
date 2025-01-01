import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">SaaS</Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">Planos</Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Avaliações</Link>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Inicie sua jornada</Button>
      </div>
    </header>
  )
}

