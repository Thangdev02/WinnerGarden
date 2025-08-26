import React, { useState } from "react";
import { X } from "lucide-react";
import { updateProfile } from "../services/authService";

const ProfileModal = ({ user, onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState("info");
  const [formData, setFormData] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
    avatar: user.avatar || "https://via.placeholder.com/150",
    orders: user.orders || [],
    password: user.password || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const updatedUser = await updateProfile(user.id, formData, ...user.orders);
      onUpdate(updatedUser);
      onClose();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 relative flex"  style={{height: "50vh"}}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Panel: Avatar + Tabs */}
        <div className="w-1/3 border-r pr-4 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative">
            <img
              src={formData.avatar}
              alt="Avatar"
              className="w-28 h-28 rounded-full object-cover border shadow"
            />
            <label className="absolute bottom-0 right-0 bg-yellow-400 p-1 rounded-full cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = () =>
                      setFormData({ ...formData, avatar: reader.result });
                    reader.readAsDataURL(file);
                  }
                }}
              />
              📷
            </label>
          </div>
          <h2 className="mt-3 font-semibold">{user.name}</h2>

          {/* Tabs */}
          <div className="mt-6 w-full">
            <button
              onClick={() => setActiveTab("info")}
              className={`w-full text-left px-4 py-2 rounded-md mb-2 ${
                activeTab === "info"
                  ? "bg-yellow-400 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
               Thông tin cơ bản
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full text-left px-4 py-2 rounded-md ${
                activeTab === "orders"
                  ? "bg-yellow-400 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
            Lịch sử mua hàng
            </button>
          </div>
        </div>

        {/* Right Panel: Tab Content */}
        <div className="w-2/3 pl-6">
          {activeTab === "info" ? (
            <div>
              <h3 className="text-xl font-bold mb-4">Chi Tiết Tài Khoản</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm">Tên</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm">Số điện thoại</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm">Địa chỉ</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>
              <button
                onClick={handleUpdate}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
              >
                 Chỉnh sửa
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-xl font-bold mb-4">Lịch Sử Mua Hàng</h3>
              {user.orders && user.orders.length > 0 ? (
                user.orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-md p-4 mb-3 shadow-sm"
                  >
                    <p className="font-semibold">
                      Order #{order.id} - {order.status}
                    </p>
                    <p>Total: {order.total.toLocaleString()} VND</p>
                    <ul className="mt-2 list-disc pl-6">
                      {order.products.map((product) => (
                        <li key={product.id}>
                          {product.name} x{product.quantity} -{" "}
                          {product.price.toLocaleString()} VND
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No orders yet.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
