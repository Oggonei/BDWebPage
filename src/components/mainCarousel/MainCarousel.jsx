import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import car_nasa from "../../assets/images/car_nasa.png"
import car_intel from "../../assets/images/car_intel.png"
import car_cisco from "../../assets/images/car_cisco.png"
import car_philips from "../../assets/images/car_philips.png"
import car_motorola from "../../assets/images/car_motorola.png"

export default function MainCarousel() {

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:-1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
    ]
  };


  return (
    <div className="w-full text-center p-4">
      <Slider {...settings}>
        <div className="h-[50px]">
          <img src={car_nasa} className="h-full object-contain ml-3"/>
        </div>
        <div className="h-[50px]">
          <img src={car_intel} className="h-full object-contain"/>
        </div>
        <div className="h-[50px]">
          <img src={car_cisco} className="h-full object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_philips} className="h-full object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_motorola} className="h-full object-contain "/>
        </div>
      </Slider>
    </div>
  )
}
