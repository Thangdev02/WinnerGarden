"use client"

import { useState, useEffect } from "react"

const plantsData = [
  {
    id: 1,
    image: "https://greenboog.com/wp-content/uploads/2023/07/monstera-mint-variegated.jpeg",
    subtitle: "Monstera",
    title: "Monstera Mint Deliciosa Borsigiana Variegata",
    buttonText: "Mua ngay",
  },
  {
    id: 2,
    image: "https://www.rareplantfairy.com/cdn/shop/files/DSC07144.jpg?v=1718371342",
    subtitle: "Black Velvet Pink Variegated",
    title: "Alocasia 'Pink Velvet",
    buttonText: "Xem bộ sưu tập",
  },
  {
    id: 3,
    image: "https://soikiengla.com/wp-content/uploads/2022/03/Suu-tam-4.jpg",
    subtitle: "Philodendron",
    title: "Philodendron Billietiae Variegated",
    buttonText: "Xem chi tiết",
  },
]

const PlantSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === plantsData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? plantsData.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentSlide])

  const { subtitle, title, buttonText, image } = plantsData[currentSlide]

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover z-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>

      {/* Slide Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center space-y-6">
        <p className="text-white text-sm uppercase tracking-wider">{subtitle}</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h2>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md">
          {buttonText}
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-20 focus:outline-none focus:ring-2 focus:ring-green-500"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {plantsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-green-600" : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default PlantSlider
