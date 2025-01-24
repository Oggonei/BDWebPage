import { blogs } from "../../utils/blogs"
import { MdOutlineDoubleArrow } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function BlogPage({title}) {

    useEffect(() => {window.scrollTo(0, 0);},[])

    const {t} = useTranslation()

  return (
    <div className="w-full flex flex-col">
        {
        title &&
        <div className="hidden lg:flex md:flex mb:text-[42px] px-20 md:px-8 lg:px-20 font-semibold text-[54px] my-6 ">
            <h2 className="text-start">{t('blogTitle')}</h2>
        </div>
        }
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-14 md:justify-items-center lg:grid lg:grid-cols-3 lg:px-20 lg:gap-28 p-4 gap-10 last:mb-4 flex-wrap ">
            {
                blogs.map((element, index) => (
                    <div className="flex flex-col gap-3 md:w-full w-full " data-aos="zoom-out-down" key={index}>
                        <NavLink to={`/blog/${index+1}`}>
                            <figure className="hover:scale-105 transform transition-all duration-600 w-full h-[250px]">
                                <img src={element.img} alt="blog-image" className="rounded-xl shadow-lg shadow-gray-700 object-cover h-full w-full"/>
                            </figure>
                        </NavLink>
                        <div className="flex flex-col mt-4 gap-2">
                            <span className="text-[#FB432C] font-semibold text-[18px]">{element.tag}</span>
                            <div className="flex items-center gap-4 ">
                                <h2 className="font-medium text-[18px]">{element.title}</h2>
                                <NavLink to={`/blog/${index+1}`}>
                                    <MdOutlineDoubleArrow className="text-[#FB432C]"/>
                                </NavLink>
                            </div>
                            <p className="font-regular text-[16px]">{element.info}</p>
                        </div>
                        <div className="flex w-full gap-8 font-regular text-[12px]">
                            <span>{element.author}</span>
                            <div className="flex items-center gap-3">
                            <div className="w-[5px] h-[5px] bg-[#A0CD9E] rounded-full"></div>
                            <span>{element.time}</span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}
