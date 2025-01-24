import { useState } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { GrClose } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Logo_Final from '../../assets/images/Logo Final.png'
import { GrLanguage } from "react-icons/gr";
import es from '../../assets/images/es.png'
import en from '../../assets/images/en.png'
import i18n from "../../i18";
import { useTranslation } from "react-i18next";

export default function NavBar() {

  const changeLanguage = (value) => {
    i18n.changeLanguage(value)
    localStorage.setItem('language', value)
    toggleLanguage()
}

  const { t } = useTranslation()

  const [menu,setMenu] = useState(false)
  const [language,setLanguage] = useState(false)

  let toggleMenu = () => {
    setMenu(!menu)
  }

  let toggleLanguage = () => {
    setLanguage(!language)
  }

  let scrollToTop = () => {
    window.scrollTo(0,0)  
  }

  let navigateProducts = () => {
    toggleMenu()
    setTimeout(() => {
      window.scrollTo(0,document.getElementById('products').offsetTop)
    }, 100)
  }

  let navigateProductsMd = () => {
    setTimeout(() => {
      window.scrollTo(0,document.getElementById('products').offsetTop)
    }, 100)
  }

  let navigateContactMd = () => {
    setTimeout(() => {
      window.scrollTo(0,document.getElementById('contact').offsetTop)
    }, 100)
  }

  let navigateContact = () => {
    toggleMenu()
    setTimeout(() => {
      window.scrollTo(0,document.getElementById('location').offsetTop)
    }, 100)
  }

  let navigateLocationMd = () => {
    setTimeout(() => {
      window.scrollTo(0,document.getElementById('location').offsetTop)
    }, 100)
  }


  return (
    <nav className="w-full h-1/3 bg-white sticky top-0 left-0 z-50">
        <div className="flex justify-between items-center p-4 text-2xl lg:justify-start lg:h-[80px] md:justify-start md:h-[80px]">
            <NavLink to='/' onClick={() => scrollToTop()} className="lg:pl-8 md:pl-8 w-2/6 lg:w-1/6">
              <figure className="h-[32px] md:h-[40px] lg:h-[53px]">
                <img src={Logo_Final} className="h-full" alt="final-logo-image" />
              </figure>
            </NavLink>
            {/* Hidden on mobile */}
            <div className="hidden lg:flex md:flex w-4/6">
                <ul  className="flex gap-8 font-semibold text-[14px] justify-center items-center">
                  <NavLink to='/' className="hover:text-[#FE5223]" >
                    <li onClick={() => scrollToTop()}>{t('navBarHome')}</li>
                  </NavLink>
                  <NavLink to='/#products'  className="hover:text-[#FE5223]">
                    <li onClick={() => navigateProductsMd()}>{t('navBarProducts')}</li>
                  </NavLink>
                  <NavLink to='/blog' className="hover:text-[#FE5223]">
                    <li>Blog</li>
                  </NavLink>
                  <NavLink to='/#location'  className="hover:text-[#FE5223]">
                    <li onClick={() => navigateLocationMd()}>{t('navBarContact')}</li>
                  </NavLink>
                  <NavLink to='/#contact'  className="hover:text-[#FE5223]">
                    <li onClick={() => navigateContactMd()}>{t('navBarTrial')}</li>
                  </NavLink>
                </ul>
            </div>
            <div className="flex  text-gray-900 items-center justify-end md:w-1/6">
              <span className="mr-4 text-[18px] flex justify-end items-end hover:text-main_orange cursor-pointer">
                <GrLanguage onClick={() => toggleLanguage()}/>
              </span>
              <span className="lg:hidden md:hidden">
                <CgMenuLeftAlt onClick={() => toggleMenu()}/>
              </span>
            </div>
        </div>
        <div className={`absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white flex flex-col items-center justify-around 
        transform transition-transform duration-300 ${menu ? 'translate-y-0' : '-translate-y-full'}`}>
          {
          menu &&
          <div className="flex flex-col h-full items-center justify-between w-full z-50">
            <button onClick={() => toggleMenu()} className="absolute top-4 right-4">
              <GrClose />
            </button>
            <ul className="flex flex-col h-full justify-around items-center w-full">
              {
                window.location.pathname === '/' 
                  ? <a href="#home" onClick={() => toggleMenu()}>{t('navBarHome')}</a> 
                  : <NavLink to='/' onClick={() => toggleMenu()}><li>{t('navBarHome')}</li>
                </NavLink>
              }
              {
                window.location.pathname === '/' 
                  ? <a href="#products" onClick={() => toggleMenu()}>{t('navBarProducts')}</a>
                  : <NavLink to='/' onClick={() => navigateProducts()}><li>{t('navBarProducts')}</li>
                </NavLink>
              }
              <NavLink to='/blog' onClick={() => toggleMenu()}>
                <li>Blog</li>
              </NavLink>
              {
                window.location.pathname === '/' 
                  ? <a href="#contact" onClick={() => toggleMenu()}>{t('navBarContact')}</a> 
                  : <NavLink to='/' onClick={() => navigateContact()}><li>{t('navBarContact')}</li>
                </NavLink>
              }
            </ul>
          </div>
          }
        </div>
        <div className={`absolute top-0 left-0 w-full h-[20vh] lg:h-[22vh] bg-gradient-to-r from-[#FB432C] to-[#FF591E] text-white flex flex-col items-center justify-around 
        transform transition-transform duration-300 ${language ? 'translate-y-0' : '-translate-y-full'}`}>
          {
            language &&
            <div className="flex flex-col h-full items-center justify-between w-full z-50">
              <button onClick={() => toggleLanguage()} className="absolute top-4 right-4">
                <GrClose />
              </button>
              <ul className="flex flex-col h-full justify-end items-center w-full gap-4 last:mb-4">
                <li className="border border-gray-300 w-4/6 shadow-2xl rounded-lg text-center py-3 flex justify-center items-center gap-4 cursor-pointer hover:text-main_orange hover:bg-white" onClick={() => changeLanguage('en')}>
                  <figure className="w-[30px]">
                    <img src={en} alt="spanish language logo" className=""/>
                  </figure>
                  <span>English</span>
                </li>
                <li className="border border-gray-300 w-4/6 shadow-2xl rounded-lg text-center py-3 flex justify-center items-center gap-4 cursor-pointer hover:text-main_orange hover:bg-white" onClick={() => changeLanguage('es')}>
                  <figure className="w-[30px]">
                    <img src={es} alt="spanish language logo" className=""/>
                  </figure>
                  <span>Español</span>
                </li>

              </ul>
            </div>
          }
        </div>
    </nav>
  )
}
