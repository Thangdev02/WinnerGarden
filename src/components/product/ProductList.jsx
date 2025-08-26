"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { getAllProducts } from "../../services/productService"

const ProductList = () => {
  const [plants, setPlants] = useState([])
  const [filteredPlants, setFilteredPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Filter state
  const [selectedTag, setSelectedTag] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const data = await getAllProducts()
        setPlants(data)
        setFilteredPlants(data)
      } catch (err) {
        setError("Không thể tải cây cảnh. Vui lòng đảm bảo API đang chạy.")
      } finally {
        setLoading(false)
      }
    }

    fetchPlants()
  }, [])

  // Lọc theo filter
  useEffect(() => {
    let result = plants

    // Filter theo tag
    if (selectedTag) {
      result = result.filter((p) => p.tags.includes(selectedTag))
    }

    // Filter theo price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Filter theo rating
    if (rating > 0) {
      result = result.filter((p) => p.rating >= rating)
    }

    setFilteredPlants(result)
  }, [selectedTag, priceRange, rating, plants])

  if (loading) {
    return (
      <section className=" py-20 text-center text-white min-h-screen flex items-center justify-center" style={{ backgroundColor: "#2C3227" }}>
        <p>Đang tải cây cảnh...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-gray-900 py-20 text-center text-red-500 min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </section>
    )
  }

  // Lấy tất cả tags từ dữ liệu
  const allTags = [...new Set(plants.flatMap((p) => p.tags || []))]

  return (
    <section className="py-12 min-h-screen" style={{ backgroundColor: "#061412" }}>
      <div className="container mx-auto px-4 flex gap-8">
        
        {/* Sidebar Filter */}
        <aside className="w-1/5  p-6 rounded-lg text-white h-fit" >
          <h2 className="text-xl font-semibold mb-4">Bộ lọc</h2>

          {/* Tag filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Tag</h3>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value="">Tất cả</option>
              {allTags.map((tag, idx) => (
                <option key={idx} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Price filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Khoảng giá</h3>
            <input
              type="number"
              placeholder="Từ"
              className="w-full mb-2 p-2 rounded bg-gray-700 text-white"
              onChange={(e) =>
                setPriceRange([Number(e.target.value) || 0, priceRange[1]])
              }
            />
            <input
              type="number"
              placeholder="Đến"
              className="w-full p-2 rounded bg-gray-700 text-white"
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value) || 10000000])
              }
            />
          </div>

          {/* Rating filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Đánh giá tối thiểu</h3>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full p-2 rounded bg-gray-700 text-white"
            >
              <option value={0}>Tất cả</option>
              <option value={5}>5 ★</option>
              <option value={4}>4 ★ trở lên</option>
              <option value={3}>3 ★ trở lên</option>
              <option value={2}>2 ★ trở lên</option>
              <option value={1}>1 ★ trở lên</option>
            </select>
          </div>

          
        </aside>

        {/* Plants Grid */}
        <div className="w-3/4">
          <h1
            style={{
              color: "#fff",
              fontSize: "40px",
              fontFamily: "LibertinusSerif",
              paddingBottom: "4%",
            }}
            className=" font-semibold text-center "
          >
            Các cây trong cửa hàng
          </h1>

          {filteredPlants.length === 0 ? (
            <p className="text-gray-400 text-center">Không tìm thấy sản phẩm phù hợp.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {filteredPlants.map((plant) => (
                <Link key={plant.id} to={`/plants/${plant.id}`}>
                  <div
                    className="relative rounded-lg shadow-lg overflow-hidden group"
                    style={{ backgroundColor: "#212518" }}
                  >
                    {plant.discountPercentage && (
                      <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                        -{plant.discountPercentage}%
                      </div>
                    )}
                    <div className="w-full h-70 bg-gray-700 flex items-center justify-center overflow-hidden">
                      <img
                        src={plant.image || "/placeholder.svg"}
                        alt={plant.name}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {plant.name}
                      </h3>
                      <div className="flex justify-center items-center mt-2">
                        {plant.originalPrice && (
                          <span className="text-gray-400 line-through mr-2">
                            {plant.originalPrice.toLocaleString("vi-VN")} VNĐ
                          </span>
                        )}
                        <span
                          className=" text-xl font-bold"
                          style={{ color: "#FFD700" }}
                        >
                          {plant.price.toLocaleString("vi-VN")} VNĐ
                        </span>
                      </div>
                      <p className="text-yellow-400 mt-1">★ {plant.rating}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductList
