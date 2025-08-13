"use client"

import { useState } from 'react'
import { Button } from './button'
import { Menu, X } from 'lucide-react'

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
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Activities
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Pricing
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-4 pt-6 border-t border-gray-200">
            <Button variant="ghost" className="w-full justify-start text-lg" onClick={toggleMenu}>
              Login
            </Button>
            <Button className="w-full justify-start text-lg" onClick={toggleMenu}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
