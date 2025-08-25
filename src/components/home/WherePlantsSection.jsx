import React from "react";
import { motion } from "framer-motion";

const WherePlantsSection = () => {
  return (
    <section
      style={{ fontFamily: "LibertinusSerif", backgroundColor: "#061412" }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1635205266897-521808278503?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People in greenhouse with plants"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Experience Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 text-white p-6 rounded-2xl shadow-xl"
                style={{ backgroundColor: "#3f5a36" }}
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-1">2+</div>
                  <div className="text-sm font-medium">Năm Kinh Nghiệm</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white leading-tight">
              Nơi mà cây được chúng tôi
              <br />
              Chăm sóc.
            </h2>

            <p className="text-white/80 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors duration-300">
              Đọc thêm
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WherePlantsSection;
