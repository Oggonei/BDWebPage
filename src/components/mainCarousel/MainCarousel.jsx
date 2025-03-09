import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import car_nasa from "../../assets/images/car_nasa.png"
import car_intel from "../../assets/images/car_intel.png"
import car_cisco from "../../assets/images/car_cisco.png"
import car_philips from "../../assets/images/car_philips.png"
import car_motorola from "../../assets/images/car_motorola.png"
import car_atos from "../../assets/images/car_atos.png"
import car_hexa from "../../assets/images/car_hexa.png"
import car_india from "../../assets/images/car_india.png"
import car_sanhua from "../../assets/images/car_sanhua.png"
import car_icrisat from "../../assets/images/car_icrisat.png"
import car_digital from "../../assets/images/car_digital.png"
import car_bses from "../../assets/images/car_bses.png"
import car_coppin from "../../assets/images/car_coppin.png"

export default function MainCarousel() {

  const settings = {
    infinite: true,
    speed: 1700,
    slidesToShow: 6,
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
    <div className="w-full text-center py-8">
      <Slider {...settings}>
        <div className="h-[50px]">
          <img src={car_nasa} className="h-5/6 object-contain"/>
        </div>
        <div className="h-[50px]">
          <img src={car_intel} className="h-5/6 object-contain"/>
        </div>
        <div className="h-[50px]">
          <img src={car_cisco} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_philips} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_motorola} className="h-5/6 object-contain"/>
        </div>
        <div className="h-[50px]">
          <img src={car_atos} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_hexa} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_india} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_sanhua} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_icrisat} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_digital} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_bses} className="h-5/6 object-contain "/>
        </div>
        <div className="h-[50px]">
          <img src={car_coppin} className="h-5/6 object-contain "/>
        </div>
      </Slider>
    </div>
  )
}
