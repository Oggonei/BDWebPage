import { NavLink } from 'react-router-dom'
import blog1 from '../../assets/images/blog1.jpg'
import blog2 from '../../assets/images/blog2.jpg'
import blog3 from '../../assets/images/blog3.jpg'
import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { blogs } from '../../utils/blogs';


export default function BlogMobile() {

  useEffect(() => {
    Aos.init({duration: 800});
  }, [])

  const { i18n, t } = useTranslation()

  return (
    <div className="flex flex-col w-full p-4 ">
      <div className="flex justify-between w-full flex-col">
        <div className="h-[2px] w-full bg-black my-4 hidden lg:block"></div>
        <div className='flex'>
          <h2 className='font-semibold text-[34px] w-3/5 lg:text-[54px]'>{t('blogTitle1')} {<br/>} {t('blogTitle2')}</h2>
          <span className='w-2/5 flex justify-end items-end'>
            <NavLink to='/blog'>
              <span className='text-[#A91F18] font-semibold  hover:text-main_orange lg:text-[32px] lg:pr-8'>{t('productsTitleButton')}</span>
            </NavLink>
          </span>
        </div>
      </div>
      <div className="h-[2px] w-full bg-black my-4 lg:hidden"></div>
      <div className=" overflow-x-scroll scrollbar-hidden flex w-full">
        <div className="flex flex-col w-full py-6 md:p-3 px-2 lg:flex-row md:flex-row md:w-[1180px] lg:w-full lg:justify-between gap-5 md:gap-1">
          {
            blogs.map((element,index) => {
              return(
                <div className="flex w-full md:w-[320px] items-center justify-center py-6 md:py-0 text-[#3A4F39] lg:flex-col md:flex-col lg:items-start md:justify-start lg:w-full" key={index} data-aos="zoom-out-down">
                  <NavLink to={`/blog/${index+1}`} className='w-3/6 md:w-full'>
                    <figure className='w-full p-4 flex md:p-2 hover:scale-105 md:h-[250px] lg:h-[280px]'>
                      <img src={element.img} alt={element.alt} className='rounded-lg w-full object-cover h-full'/>
                    </figure>
                  </NavLink>
                  <div className='w-3/5 flex flex-col justify-between py-1 lg:w-full md:w-full lg:ml-0 md:p-2 '>
                    <span className='mb-3 hidden lg:block md:block underline'>{element.tag}</span>
                    <h4 className='text-[18px] font-medium w-full'>{element.title}</h4>
                    <p className='hidden lg:block md:block my-4 text-[16px] w-5/6'>{element.info}</p>
                    <span className='text-[12px] lg:hidden md:hidden'>{element.date}</span>
                    <div className='hidden lg:flex md:flex gap-6 text-[12px] items-center'>
                      <span className=' '>{element.author}</span>
                      <div className='flex items-center gap-2'>
                        <div className="w-[5px] h-[5px] bg-[#A0CD9E] rounded-full"></div>
                        <span className=''>{element.duration}</span>
                      </div>
                    </div>
                    <NavLink to={`/blog/${index+1}`}>
                      <span className='text-[12px] lg:hover:text-main_orange '>{t('blogRead')}</span>
                    </NavLink>
                  </div>
                </div>
              )      
            })
          }
        </div>
      </div>
    </div>
  )
}
