import React from 'react';

const Footer = () => {
    return (
      <footer
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://www.elsalvadorsolidarity.org/wp-content/uploads/2017/10/footer-background.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
  
        <div className="relative z-10 text-white">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {/* Links Column 1 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61577717192666" className="text-white/80 hover:text-white transition-colors">
                      Fanpage
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                    Hỗ trợ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Free Trial
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Links Column 2 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Our Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Affiliates
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Links Column 3 */}
              <div>
                <h3 className="text-lg font-semibold mb-4 border-b border-white/30 pb-2">Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      EULA
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/80 hover:text-white transition-colors">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>
  
              {/* Social Media */}
              <div className="flex justify-center items-start">
                <div className="flex space-x-4">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMSpCxwxPXWhlwdzDhvwzSdtZrMksLVjwPBdGnwTWzjLbzXWtbMFQbFvJQXqldhHDnfvSJ"
                    className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61577717192666"
                    className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.winnertech.cloud/"
                    className="w-12 h-12 border-2 border-white/50 rounded-full flex items-center justify-center hover:border-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
  
              {/* Contact Info */}
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4">WinnerGarden</h3>
                <div className="space-y-2 text-sm text-white/80">
                  <p>218/4 Ngô Quyền</p>
                  <p>Rạch Giá, An Giang, Vietnam</p>
                  <p>tel: +84 949 450 800</p>
                  <p>email: winnertech2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
  
          {/* Bottom Footer */}
          <div className="border-t border-white/20">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Logo and Legal Links */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-2xl font-bold">
                    Winner<span className="text-green-400">Garden</span>
                  </div>
                  <div className="flex space-x-6 text-sm">
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      End User License Agreement
                    </a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-white/60 hover:text-white transition-colors">
                      Terms & Conditions
                    </a>
                  </div>
                </div>
  
                {/* Payment Methods and Copyright */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                  {/* Payment Icons */}
                  <div className="flex space-x-3">
                    <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center text-xs font-bold text-white">
                      MC
                    </div>
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold text-white">
                      VISA
                    </div>
                    <div className="w-10 h-6 bg-blue-500 rounded flex items-center justify-center text-xs font-bold text-white">
                      PP
                    </div>
                    <div className="w-10 h-6 bg-blue-400 rounded flex items-center justify-center text-xs font-bold text-white">
                      AE
                    </div>
                  </div>
  
                  {/* Copyright */}
                  <p className="text-xs text-white/60">
                    Coded and designed by WinnerTech. All rights reserved to WinnerGarden.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  