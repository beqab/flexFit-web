"use client"


import { X, Smartphone, Gift } from 'lucide-react'
import Link from 'next/link'
import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

interface AppDownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AppDownloadModal({ isOpen, onClose }: AppDownloadModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div className="fixed top-0 left-0 right-0 bottom-0 z-[60] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
            <Smartphone className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            აპლიკაცია მალე გაეშვება!
          </h2>

          {/* Message */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            მანამდე კი ჩაერთე პრომო აქციაში და აპლიკაციის გაშვების შემდეგ <span className="text-yellow-600  "> მიიღე ერთთვიანი უფასო საწევრო</span>
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">  
            საწევრს მიიღებ პირველი 500 მომხმარებელი ასე რომ იჩქარეთ!
          </p>

          {/* Promo badge */}
          <Link href="https://tally.so/r/n9kQdK" target="_blank" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full mb-6">
            <Gift className="h-4 w-4" />
            <span className="font-semibold">ერთთვიანი უფასო საწევრო</span>
          </Link>

          {/* Buttons */}
          {/* <div className="space-y-3">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => {
                window.open('https://play.google.com/store/apps/details?id=com.flexfit.app', '_blank')
                onClose()
              }}
            >
              <Smartphone className="h-4 w-4 mr-2" />
              აპის ჩამოტვირთვა
            </Button>
            
            <Link href="/new" className="block">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                დარეგისტრირება
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>,
    document.body
  )
}
