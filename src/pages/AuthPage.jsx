"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const AuthModal = ({ isOpen, onClose }) => {
    const [isLogin, setIsLogin] = useState(true)

    if (!isOpen) return null

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
                                    backgroundImage: "url('https://orchideeen-shop.nl/cdn/shop/collections/bryn-gibson-_Ju8SxTzA-o-unsplash_4b9e6add-a1ff-4cb1-92b3-3ea10c879419.jpg?v=1708598254')"
                                }}
                            />

                        </AnimatePresence>


                        {/* === Form Overlay === */}
                        <AnimatePresence >
                            {isLogin ? (
                                <motion.div
                                    key="login"
                                    initial={{ x: "-100%", opacity: 0 }}
                                    animate={{ x: "0%", opacity: 1 }}
                                    exit={{ x: "100%", opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    style={{ fontFamily: "LibertinusSerif" }}
                                    className="absolute inset-y-0 left-0 w-1/2 bg-black/90 p-12 flex flex-col justify-center z-10 text-white"
                                >
                                    <h2 className="text-3xl font-bold mb-6">Đăng nhập</h2>
                                    <form className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Mật Khẩu"
                                            className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                                        />
                                        <button
                                            className="relative w-full py-3 rounded-lg overflow-hidden group"
                                        >
                                            {/* Hình nền */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center"
                                                style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/06/35/30/49/360_F_635304942_9QK2FiRYpk7FbCFxS1NR2heuFzwST7jD.jpg')" }}
                                            ></div>

                                            {/* Lớp phủ đen mờ */}
                                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>

                                            {/* Text */}
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
                                style={{ fontFamily: "LibertinusSerif" }}
                                    key="signup"
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: "0%", opacity: 1 }}
                                    exit={{ x: "-100%", opacity: 0 }}
                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                    className="absolute inset-y-0 right-0 w-1/2 bg-black/90 p-12 flex flex-col justify-center z-10"
                                >
                                    <h2 className="text-3xl font-bold mb-6 text-white">Đăng ký</h2>
                                    <form className="space-y-4 text-white">
                                        <input
                                            type="text"
                                            placeholder="Họ & Tên"
                                            className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Mật Khẩu"
                                            className="w-full p-3 rounded bg-transparent border border-green-600 focus:outline-none"
                                        />
                                        <button
                                            className="relative w-full py-3 rounded-lg overflow-hidden group"
                                        >
                                            {/* Hình nền */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center"
                                                style={{ backgroundImage: "url('https://freerangestock.com/sample/179070/dense-green-monstera-leaves-plant-foliage-creating-lush-background.jpg')" }}
                                            ></div>

                                            {/* Lớp phủ đen mờ */}
                                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition"></div>

                                            {/* Text */}
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
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default AuthModal