import PlantSlider from "../components/product/PlantSlider"
import ProductList from "../components/product/ProductList"
import BestSellerSection from '../components/home/BestSellerSection';

export default function ProductsPage() {
  return (
    <div className=" min-h-screen" style={{backgroundColor: '#2C3227'}} >
      {/* <Navigation /> */}
      <PlantSlider/>
      <BestSellerSection/>
      <ProductList />
    </div>
  )
}
