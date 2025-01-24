import { HiOutlineMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Footer() {

    const {t} = useTranslation()

    let goUp = ( () => {scrollTo(0,0)}) 

  return (
    <div className="w-full flex flex-col items-center">
        <div className="bg-black w-full text-white flex flex-col p-8 gap-2 md:gap-4 lg:flex-row md:flex-row lg:justify-center lg:gap-36 lg:font-medium lg:text-[16px] md:text-[15px]">
            <div className='flex  items-center gap-4 md:gap-2 hover:text-main_orange cursor-pointer'>
                <HiOutlineMail className='text-[24px]'/>
                <a href="mailto:comercial@compumarketing.net">{t('footerEmail')}</a>
            </div>
            <div className='flex  items-center gap-4 md:gap-2 hover:text-main_orange cursor-pointer'>
                <IoLogoWhatsapp className='text-[24px]'/>
                <a href="https://wa.me/573104653633" target="_blank">{t('footerWhatssApp')}</a>
            </div>
            <div className='flex  items-center gap-4 md:gap-2 hover:text-main_orange cursor-pointer'>
                <FiPhone className='text-[24px]'/>
                <a href="tel:+573103829128">{t('footerPhone')}</a>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#FB432C] to-[#FF591E] w-full p-2 md:p-6 text-white flex justify-end text-[24px] gap-4 lg:pr-32 items-center">
            <NavLink to='personal-data-policy' onClick={() => goUp()} className='text-center leading-none'>
                <span className="underline text-sm md:text-lg cursor-pointer ">{t('footerPolicy')}</span>
            </NavLink>
            <a href="https://www.facebook.com/profile.php?id=61572072972470" target="_blank">
                <FaFacebook className="cursor-pointer hover:scale-150"/>
            </a>
            <a href="https://www.instagram.com/backupdatacolombia/" target="_blank">
                <FaInstagram className="cursor-pointer hover:scale-150"/>
            </a>
            <a href="https://www.linkedin.com/company/backup-data-colombia/" target="_blank">
                <FaLinkedin className="cursor-pointer hover:scale-150"/>
            </a>
            <a href="https://www.youtube.com/@BackupData-Colombia" target="_blank">
                <FaYoutube className="cursor-pointer hover:scale-150"/>
            </a>    
        </div>
    </div>
  )
}

