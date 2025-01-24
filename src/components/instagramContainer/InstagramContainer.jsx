import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { InstagramEmbed } from 'react-social-media-embed';


export default function InstagramContainer() {

  const { i18n, t } = useTranslation()

  return (    
    <div className='my-4 flex justify-center lg:justify-evenly md:justify-evenly items-center w-full lg:my-20'>
        <InstagramEmbed url="https://www.instagram.com/backupdatacolombia/?igsh=ZmZsOXQ0czV2bm9h#" className='w-[328px] lg:w-[482px]'/>
        <div className="w-1 bg-black h-[431px] hidden lg:block md:block"/>
        <div className='hidden lg:flex md:flex lg:flex-col md:flex-col justify-center items-center'>
          <span className='font-medium text-[32px]'>{t('instagramAccount')}</span>
          <NavLink to='https://www.instagram.com/backupdatacolombia/' target='_blank'>
            <span className='font-semibold text-[25px] text-[#A91F18] hover:text-main_orange'>{t('instagramLink')}</span>
          </NavLink>
        </div>
    </div>
  )
}
