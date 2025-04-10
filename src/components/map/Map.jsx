import { useTranslation } from 'react-i18next';
import mapa from "../../assets/images/mapa.jpg"

export default function Map() {

  const { i18n, t } = useTranslation()

  return (
    <div className="w-full p-4 md:flex md:justify-evenly md:items-center md:py-20 " id='location'>
        <div className='md:w-1/2'>
          <h4 className="font-bold text-[26px] md:text-[42px]  lg:text-[52px] my-4 w-full md:ml-12">{t('locationTilte')}</h4>
          <p className="hidden md:flex font-medium text-[16px] md:text-[28px] lg:text-[32px]  w-full md:ml-12">{t('locationAddress')}</p>
          <p className="hidden md:flex font-medium text-[16px] md:text-[28px] lg:text-[32px] w-full md:ml-12">{t('locationCountry')}</p>
          <p className="hidden md:flex font-medium text-[16px] md:text-[28px] lg:text-[32px] w-full md:ml-12">{t('footerPhone')}</p>
        </div>
        <div className="flex flex-col items-center justify-center md:justify-evenly border border-gray-500 shadow-2xl">
          <div className='relative'>
            <img src={mapa} alt='Marbella map' />
            <div className='absolute top-0 left-0 cursor-pointer'>
              <button className='p-2 bg-white/60 rounded-xl mt-4 ml-4 border border-gray-700 shadow-xl hover:bg-black hover:text-white'>
                <a href="https://www.google.com/maps/place/Cra.+63+%23+100-57,+Suba,+Bogot%C3%A1,+D.C.,+Bogot%C3%A1,+Bogot%C3%A1,+D.C./@4.690362,-74.067489,16z/data=!4m6!3m5!1s0x8e3f9adc927d8763:0x567ec294359ed7a0!8m2!3d4.690372!4d-74.067432!16s%2Fg%2F11x11k4f_p?hl=es&entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
                  {t('viewMap')}
                </a></button>
            </div>
          </div>
          <div className='mt-4'>
            <p className="md:hidden font-medium text-[16px] w-full">{t('locationAddress')}</p>
            <p className="md:hidden font-medium text-[16px]">{t('locationCountry')}</p>
          </div>
        </div>
    </div>
  )
}
