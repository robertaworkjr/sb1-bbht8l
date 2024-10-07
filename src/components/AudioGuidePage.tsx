import React, { useState, useEffect } from 'react'
import { Play, Pause, Info } from 'lucide-react'

const audioGuides = [
  { id: 1, title: "Park History", duration: "5:30" },
  { id: 2, title: "Wildlife Guide", duration: "4:45" },
  { id: 3, title: "Famous Landmarks", duration: "6:15" },
  { id: 4, title: "Nature Trail Tour", duration: "7:00" },
  { id: 5, title: "Vision for the Park's Future", duration: "5:45" },
  { id: 6, title: "Hidden Gems", duration: "8:15" },
]

const AudioGuidePage: React.FC = () => {
  const [playingGuide, setPlayingGuide] = useState<number | null>(null)
  const [progress, setProgress] = useState<Record<number, number>>({})
  const [selectedGuide, setSelectedGuide] = useState<number | null>(null)

  useEffect(() => {
    const savedProgress = localStorage.getItem('heritageParkAudioProgress')
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const togglePlay = (guideId: number) => {
    if (playingGuide === guideId) {
      setPlayingGuide(null)
    } else {
      setPlayingGuide(guideId)
      const updatedProgress = { ...progress, [guideId]: progress[guideId] || 0 }
      setProgress(updatedProgress)
      localStorage.setItem('heritageParkAudioProgress', JSON.stringify(updatedProgress))
    }
  }

  const handleInfoClick = (guideId: number) => {
    setSelectedGuide(selectedGuide === guideId ? null : guideId)
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-green-800">Audio Guides</h2>
        <p className="mb-4 text-gray-600">Discover the secrets and stories of Princes Park:</p>
        <ul className="space-y-4">
          {audioGuides.map((guide) => (
            <li key={guide.id} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="font-medium text-green-700">{guide.title}</h3>
                  <p className="text-sm text-gray-500">{guide.duration}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 rounded-full bg-blue-500 text-white"
                    onClick={() => handleInfoClick(guide.id)}
                  >
                    <Info size={20} />
                  </button>
                  <button 
                    className={`p-2 rounded-full ${playingGuide === guide.id ? 'bg-red-500' : 'bg-green-500'} text-white`}
                    onClick={() => togglePlay(guide.id)}
                  >
                    {playingGuide === guide.id ? <Pause size={20} /> : <Play size={20} />}
                  </button>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${progress[guide.id] || 0}%` }}
                ></div>
              </div>
              {selectedGuide === guide.id && (
                <div className="mt-4 p-3 bg-blue-50 rounded-md">
                  {guide.id === 6 && (
                    <>
                      <p className="text-sm text-gray-700 mb-2">
                        Discover the hidden treasures of Princes Park! This guide reveals lesser-known features like specific garden areas and benches with fascinating histories.
                      </p>
                      <img 
                        src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Hidden Gem in Princes Park" 
                        className="w-full rounded-md mb-2"
                      />
                      <p className="text-xs text-gray-500 italic">
                        Explore unique spots often overlooked by visitors. Check the park map for these hidden gems!
                      </p>
                    </>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AudioGuidePage