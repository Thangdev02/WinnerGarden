const Navigation = () => {
    return (
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold drop-shadow-lg">Plantique</span>
            </div>
  
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium drop-shadow-lg"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium drop-shadow-lg"
              >
                About
              </a>
              <a
                href="#plants"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium drop-shadow-lg"
              >
                Plants
              </a>
              <a
                href="#services"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium drop-shadow-lg"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium drop-shadow-lg"
              >
                Contact
              </a>
            </div>
  
            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="bg-yellow-500/90 backdrop-blur-sm text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg">
                Get Started
              </button>
  
              {/* Mobile menu button */}
              <button className="md:hidden text-white hover:text-yellow-400 drop-shadow-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-green-800/80 backdrop-blur-sm rounded-lg mt-2">
              <a href="#home" className="block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium">
                Home
              </a>
              <a href="#about" className="block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium">
                About
              </a>
              <a href="#plants" className="block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium">
                Plants
              </a>
              <a href="#services" className="block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium">
                Services
              </a>
              <a href="#contact" className="block text-white hover:text-yellow-400 px-3 py-2 rounded-md font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navigation
  