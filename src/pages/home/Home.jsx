import { useEffect, useState } from "react"
import Image from "../../components/image/Image"
import ListGroup from "../../components/listGroup/ListGroup"
import MainCarousel from "../../components/mainCarousel/MainCarousel"
import backup from '../../assets/images/bckup.jpeg'
import Statistics from "../../components/statistics/Statistics"
import Form from "../../components/form/Form"
import ProductsCarrier from "../../components/productsCarrier/ProductsCarrier"
import BlogMobile from "../../components/blogMobile/BlogMobile"
import Map from "../../components/map/Map"
import Separator from "../../components/separator/Separator"
import InstagramContainer from "../../components/instagramContainer/InstagramContainer"
import ProductsPopup from "../../components/productsPopup/ProductsPopup"
import PopupWhatsapp from "../../components/popupWhatsapp/PopupWhatsapp"
import { useTranslation } from 'react-i18next';

export default function Home() {

  useEffect(() => {window.scrollTo(0, 0);},[])

  const [productPopup, setProductPopup] = useState(false)
  const [id, setId] = useState(1)

  const { i18n, t } = useTranslation()

  const toggleProductPopup = () => {
    setProductPopup(!productPopup)
  }

  const selectedProductPopup = (id) =>{
    toggleProductPopup()
    setId(id)
  }
  
  return (
    <div className={`w-full overflow-x-hidden ${productPopup && 'overflow-y-hidden'}`} id="home">
      <ListGroup 
        listItems={[
          `${t('titleList1')}`,
          `${t('titleList2')}`,
          `${t('titleList3')}`,
        ]}
        listItemsHidden = {true}
        h1Title={t('title')}
        bg='bg-black'
        text='text-white'
        button={t('tileButton')}
        buttonBg = 'bg-[#FB432C]'
        bgDesktop = 'lg:bg-desktop md:bg-desktop'
        lgPadding = 'lg:p-40 md:p-20'
      />
      <MainCarousel/>
      <div className="lg:flex md:px-6 md:flex justify-evenly lg:items-center md:items-center flex-row-reverse lg:my-10 md:my-4">
        <Image image={backup} alternative='Imagen de backup'/>
        <ListGroup 
          listItems={[
            `${t('secondTitleList1')}`,
            `${t('secondTitleList2')}`,
            `${t('secondTitleList3')}`,
            `${t('secondTitleList4')}`,
            `${t('secondTitleList5')}`,
          ]}
          keywords = {[`${t('secondTitleKeword1')}`,`${t('secondTitleKeword2')}`]}
          h2Title={t('secondTitle')}
          bg='bg-white'
          text='text-[#5F6980]'
          button='WhatsApp'
          buttonBg = 'bg-green-600 '
          titleColor = 'text-black'
        />
      </div>
      <Statistics 
        textColor='text-white'
        bg='bg-gradient-to-r from-[#FB432C] to-[#FF591E]'
        title={t('statisticsTitle')}
        info={t('statisticsInfo')}
      />
      <ProductsCarrier toggleProductPopup={toggleProductPopup} selectedProductPopup={selectedProductPopup}/>
      <BlogMobile/>
      <Form/>
      <Map/>
      <Separator/>
      <InstagramContainer/>
      {
        productPopup &&
        <ProductsPopup toggleProductPopup={toggleProductPopup} productPopup={productPopup} id={id}/>
      }
      <PopupWhatsapp />

    </div>
  )
}
