"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getUsers, registerUser } from "../services/authService"
import Cookies from "js-cookie"

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ name: "", email: "", password: "" })
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  if (!isOpen) return null

  // Xử lý input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Xử lý Login
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const users = await getUsers()
      const user = users.find(
        (u) => u.email === formData.email && u.password === formData.password
      )
      if (user) {
        Cookies.set("user", JSON.stringify(user), { expires: 7 })
        setError("")
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
          onLoginSuccess(user)
          onClose()
        }, 2000)
      } else {
        setError("Sai email hoặc mật khẩu!")
      }
    } catch (err) {
      setError("Lỗi server khi đăng nhập!")
      console.error(err)
    }
  }

  // Xử lý Register
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phone: "",
        address: "",
        orders: [],
      }
      await registerUser(newUser)
      Cookies.set("user", JSON.stringify(newUser), { expires: 7 })
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onLoginSuccess(newUser)
        onClose()
      }, 2000)
    } catch (err) {
      setError("Lỗi server khi đăng ký!")
      console.error(err)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          {/* Modal container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative flex w-[1000px] h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-black"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-white bg-red-600/80 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700 z-20"
            >
              ✕
            </button>

            {/* === Background Image with Animation === */}
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: isLogin ? "100%" : "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-y-0 left-0 w-1/2 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://orchideeen-shop.nl/cdn/shop/collections/bryn-gibson-_Ju8SxTzA-o-unsplash_4b9e6add-a1ff-4cb1-92b3-3ea10c879419.jpg?v=1708598254')",
                }}
              />
            </AnimatePresence>

            {/* === Form Overlay === */}
            <AnimatePresence>
              {isLogin ? (
                <motion.div
                  key="login"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-black/90 p-12 flex flex-col justify-center z-10 text-white"
                >
                  <h2 className="text-3xl font-bold mb-6">Đăng nhập</h2>
                  <form className="space-y-4" onSubmit={handleLogin}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Mật Khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="relative w-full py-3 rounded-lg overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://t4.ftcdn.net/jpg/06/35/30/49/360_F_635304942_9QK2FiRYpk7FbCFxS1NR2heuFzwST7jD.jpg')",
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>
                      <span className="relative text-white font-semibold">Đăng nhập</span>
                    </button>
                  </form>
                  <p className="mt-6 text-center text-gray-400">
                    Chưa có tài khoản?{" "}
                    <button onClick={() => setIsLogin(false)} className="text-green-400 hover:underline">
                      Đăng ký ngay
                    </button>
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="signup"
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  className="absolute inset-y-0 right-0 w-1/2 bg-black/90 p-12 flex flex-col justify-center z-10 text-white"
                >
                  <h2 className="text-3xl font-bold mb-6">Đăng ký</h2>
                  <form className="space-y-4" onSubmit={handleRegister}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Họ & Tên"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Mật Khẩu"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button type="submit" className="relative w-full py-3 rounded-lg overflow-hidden group">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://freerangestock.com/sample/179070/dense-green-monstera-leaves-plant-foliage-creating-lush-background.jpg')",
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>
                      <span className="relative text-white font-semibold">Đăng ký</span>
                    </button>
                  </form>
                  <p className="mt-6 text-center text-gray-400">
                    Đã có tài khoản?{" "}
                    <button onClick={() => setIsLogin(true)} className="text-green-400 hover:underline">
                      Đăng nhập
                    </button>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ✅ Success Toast */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="fixed top-10 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
              >
                ✅ {isLogin ? "Đăng nhập" : "Đăng ký"} thành công!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default AuthModal
