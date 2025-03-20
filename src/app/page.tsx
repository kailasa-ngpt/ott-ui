// This is a server component compatible with Next.js
import Image from "next/image";

export default function StreamingPlatform() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center text-xl font-bold">
          <span className="text-red-600 mr-2">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </span>
          MovieStream
        </div>
        
        <div className="hidden md:flex relative flex-1 max-w-md mx-4">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for movies, shows, etc." 
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-800 border-gray-700 border"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-800">
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

      {/* Hero Section */}
      <section className="relative h-96">
        <Image src="/api/placeholder/1600/900" alt="Featured Movie" width={1600} height={900} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-2">Rampage</h1>
          <p className="text-sm text-gray-300 mb-4 max-w-lg">Primatologist Davis Okoye shares an unshakable bond with George, an extraordinarily intelligent gorilla who has been in his care since birth.</p>
          <div className="flex space-x-3">
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-2 text-sm font-medium">
              <svg viewBox="0 0 24 24" width="16" height="16" className="mr-2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Play
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2 text-sm font-medium">
              <svg viewBox="0 0 24 24" width="16" height="16" className="mr-2" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              More Info
            </button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Trending Now</h2>
          <button className="bg-red-600 text-white text-xs px-4 py-1 rounded-md">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {/* Movie Cards */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/300/${450 + index}`} alt={`Movie ${index}`} width={300} height={450} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <svg viewBox="0 0 24 24" width="12" height="12" className="mr-1" stroke="currentColor" fill="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  {(7.5 + index / 10).toFixed(1)}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">Movie Title {index}</h3>
                <p className="text-xs text-gray-400">2023</p>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Movies Section */}
      <section className="px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Movies</h2>
          <a href="#" className="text-red-600 text-sm flex items-center">
            See all 
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/${200 + index * 10}/${300 + index * 10}`} alt={`Movie ${index}`} width={200 + index * 10} height={300 + index * 10} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <svg viewBox="0 0 24 24" width="12" height="12" className="mr-1" stroke="currentColor" fill="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  {(7.0 + index / 10).toFixed(1)}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">Movie Title {index}</h3>
                <p className="text-xs text-gray-400">2023</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Player Preview */}
      <section className="px-4 py-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full aspect-video bg-gray-900 relative">
            <Image src="/api/placeholder/1200/675" alt="Video Preview" width={1200} height={675} className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
            </div>
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
              <button className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <div className="w-1/3 h-full bg-red-600"></div>
            </div>
          </div>
          <div className="bg-gray-800 p-3">
            <h3 className="font-medium">Jurassic World: Fallen Kingdom</h3>
            <p className="text-sm text-gray-400">2023 • Action, Adventure, Sci-Fi</p>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Popular on MovieStream</h2>
          <a href="#" className="text-red-600 text-sm flex items-center">
            See all 
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <Image src={`/api/placeholder/${200 + index * 15}/${300 + index * 15}`} alt={`Movie ${index}`} width={200 + index * 15} height={300 + index * 15} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <svg viewBox="0 0 24 24" width="12" height="12" className="mr-1" stroke="currentColor" fill="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  {(7.8 + index / 10).toFixed(1)}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">Movie Title {index}</h3>
                <p className="text-xs text-gray-400">2023</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-gray-800 border-t py-6 px-4 text-center mt-8">
        <div className="flex justify-center flex-wrap mb-4">
          <a href="#" className="mx-3 text-sm text-gray-400 hover:text-red-600">About</a>
          <a href="#" className="mx-3 text-sm text-gray-400 hover:text-red-600">Terms</a>
          <a href="#" className="mx-3 text-sm text-gray-400 hover:text-red-600">Privacy</a>
          <a href="#" className="mx-3 text-sm text-gray-400 hover:text-red-600">Help Center</a>
        </div>
        <p className="text-sm text-gray-500">© 2025 MovieStream. All rights reserved.</p>
      </footer>
    </div>
  );
}