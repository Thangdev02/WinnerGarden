import axios from "axios"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9999"

const api = axios.create({
  baseURL: API_URL,
})

// Lấy tất cả user (dùng để login)
export const getUsers = async () => {
  const res = await api.get("/users")
  return res.data
}
export const registerUser = async (newUser) => {
    try {
      const res = await api.post("/users", newUser)
      return res.data
    } catch (err) {
      console.error("Register user to DB error:", err)
      throw err
    }
  }
// Đăng ký user mới
export const registerWithEmail = async (name, email, password) => {
    try {
      // 1. Đăng ký tài khoản mới
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // 2. Gửi email xác minh
      await sendEmailVerification(user);
  
      // 3. Trả về user kèm name để bạn lưu DB nếu muốn
      return {
        uid: user.uid,
        name,
        email: user.email,
        emailVerified: user.emailVerified,
      };
    } catch (err) {
      console.error("Register error:", err);
      throw err;
    }
  };
export const getUserById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  
  // Cập nhật user
  export const updateProfile = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
