import React, { useState, useRef } from 'react'

interface CameraPageProps {
  onCapture: (photo: string) => void
}

const CameraPage: React.FC<CameraPageProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isCameraActive, setIsCameraActive] = useState(false)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsCameraActive(true)
      }
    } catch (err) {
      console.error("Error accessing the camera", err)
    }
  }

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d')
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
        const photoData = canvasRef.current.toDataURL('image/jpeg')
        onCapture(photoData)
      }
    }
  }

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-green-800">Capture Park Memories</h2>
        {isCameraActive ? (
          <video ref={videoRef} autoPlay playsInline className="w-full mb-4 rounded-lg" />
        ) : (
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center mb-4 rounded-lg">
            <p className="text-gray-500">Camera preview will appear here</p>
          </div>
        )}
        <canvas ref={canvasRef} style={{ display: 'none' }} width={640} height={480} />
        <div className="flex justify-center">
          {!isCameraActive ? (
            <button onClick={startCamera} className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md">
              Start Camera
            </button>
          ) : (
            <button onClick={capturePhoto} className="bg-green-500 text-white px-4 py-2 rounded-full shadow-md">
              Capture
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CameraPage