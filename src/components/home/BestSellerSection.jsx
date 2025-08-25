import React from "react";
import { motion } from "framer-motion";

const BestSellerSection = () => {
  const plants = [
    {
      id: 1,
      name: "Anthurium ",
      image:
        "https://curious-plants.com/cdn/shop/files/Bannerfoto.jpg?v=1710880503&width=3840",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Monstera Variegata Albo",
      image:
        "https://media.istockphoto.com/id/1363036158/photo/monstera-albo-monstera-deliciosa-variegated-monstera-background-monstera-deliciosa-albo.jpg?s=612x612&w=0&k=20&c=4mKRprGVTpjk-1Y90wgdrulqJRjnO0VxahEykpnHvQI=",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      featured: true,
    },
    {
      id: 3,
      name: "Philodendron Florida Ghost",
      image:
        "https://www.ormbunker.se/cdn/shop/files/florda_ghost_in_pot.jpg?v=1734280689&width=1946",
      rating: 5,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1 ">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-400 ml-2">({rating}.0)</span>
      </div>
    );
  };

  return (
    <section
      style={{
        fontFamily: "LibertinusSerif",
        backgroundColor: "#061412",
        padding: "10% 0",
      }}
    >
      <div className="container mx-auto px-4 ">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Các dòng cây bán chạy
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Đây là 1 số dòng cây bán chạy có số lượng người mua nhiều và được
            yêu thích nhất
          </p>
        </motion.div>

        {/* Plants Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plants.map((plant, i) => (
            <motion.div
              key={plant.id}
              className={`hover:scale-105 relative rounded-2xl shadow-xl overflow-hidden h-96 ${
                plant.featured ? "md:scale-110 md:-mt-8" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${plant.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Heart Icon */}
              <button className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="space-y-3">
                  <StarRating rating={plant.rating} />
                  <h3 className="text-xl font-semibold text-white">
                    {plant.name}
                  </h3>
                  <p className="text-white/80 text-sm">{plant.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
