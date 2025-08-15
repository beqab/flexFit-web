"use client"

import { Button } from '@/components/ui/button'
import { Smartphone } from 'lucide-react'
import { useState } from 'react'
import AppDownloadModal from './app-download-modal'

interface AppDownloadButtonProps {
  className?: string
}

export default function AppDownloadButton({ className }: AppDownloadButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Button 
        size="sm" 
        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 ${className || ''}`}
        onClick={openModal}
      >
        <Smartphone className="h-4 w-4 mr-2" />
        აპის ჩამოტვირთვა
      </Button>

      <AppDownloadModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  )
}
