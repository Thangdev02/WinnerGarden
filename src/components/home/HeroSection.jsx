import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section style={{ fontFamily: "LibertinusSerif" }} className="relative min-h-screen overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Extended gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tiêu đề */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-wide"
          >
            Bán cây vì đam mê,
            <br />
            không có lời
          </motion.h1>

          {/* Mô tả */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            WinnerGarden có các dòng Monstera, Anthurium, Alocasia, Philodendron và nhiều loại cây cảnh đẹp khác
          </motion.p>

          {/* Nút */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-16"
          >
            <Link to="/product">
              <button className="bg-white text-black px-8 py-4 rounded-sm font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg uppercase tracking-wider">
                Xem Bộ Sưu Tập
              </button>
            </Link>
            <Link to="/about">
              <button className="bg-transparent border border-white text-white px-8 py-4 rounded-sm font-medium hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider">
                Liên Hệ Ngay
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
