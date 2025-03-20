import { useState } from 'react';
import { Play, Info, Search, Bell, Moon, ChevronRight, Heart, Clock, Star } from 'lucide-react';

export default function StreamingPlatform() {
  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md px-4 py-3 flex items-center justify-between">
        <div className="flex items-center text-xl font-bold">
          <span className="text-red-600 mr-2">
            <i className="fas fa-play-circle"></i>
          </span>
          MovieStream
        </div>
        
        <div className="hidden md:flex relative flex-1 max-w-md mx-4">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={16} />
          </div>
          <input 
            type="text" 
            placeholder="Search for movies, shows, etc." 
            className="w-full py-2 pl-10 pr-4 rounded-full bg-gray-800 border-gray-700 border"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-800">
            <Moon size={18} />
          </button>
          <button>
            <Bell size={18} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img src="/api/placeholder/100/100" alt="User Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96">
        <img src="/api/placeholder/1600/900" alt="Featured Movie" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-4xl font-bold mb-2">Rampage</h1>
          <p className="text-sm text-gray-300 mb-4 max-w-lg">Primatologist Davis Okoye shares an unshakable bond with George, an extraordinarily intelligent gorilla who has been in his care since birth.</p>
          <div className="flex space-x-3">
            <button className="flex items-center bg-red-600 hover:bg-red-700 text-white rounded-md px-6 py-2 text-sm font-medium">
              <Play size={16} className="mr-2" /> Play
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded-md px-4 py-2 text-sm font-medium">
              <Info size={16} className="mr-2" /> More Info
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
          {[
            { title: "Avengers: Infinity War", year: "2018", rating: 8.4 },
            { title: "Black Panther", year: "2018", rating: 7.3 },
            { title: "Deadpool 2", year: "2018", rating: 7.7 },
            { title: "Jurassic World", year: "2018", rating: 6.5 },
            { title: "Aquaman", year: "2018", rating: 6.9 },
            { title: "Venom", year: "2018", rating: 6.7 }
          ].map((movie, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <img src={`/api/placeholder/300/${450 + index}`} alt={movie.title} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Play size={20} />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <Star size={12} className="mr-1" /> {movie.rating}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.year}</p>
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
            See all <ChevronRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {[
            { title: "Aquaman", year: "2018", rating: 6.9 },
            { title: "The Meg", year: "2018", rating: 5.6 },
            { title: "Venom", year: "2018", rating: 6.7 },
            { title: "Incredibles 2", year: "2018", rating: 7.6 },
            { title: "The Predator", year: "2018", rating: 5.3 },
            { title: "Solo", year: "2018", rating: 6.9 }
          ].map((movie, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <img src={`/api/placeholder/${200 + index * 10}/${300 + index * 10}`} alt={movie.title} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Play size={20} />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <Star size={12} className="mr-1" /> {movie.rating}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Player Preview */}
      <section className="px-4 py-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full aspect-video bg-gray-900 relative">
            <img src="/api/placeholder/1200/675" alt="Video Preview" className="w-full h-full object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
                <Play size={32} />
              </button>
            </div>
            <div className="absolute top-3 right-3 flex space-x-2">
              <button className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Heart size={16} />
              </button>
              <button className="bg-gray-800/70 hover:bg-gray-700/70 text-white rounded-full w-8 h-8 flex items-center justify-center">
                <Clock size={16} />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
              <div className="w-1/3 h-full bg-red-600"></div>
            </div>
          </div>
          <div className="bg-gray-800 p-3">
            <h3 className="font-medium">Jurassic World: Fallen Kingdom</h3>
            <p className="text-sm text-gray-400">2018 • Action, Adventure, Sci-Fi</p>
          </div>
        </div>
      </section>

      {/* Popular Section */}
      <section className="px-4 py-3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Popular on MovieStream</h2>
          <a href="#" className="text-red-600 text-sm flex items-center">
            See all <ChevronRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {[
            { title: "A Quiet Place", year: "2018", rating: 7.5 },
            { title: "Ready Player One", year: "2018", rating: 7.4 },
            { title: "Black Panther", year: "2018", rating: 7.3 },
            { title: "Thor: Ragnarok", year: "2017", rating: 7.9 },
            { title: "Deadpool 2", year: "2018", rating: 7.7 },
            { title: "Mission: Impossible", year: "2018", rating: 7.7 }
          ].map((movie, index) => (
            <div key={index} className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
              <div className="relative">
                <img src={`/api/placeholder/${200 + index * 15}/${300 + index * 15}`} alt={movie.title} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Play size={20} />
                  </button>
                </div>
                <div className="absolute top-2 right-2 bg-black/50 text-yellow-500 text-xs p-1 rounded flex items-center">
                  <Star size={12} className="mr-1" /> {movie.rating}
                </div>
              </div>
              <div className="p-2">
                <h3 className="font-medium text-sm truncate">{movie.title}</h3>
                <p className="text-xs text-gray-400">{movie.year}</p>
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
        <div className="flex justify-center mb-4">
          {['facebook', 'twitter', 'instagram', 'youtube'].map((social, index) => (
            <a key={index} href="#" className="mx-2 text-gray-400 hover:text-red-600">
              <i className={`fab fa-${social}`}></i>
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-500">© 2025 MovieStream. All rights reserved.</p>
      </footer>
    </div>
  );
}