import axios from "axios"

// Lấy baseURL từ .env (Vite thì phải dùng VITE_)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9999"

// Tạo axios instance
const api = axios.create({
  baseURL: API_URL,
})

// Hàm gọi API lấy toàn bộ products
export const getAllProducts = async () => {
  try {
    const response = await api.get("/plants") // giả sử endpoint là /plants
    return response.data
  } catch (error) {
    console.error("❌ Lỗi khi fetch products:", error)
    throw error
  }
}
