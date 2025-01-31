import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect } from "react"
import Aos, { init } from "aos"
import 'aos/dist/aos.css';
import Slider from "react-slick"
import ProductCard from "../productCard/ProductCard";
import { useTranslation } from 'react-i18next';

export default function ProductsCarrier({toggleProductPopup,selectedProductPopup}) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        initialSlide: 1,
        autoplay:true,
        autoplaySpeed: 2300,
        cssEase: "linear",
        pauseOnHover: true
        
        //nextArrow: <SampleNextArrow />,
        //prevArrow: <SamplePrevArrow />
      };

      const { i18n, t } = useTranslation()


      function CustomSlide({bg,title,info,index,toggleProductPopup,selectedProductPopup,id}) {

        let onSelectedProductPopup = () => {
          selectedProductPopup(id)
        }
        return (
          <div onClick={() => onSelectedProductPopup(index)} className={`hover:-translate-y-3 transform transition-all duration-300 cursor-pointer object-cover px-2 text-white py-4`}>
            <div className={`hover:shadow-xl hover:shadow-gray-500 w-[full] h-[532px] ${bg} bg-cover rounded-2xl flex text-center items-center justify-around flex-col p-4`}>
                <h3 className="font-bold text-[20px] md:text-[26px]">{title}</h3>
                <p className="text-[12px] md:text-[18px]">{info}</p>
                <button onClick={toggleProductPopup} className="md:text-[18px] px-4 py-1 bg-white/50 rounded-md hover:bg-main_orange hover:text-white hover:scale-105">{t('productsTitleButton')}</button>
            </div>
          </div>
        );
      }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

  return (
    <div className="px-4 py-20 flex flex-col w-full lg:flex-row md:flex-row items-center" id="products" >
        <div className="lg:w-2/6 md:w-2/6 lg:p-8 md:p-5">
            <p className="font-semibold text-[34px] leading-tight lg:text-[54px] md-text-[32px] lg:leading-none">{t('productsTitle')}</p>
            <span className="bg-[#FE5223] h-1 w-3/5 p-1 lg:block md:block mt-6 hidden"></span>
        </div>
        <div className="lg:hidden scrollbar-hidden flex w-full overflow-x-scroll mt-4" data-aos="zoom-out-up">
            <div className=" flex gap-4">
              {/*for mobile*/}
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-cloud' title={t('productsTitleCard1')} info={t('productsInfoCard1')} selectedProductPopup={selectedProductPopup} id='1'/>
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-bdr' title={t('productsTitleCard2')} info={t('productsInfoCard2')} selectedProductPopup={selectedProductPopup} id='2'/>
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-cloud' title={t('productsTitleCard3')} info={t('productsInfoCard3')} selectedProductPopup={selectedProductPopup} id='3'/>
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-bdr' title={t('productsTitleCard4')} info={t('productsInfoCard4')} selectedProductPopup={selectedProductPopup} id='4'/>
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-cloud' title={t('productsTitleCard5')} info={t('productsInfoCard5')} selectedProductPopup={selectedProductPopup} id='5'/>
                <ProductCard toggleProductPopup={toggleProductPopup} bg='bg-bdr' title={t('productsTitleCard6')} info={t('productsInfoCard6')} selectedProductPopup={selectedProductPopup} id='6'/>
            </div>
        </div>
        <div className="w-full hidden lg:flex lg:w-4/6" >
            <div className="slider-container w-full  px-20" data-aos="fade-left">
              {/*for desktop*/}
                <Slider {...settings}>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={1} bg='bg-bdr' title={t('productsTitleCard1')} info={t('productsInfoCard1')} selectedProductPopup={selectedProductPopup} id='1'/>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={2} bg='bg-cloud' title={t('productsTitleCard2')} info={t('productsInfoCard2')} selectedProductPopup={selectedProductPopup} id='2'/>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={3} bg='bg-cloud' title={t('productsTitleCard3')} info={t('productsInfoCard3')} selectedProductPopup={selectedProductPopup} id='1'/>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={4} bg='bg-bdr' title={t('productsTitleCard4')} info={t('productsInfoCard4')} selectedProductPopup={selectedProductPopup} id='1'/>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={5} bg='bg-cloud' title={t('productsTitleCard5')} info={t('productsInfoCard5')} selectedProductPopup={selectedProductPopup} id='1'/>
                    <CustomSlide toggleProductPopup={toggleProductPopup}  index={6} bg='bg-cloud' title={t('productsTitleCard6')} info={t('productsInfoCard6')} selectedProductPopup={selectedProductPopup} id='1'/>
                </Slider>
            </div>
        </div>
    </div>
  )
}
