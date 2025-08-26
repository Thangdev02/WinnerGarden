"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getUsers, registerUser } from "../services/authService"
import Cookies from "js-cookie"
import { auth, signInWithGoogle } from "../../firebase"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

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

  // Xử lý Login thường
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
  // Xử lý Register
const handleRegister = async (e) => {
    e.preventDefault()
    try {
      // ✅ Tạo user trong Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      )
      const user = userCredential.user
  
      // ✅ Gửi email xác thực
      await sendEmailVerification(user)
  
      // ✅ Lưu thêm vào db.json
      const newUser = {
        id: user.uid, // lấy UID của Firebase làm id
        name: formData.name,
        email: formData.email,
        password: formData.password, // ⚠️ không an toàn (nên hash hoặc bỏ đi)
        phone: "",
        address: "",
        orders: []
      }
      await registerUser(newUser) // POST vào JSON Server
  
      Cookies.set("user", JSON.stringify(newUser), { expires: 7 })
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onLoginSuccess(newUser)
        onClose()
      }, 2000)
    } catch (err) {
      setError("Lỗi khi đăng ký tài khoản Firebase!")
      console.error(err)
    }
  }
  

  // ✅ Xử lý Login Google
  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle()
      const newUser = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phone: "",
        address: "",
        orders: [],
      }
      Cookies.set("user", JSON.stringify(newUser), { expires: 7 })
      setSuccess(true)
      setTimeout(() => {
        setSuccess(false)
        onLoginSuccess(newUser)
        onClose()
      }, 2000)
    } catch (err) {
      setError("Lỗi đăng nhập Google!")
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

            {/* === Background Image === */}
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
                  style={{fontFamily: "LibertinusSerif"}}
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
                    <button type="submit" className="w-full py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700">
                      Đăng nhập
                    </button>
                  </form>

                  {/* ✅ Nút Login Google */}
                  <button
                    onClick={handleGoogleLogin}
                    className="mt-4 w-full py-3  rounded-lg font-semibold hover:bg-white hover:text-yellow-400"
                    style={{display: "flex", alignItems: "center", justifyContent: "center",gap:'0.5rem', background:'url("https://www.epicgardening.com/wp-content/uploads/2023/09/bunch-of-Anthurium-crystallinum.jpeg', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
                  >
                    Đăng nhập bằng 
                    <img style={{width: "30px", height: "30px"}} src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"/>

                  </button>

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
                  style={{fontFamily: "LibertinusSerif"}}

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
                    <button type="submit" className="w-full py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700">
                      Đăng ký
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
