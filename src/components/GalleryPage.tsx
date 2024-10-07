import React from 'react'

interface GalleryPageProps {
  photos: string[]
}

const GalleryPage: React.FC<GalleryPageProps> = ({ photos }) => {
  // Array of 10 random placeholder image URLs
  const randomPhotos = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
    'https://picsum.photos/200/300?random=4',
    'https://picsum.photos/200/300?random=5',
    'https://picsum.photos/200/300?random=6',
    'https://picsum.photos/200/300?random=7',
    'https://picsum.photos/200/300?random=8',
    'https://picsum.photos/200/300?random=9',
    'https://picsum.photos/200/300?random=10'
  ];

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-bold mb-4 text-green-800">Your Park Memories</h2>
        {photos.length === 0 ? (
          <p className="text-center text-gray-500">No photos captured yet. Start by taking some pictures in the park!</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {photos.map((photo, index) => (
              <img key={index} src={photo} alt={`Captured ${index + 1}`} className="w-full rounded-lg shadow-sm" />
            ))}
          </div>
        )}
        {/* Display random images */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {randomPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`Random ${index + 1}`} className="w-full rounded-lg shadow-sm" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
