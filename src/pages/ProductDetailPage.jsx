"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import PlantSlider from "../components/product/PlantSlider"
import PlantsRelated from "../components/product/PlantsRelated"

const PlantDetail = () => {
  const { id } = useParams()
  const [plant, setPlant] = useState(null)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState("")
  const [activeTab, setActiveTab] = useState("description")
  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState(0)

  const fetchPlant = async () => {
    try {
      const res = await axios.get(`https://winnergarden.onrender.com/api/plants/${id}`)
      setPlant(res.data)
      setSelectedImage(res.data.image)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchPlant()
  }, [id])

  // Auto-switch thumbnails every 3 seconds
  useEffect(() => {
    if (plant?.thumbnails?.length > 1) {
      const interval = setInterval(() => {
        setCurrentThumbnailIndex((prevIndex) =>
          (prevIndex + 1) % plant.thumbnails.length
        )
        setSelectedImage(plant.thumbnails[currentThumbnailIndex])
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [plant, currentThumbnailIndex])

  if (!plant) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      Loading...
    </div>
  )

  return (
    <div className=" min-h-screen text-gray-100" style={{ backgroundColor: '#061412' }}>
      <PlantSlider />
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-lg bg-gray-800 rounded-xl overflow-hidden shadow-lg">

              <img
                src={selectedImage}
                alt={plant.name}
                className="w-full h-[500px] object-cover transition-opacity duration-500"
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.5)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              {plant.thumbnails?.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-24 h-24 object-cover rounded-lg border-2 cursor-pointer transition-all duration-300 hover:opacity-80 ${selectedImage === thumb ? "border-green-400 ring-2 ring-green-500/50" : "border-gray-700"
                    }`}
                  onClick={() => {
                    setSelectedImage(thumb)
                    setCurrentThumbnailIndex(index)
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Info */}

          <div className="space-y-6">

            <div>
              {plant.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {plant.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-green-800/40 border border-green-500 text-green-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <h2 className="text-4xl font-bold tracking-tight">{plant.name}</h2>
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-lg">★ {plant.rating}</span>
              <span className="text-gray-400">({plant.ratingCount} đánh giá)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-semibold text-green-400">
                {plant.price.toLocaleString()}₫
              </span>
              <span className="text-gray-500 line-through text-lg">
                {plant.originalPrice.toLocaleString()}₫
              </span>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="font-medium text-lg mb-3">Chọn size:</h4>
              <div className="flex gap-3 flex-wrap">
                {plant.sizes?.map((size, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${selectedSize === size ? "bg-green-500 border-green-500 text-white" : "border-gray-600 hover:bg-gray-700"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <h4 className="font-medium text-lg">Số lượng:</h4>
              <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-2">
                <button
                  className="px-3 py-1 text-lg hover:bg-gray-700 rounded"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  className="px-3 py-1 text-lg hover:bg-gray-700 rounded"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200">
                Thêm vào giỏ hàng
              </button>
              <button className="flex-1 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                Mua ngay
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex gap-8 border-b border-gray-700">
            {["Mô tả", "Thông tin", "Đánh Giá"].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-2 font-medium text-lg capitalize transition-colors duration-200 ${activeTab === tab ? "border-b-2 border-green-400 text-green-400" : "text-gray-400 hover:text-gray-200"
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="py-8">
            {activeTab === "Mô tả" && (
              <p className="text-gray-300 leading-relaxed">{plant.description}</p>
            )}

            {activeTab === "Thông tin" && (
              <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="border border-gray-700 px-6 py-3 text-left">Vấn đề</th>
                    <th className="border border-gray-700 px-6 py-3 text-left">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-900">
                    <td className="border border-gray-700 px-6 py-3">Ánh sáng</td>
                    <td className="border border-gray-700 px-6 py-3">Tránh ánh sáng trực tiếp</td>
                  </tr>
                  <tr className="bg-gray-900">
                    <td className="border border-gray-700 px-6 py-3">Tưới</td>
                    <td className="border border-gray-700 px-6 py-3">Tránh tưới nước quá nhiều</td>
                  </tr>
                </tbody>
              </table>
            )}

            {activeTab === "Đánh Giá" && (
              <div className="space-y-6">
                {plant.reviews?.length > 0 ? (
                  plant.reviews.map(r => (
                    <div key={r.id} className="border-b border-gray-700 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-medium text-lg">{r.user}</span>
                        <span className="text-yellow-400">{"★".repeat(r.rating)}</span>
                      </div>
                      <p className="text-gray-300">{r.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400">No reviews yet.</p>
                )}
              </div>
            )}
          </div>
        </div>
        <PlantsRelated currentPlant={plant} />
      </section>
    </div>
  )
}

export default PlantDetail