"use client"
import { Button } from '@/components/ui/button'
import { MobileNav } from '@/components/ui/mobile-nav'
import { Smartphone } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (currentPage) {
      return currentPage === path
    }
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center"> 
              <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
              <span className="text-xl font-bold text-gray-900">FlexFit</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              მთავარი
            </Link>
            <Link 
              href="/activities" 
              className={`transition-colors ${
                isActive('/activities') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              აქტივობები
            </Link>
            <Link 
              href="/pricing" 
              className={`transition-colors ${
                isActive('/pricing') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ფასები
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ჩვენს შესახებ
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive('/contact') 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              კონტაქტი
            </Link>
          </nav>

          {/* Download App Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" onClick={() => {
              window.open('https://play.google.com/store/apps/details?id=com.flexfit.app', '_blank')
            }}>
              <Smartphone className="h-4 w-4 mr-2" />
              აპის ჩამოტვირთვა
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
