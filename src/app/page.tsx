"use client";

import Image from "next/image";

export default function NithyanandaTV() {
  return (
    <div className="min-h-screen bg-white text-[#1a234d]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center text-xl font-bold">
          <span className="text-orange-500 mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
              <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .4.8l3 2.5a1 1 0 0 0 1.3-1.5L13 12.2V7a1 1 0 0 0-1-1z"></path>
            </svg>
          </span>
          Nithyananda TV
        </div>
        
        {/* Desktop search */}
        <div className="hidden md:flex relative flex-1 max-w-md mx-4">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for discourses, meditations, etc." 
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-100 border-gray-200 border text-[#1a234d]"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Mobile search button */}
          <button className="md:hidden p-2 rounded-full bg-gray-100">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          <button className="p-2 rounded-full bg-gray-100">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <Image src="/api/placeholder/100/100" alt="User Profile" width={32} height={32} className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Hero Section - Slider */}
      <section className="mb-8 relative h-96">
        <div className="relative w-full h-full">
          <Image src="/api/placeholder/1200/500" alt="Featured Content" width={1200} height={500} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Manifesting Powers</h2>
            <p className="text-sm md:text-base mb-3 max-w-2xl">Explore ancient yogic techniques and spiritual practices to awaken the divine powers (shaktis) within you through Paramashiva&apos;s sacred knowledge.</p>
            <div className="flex space-x-3">
              <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2 text-sm font-medium">
                <svg viewBox="0 0 24 24" width="16" height="16" className="mr-2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch
              </button>
              <button className="flex items-center bg-white/20 hover:bg-white/30 backdrop-blur text-white rounded-full px-4 py-2 text-sm font-medium">
                <svg viewBox="0 0 24 24" width="16" height="16" className="mr-2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                Details
              </button>
            </div>
          </div>

          {/* Slider pagination */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <button key={i} className={`h-2 rounded-full ${i === 1 ? 'w-8 bg-orange-500' : 'w-2 bg-gray-400'}`}></button>
            ))}
          </div>

          {/* Slider arrows */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Section Selectors - Like Image 1 */}
      <section className="px-4 mb-6">
        <div className="flex justify-between items-center border-b border-gray-200 relative">
          {['Trends Now', 'Popular', 'Premieres', 'Recently Added'].map((section, index) => (
            <div key={index} className="relative pb-2 px-2">
              <div className={`whitespace-nowrap ${index === 0 ? 'font-bold text-lg' : 'text-base text-gray-500'} cursor-pointer`}>
                {section}
              </div>
              {index === 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-t-full"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Filter Buttons - like Image 2 */}
      <section className="px-4 mb-6">
        <div className="flex space-x-3 overflow-x-auto pb-2 custom-scrollbar">
          {['New Releases', 'Top Trending', 'Your Favorites'].map((filter, index) => (
            <div key={index} className={`px-6 py-2 rounded-full cursor-pointer ${index === 0 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-[#1a234d]'} whitespace-nowrap`}>
              {filter}
            </div>
          ))}
        </div>
      </section>

      {/* Topics - Scrollable Row */}
      <section className="px-4 mb-8">
        <div className="flex space-x-4 overflow-x-auto pb-2 custom-scrollbar">
          {['Discourses', 'Satsangs', 'Meditations', 'Yoga', 'Devotion', 'Mantras', 'Healing', 'Events'].map((topic, index) => (
            <div key={index} className={`px-4 py-2 rounded-full ${index === 0 ? 'text-orange-500 font-bold text-lg' : 'text-[#1a234d]'} whitespace-nowrap cursor-pointer`}>
              {topic}
              {index === 0 && (
                <div className="h-1 bg-orange-500 rounded-full mt-1 mx-auto w-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Content Grid - No Headers */}
      <section className="px-4 mb-8">
        {/* First row */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/300/${450 + item}`} alt="Content" width={300} height={450 + item} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">Yogic Powers {item}</h3>
                <p className="text-xs text-gray-500">Spiritual • 2023</p>
              </div>
            </div>
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/300/${450 + item * 2}`} alt="Content" width={300} height={450 + item * 2} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">Kundalini Yoga {item}</h3>
                <p className="text-xs text-gray-500">Session {item} • {item * 10}m</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Streams - Horizontal Rectangles */}
      <section className="px-4 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg md:text-xl font-bold">Live Now</h2>
          <a href="#" className="text-orange-500 text-sm flex items-center">
            See all 
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>

        {/* Grid of horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/${400 + item}/${225 + item}`} alt="Live Stream" width={400 + item} height={225 + item} className="w-full aspect-video object-cover" />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-white mr-1"></span>
                  LIVE
                </div>
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                  {item * 100 + 50} viewers
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium">Morning Discourse {item}</h3>
                <p className="text-xs text-gray-500 mt-1">with Swamiji • Started {item} hour{item !== 1 ? 's' : ''} ago</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Playlists - Scrollable Rows with Peek */}
      <section className="px-4 mb-8">
        {/* First Playlist */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold">Meditation Techniques</h2>
            <a href="#" className="text-orange-500 text-sm flex items-center">
              See all 
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 custom-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="min-w-[140px] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer flex-shrink-0">
                <div className="relative">
                  <Image src={`/api/placeholder/180/${250 + item}`} alt="Playlist Item" width={180} height={250 + item} className="w-full aspect-[2/3] object-cover" />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">Meditation {item}</h3>
                  <p className="text-xs text-gray-500">{item * 5 + 10} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Playlist */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold">Sacred Teachings</h2>
            <a href="#" className="text-orange-500 text-sm flex items-center">
              See all 
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 custom-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="min-w-[140px] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer flex-shrink-0">
                <div className="relative">
                  <Image src={`/api/placeholder/180/${250 + item * 2}`} alt="Playlist Item" width={180} height={250 + item * 2} className="w-full aspect-[2/3] object-cover" />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">Teaching {item}</h3>
                  <p className="text-xs text-gray-500">{item * 10 + 15} min</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Playlist */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-bold">Yoga Series</h2>
            <a href="#" className="text-orange-500 text-sm flex items-center">
              See all 
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4 custom-scrollbar">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="min-w-[140px] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer flex-shrink-0">
                <div className="relative">
                  <Image src={`/api/placeholder/180/${250 + item * 3}`} alt="Playlist Item" width={180} height={250 + item * 3} className="w-full aspect-[2/3] object-cover" />
                </div>
                <div className="p-2">
                  <h3 className="font-medium text-sm truncate">Yoga Series {item}</h3>
                  <p className="text-xs text-gray-500">{item} episodes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-gray-200 border-t py-6 px-4 text-center">
        <p className="text-sm text-gray-500">© 2025 Nithyananda TV. All rights reserved.</p>
      </footer>
    </div>
  );
}