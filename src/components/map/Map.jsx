import { useTranslation } from 'react-i18next';

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
        <div className="flex flex-col items-center justify-center md:justify-evenly">
    
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.456897667076!2d-74.0675475!3d4.6903872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b141380d599%3A0xc751496ab169eeb5!2sCoworking%20Marbella!5e0!3m2!1ses-419!2sco!4v1736789542697!5m2!1ses-419!2sco" 
      width="300" height="300" className='border-gray-400 border shadow-2xl md:text-start md:hidden' loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.456897667076!2d-74.0675475!3d4.6903872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b141380d599%3A0xc751496ab169eeb5!2sCoworking%20Marbella!5e0!3m2!1ses-419!2sco!4v1736789542697!5m2!1ses-419!2sco" 
      width="600" height="400" className='border-gray-400 border shadow-2xl md:flex hidden' loading="lazy" referrerPolicy="no-referrer-when-downgrade"
      />
      
    
          <div className='mt-4'>
            <p className="md:hidden font-medium text-[16px] w-full">{t('locationAddress')}</p>
            <p className="md:hidden font-medium text-[16px]">{t('locationCountry')}</p>
          </div>
        </div>
    </div>
  )
}
