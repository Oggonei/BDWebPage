import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const ProductsCarousel = () => {
  return (
    <div>
        <Slider {...settings}>
        <div className="h-[50px]">
            h1
        </div>
        <div className="h-[50px]">
            h1        </div>
        <div className="h-[50px]">
            h1        </div>
        <div className="h-[50px]">
            h1        </div>
        <div className="h-[50px]">
            h1        </div>
        </Slider>
    </div>
  )
}

export default ProductsCarousel