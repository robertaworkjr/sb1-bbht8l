import React, { useState, useEffect } from 'react'
import { Camera, Image, Home, Headphones } from 'lucide-react'
import WelcomePage from './components/WelcomePage'
import CameraPage from './components/CameraPage'
import GalleryPage from './components/GalleryPage'
import AudioGuidePage from './components/AudioGuidePage'

function App() {
  const [photos, setPhotos] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState<'welcome' | 'camera' | 'gallery' | 'audio'>('welcome')

  useEffect(() => {
    const savedPhotos = localStorage.getItem('heritageParkPhotos')
    if (savedPhotos) {
      setPhotos(JSON.parse(savedPhotos))
    }
  }, [])

  const handleCapture = (photo: string) => {
    const updatedPhotos = [...photos, photo]
    setPhotos(updatedPhotos)
    localStorage.setItem('heritageParkPhotos', JSON.stringify(updatedPhotos))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-green-600 text-white py-4 px-4 shadow-md">
        <h1 className="text-xl font-bold">Heritage Park Explorer</h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        {currentPage === 'welcome' && <WelcomePage />}
        {currentPage === 'camera' && <CameraPage onCapture={handleCapture} />}
        {currentPage === 'gallery' && <GalleryPage photos={photos} />}
        {currentPage === 'audio' && <AudioGuidePage />}
      </main>
      <nav className="bg-white shadow-md">
        <ul className="flex">
          <li className="flex-1 py-2">
            <button onClick={() => setCurrentPage('welcome')} className="w-full flex flex-col items-center">
              <Home size={24} />
              <span className="text-xs mt-1">Home</span>
            </button>
          </li>
          <li className="flex-1 py-2">
            <button onClick={() => setCurrentPage('camera')} className="w-full flex flex-col items-center">
              <Camera size={24} />
              <span className="text-xs mt-1">Camera</span>
            </button>
          </li>
          <li className="flex-1 py-2">
            <button onClick={() => setCurrentPage('gallery')} className="w-full flex flex-col items-center">
              <Image size={24} />
              <span className="text-xs mt-1">Gallery</span>
            </button>
          </li>
          <li className="flex-1 py-2">
            <button onClick={() => setCurrentPage('audio')} className="w-full flex flex-col items-center">
              <Headphones size={24} />
              <span className="text-xs mt-1">Audio</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App