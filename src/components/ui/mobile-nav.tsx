"use client"

import { useState } from 'react'
import { Button } from './button'
import { Menu, Smartphone, X } from 'lucide-react'
import Link from 'next/link'

interface MobileNavProps {
  className?: string
}

export function MobileNav({ className }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className={`md:hidden ${className}`}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50" onClick={toggleMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64  overflow-hidden   bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 bg-white min-h-[500px]' : 'translate-x-full w-0 max-w-0'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end mb-8">

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-6">
            <Link
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              მთავარი
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              აქტივობები
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              ფასები
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              ჩვენ შესახებ
            </Link>
            <Link
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              კონტაქტი
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
          <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full" onClick={() => {
              window.open('https://play.google.com/store/apps/details?id=com.flexfit.app', '_blank')
            }}>
              <Smartphone className="h-4 w-4 mr-2" />
              აპის ჩამოტვირთვა
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
