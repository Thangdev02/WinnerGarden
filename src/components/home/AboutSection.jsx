import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const AboutSection = () => {
  return (
    <section
      style={{
        fontFamily: "LibertinusSerif",
        background: "linear-gradient(to bottom, #000000, #061412)",
        padding: "10% 0",
      }}
      className="relative"
    >
      <div className="container mx-auto px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Main Heading */}
            <motion.h2
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-light text-white leading-tight"
            >
              Chúng tôi cung cấp những
              <br />
              <span className="text-green-300">cây cảnh chất lượng cao</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/80 text-lg leading-relaxed"
            >
              WinnerGarden chuyên cung cấp các loại cây cảnh nhập khẩu và trong
              nước với chất lượng tốt nhất. Chúng tôi cam kết mang đến cho khách
              hàng những sản phẩm tươi xanh, khỏe mạnh.
            </motion.p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                {
                  title: "Cây cảnh chất lượng cao",
                  desc: "Tất cả cây được chọn lọc kỹ càng, đảm bảo sức khỏe tốt",
                },
                {
                  title: "Tư vấn chăm sóc miễn phí",
                  desc: "Đội ngũ chuyên gia sẵn sàng hỗ trợ khách hàng 24/7",
                },
                {
                  title: "Giao hàng tận nơi",
                  desc: "Dịch vụ giao hàng nhanh chóng, cẩn thận trên toàn quốc",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-4"
                  variants={fadeInUp}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -bottom-80 right-0 z-20">
              <img
                src="https://me-greeneryexport.com/wp-content/uploads/2024/09/MagicEraser_5670927_015119.png"
                alt="Beautiful tropical plants"
                className="w-84 h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-300/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
