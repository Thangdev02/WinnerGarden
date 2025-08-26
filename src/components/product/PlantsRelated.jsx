"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import { getAllProducts } from "../../services/productService"

const PlantsRelated = ({ currentPlant }) => {
  const { id } = useParams()
  const [relatedPlants, setRelatedPlants] = useState([])

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const allPlants = await getAllProducts()

        if (currentPlant?.tags?.length > 0) {
          const related = allPlants.filter(
            (p) =>
              p.id !== id && // bỏ chính product hiện tại
              p.tags.some((tag) => currentPlant.tags.includes(tag))
          )
          setRelatedPlants(related)
        }
      } catch (error) {
        console.error("❌ Lỗi fetch related plants:", error)
      }
    }

    fetchPlants()
  }, [id, currentPlant])

  if (relatedPlants.length === 0) {
    return <p className="text-gray-400 mt-8">Không có sản phẩm liên quan.</p>
  }

  return (
    <section className="mt-12 py-8">
      <h3 className="text-2xl font-semibold text-gray-100 mb-6">
      Sản phẩm liên quan
      </h3>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
      >
        {relatedPlants.map((plant) => (
          <SwiperSlide key={plant.id}>
            <div
              className="rounded-lg p-4 shadow-lg text-center hover:scale-105 transition-transform"
              style={{ backgroundColor: "#212518" }}
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-medium text-gray-200">{plant.name}</h4>
              <div className="flex justify-center items-center gap-1 text-yellow-400 mb-2">
                ★ {plant.rating}
              </div>
              <div className="text-green-400 font-semibold">
                {plant.price.toLocaleString()}₫
                <span className="line-through text-gray-500 ml-2">
                  {plant.originalPrice.toLocaleString()}₫
                </span>
              </div>
              <Link
                to={`/plants/${plant.id}`}
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                Xem cây
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default PlantsRelated
