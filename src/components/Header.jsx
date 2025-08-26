import React, { useState, useEffect } from "react";
import AuthModal from "../pages/AuthPage";
import Cookies from "js-cookie";
import { ShoppingCart, LogOut } from "lucide-react"; // icon
import ProfileModal from "../pages/ProfileModal";

const Header = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // ✅ state cho Profile
  const [user, setUser] = useState(null);

  // Load user từ Cookies khi vào trang
  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    Cookies.remove("user");
    setUser(null);
  };

  // ✅ Khi update profile
  const handleUpdateUser = (updatedUser) => {
    setUser(updatedUser);
    Cookies.set("user", JSON.stringify(updatedUser), { expires: 7 });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600/80 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
              </div>
              <span className="text-white text-xl font-bold">WinnerGarden</span>
            </div>

            {/* Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-yellow-400">
                Trang Chủ
              </a>
              <a href="/about" className="text-white hover:text-yellow-400">
                Về Chúng Tôi
              </a>
              <a href="/product" className="text-white hover:text-yellow-400">
                Mua Cây
              </a>
            </div>

            {/* User / Login */}
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {/* Icon giỏ hàng */}
                  <button className="text-white hover:text-yellow-400">
                    <ShoppingCart className="w-6 h-6" />
                  </button>

                  {/* Tên user → click mở Profile */}
                  <button
                    onClick={() => setShowProfile(true)}
                    className="text-white font-semibold hover:text-yellow-400"
                  >
                    {user.name}
                  </button>

                  {/* Logout */}
                  <button
                    onClick={handleLogout}
                    className="text-red-400 hover:text-red-600"
                    title="Đăng xuất"
                  >
                    <LogOut className="w-6 h-6" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setShowAuth(true)}
                  className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg"
                >
                  Đăng nhập
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuth}
        onClose={() => setShowAuth(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* ✅ Profile Modal */}
      {showProfile && user && (
        <ProfileModal
          user={user}
          onClose={() => setShowProfile(false)}
          onUpdate={handleUpdateUser}
        />
      )}
    </>
  );
};

export default Header;
