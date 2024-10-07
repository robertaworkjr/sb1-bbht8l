import React from 'react'

const WelcomePage: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <img 
          src="https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Princes Park" 
          className="w-full rounded-lg mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-green-800">Welcome to Princes Park</h2>
        <p className="text-gray-600 mb-4">
          A cherished green oasis in the heart of Liverpool, steeped in over 180 years of history. Designed in the 1840s by Sir Joseph Paxton, the park was one of the first in England to be created for public enjoyment. Known for its stunning Victorian landscape, winding pathways, tranquil boating lake, and iconic landmarks, Princes Park remains a place where nature, history, and community intertwine. As you explore the park, you'll discover its rich heritage, vibrant wildlife, and its role as a cultural hub for generations of local residents.
        </p>
        <h3 className="text-lg font-semibold mb-2 text-green-700">Explore Princes Park</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Capture memories of the Victorian landscape</li>
          <li>Listen to audio guides about the park's 180-year history</li>
          <li>Discover hidden gems and iconic landmarks</li>
          <li>Observe the vibrant local wildlife</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2 text-green-700">The Future of Princes Park</h3>
        <p className="text-gray-600 mb-4">
          Princes Park continues to evolve while preserving its rich heritage. The park's future includes exciting developments and community-driven initiatives:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>New conservation projects to protect and enhance biodiversity</li>
          <li>Improved accessibility features for all visitors</li>
          <li>Expanded community gardens and educational programs</li>
          <li>Restoration of historical features and monuments</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Learn more about these future developments in our audio guide "Vision for the Park's Future" and explore the interactive map for upcoming points of interest.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
          alt="Future Park Development" 
          className="w-full rounded-lg mb-4"
        />
        <p className="text-sm italic text-gray-500 text-center">
          Start your journey through Princes Park using the navigation bar below!
        </p>
      </div>
    </div>
  )
}

export default WelcomePage