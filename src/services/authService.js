import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:9999"

const api = axios.create({
  baseURL: API_URL,
})

// Lấy tất cả user (dùng để login)
export const getUsers = async () => {
  const res = await api.get("/users")
  return res.data
}

// Đăng ký user mới
export const registerUser = async (userData) => {
  const res = await api.post("/users", userData)
  return res.data
}
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
