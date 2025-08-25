// components/Loading.js
import React from "react";
import "../loading.css"; // import css riêng

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ background: "url('https://orchids-shop.com/cdn/shop/articles/alexandra-tran-q8SwluCubVw-unsplash1.jpg?v=1715066104')" }}>
      <span className="loader"></span>
      <div>
        <br></br>
      <h1 className="text-white">Chờ xíu...</h1>
      </div>
    </div>
  );
};

export default Loading;
