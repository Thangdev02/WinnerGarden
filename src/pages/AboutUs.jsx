"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

const AboutUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showVideo, setShowVideo] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", form)
    alert("Cảm ơn bạn đã liên hệ!")
    setForm({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <div
      className="text-white min-h-screen"
      style={{
        fontFamily: "LibertinusSerif",
        background: "linear-gradient(to bottom, #000000, #061412)",
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative h-[100vh] flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20230606/original/pngtree-large-monstera-plant-in-a-dark-background-picture-image_2879359.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          variants={fadeInUp}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Winner Garden
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Biến văn phòng của bạn thành không gian xanh đầy sức sống với đội
            ngũ thiết kế cảnh quan chuyên nghiệp.
          </p>
          <Link to="/product">
            <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold">
              Xem Catalog
            </button>
          </Link>
        </motion.div>
      </motion.section>

      {/* Garden Owner Section */}
      <section className="py-20 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="flex justify-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/044/245/771/small_2x/smiling-gardener-with-a-plant-and-garden-trowel-on-transparent-background-png.png"
            alt="Chủ vườn"
            className="rounded-2xl shadow-lg max-h-[450px] object-cover"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-6">
            Eco Garden – Người gieo mầm cho không gian xanh của bạn
          </h2>
          <p className="text-gray-300 mb-8">
            Với hơn 10 năm kinh nghiệm, chúng tôi mang đến những giải pháp cây
            xanh văn phòng bền vững, giúp bạn sống khoẻ mạnh hơn mỗi ngày mà
            không đánh mất sự tiện nghi và thẩm mỹ.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { num: "1", text: "Cây xanh tự nhiên 100%" },
              { num: "2", text: "Giàu vitamin & năng lượng tích cực" },
              { num: "3", text: "Tôn vinh lối sống xanh" },
              { num: "4", text: "Mang lại cảm giác thư thái" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition"
              >
                <div className="bg-green-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {item.num}
                </div>
                <p className="text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Video + Stats Section */}
      <motion.section
        className="py-16 container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230605/pngtree-large-monstera-lusitana-plant-in-sunlight-image_2876189.jpg"
            alt="Office greenery"
            className="w-full h-82 object-cover"
          />
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white/80 w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 text-center lg:text-left">
          <div>
            <p className="text-4xl font-bold text-green-400">4+</p>
            <p className="mt-2">Năm kinh nghiệm trồng cây</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">200+</p>
            <p className="mt-2">Loại cây</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400">99%</p>
            <p className="mt-2">Khách hàng hài lòng</p>
          </div>
        </div>
      </motion.section>

      {/* Reasons Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-10">
          4 Lý do chọn chúng tôi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Chất lượng",
              desc: "Đảm bảo chất lượng cao cho từng chậu cây.",
            },
            {
              title: "Tốc độ",
              desc: "Giao hàng nhanh chống, an toàn.",
            },
            {
              title: "Đa dạng",
              desc: "Cung cấp nhiều loại cây và phong cách thiết kế.",
            },
            {
              title: "Dễ tiếp cận",
              desc: "Hỗ trợ tư vấn và giao hàng trên toàn quốc.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl shadow-lg hover:bg-gray-700 transition"
            >
              <p className="text-5xl font-bold text-green-500 mb-4">
                {idx + 1}
              </p>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Liên hệ với chúng tôi
          </h2>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-8 rounded-xl space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Họ và tên"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Nội dung"
              rows="4"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
            >
              Gửi
            </button>
          </form>
        </div>
      </motion.section>

      {/* Google Map Section */}
      <motion.section
        className="py-16 container mx-auto px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-center mb-8">
          Địa chỉ của chúng tôi
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.502760600056!2d106.70042391533545!3d10.776889362122702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f480a962f9d%3A0xe5d2a2dd1d8ef6e4!2zU8OibiBUaOG6oWNoIE5o4bqldCwgUXXhuqNuIDE!5e0!3m2!1svi!2s!4v1705654789942!5m2!1svi!2s"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[400px] border-0"
          ></iframe>
        </div>
      </motion.section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl aspect-video">
            <video
              src="/assets/videos/videoAbout.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-3xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutUs
