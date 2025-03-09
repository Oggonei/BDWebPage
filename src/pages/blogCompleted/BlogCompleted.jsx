import { blogs } from "../../utils/blogs"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoShareSocialOutline } from "react-icons/io5";
import { useEffect } from "react";

export default function BlogCompleted() {

    let url = window.location.pathname.split('/')
    let blogNumber = url[url.length - 1]

    useEffect(() => {window.scrollTo(0, 0);},[])

  return (
    <div className="w-full z-20 overflow-x-hidden">
        <div className="text-white h-full lg:h-[500px] md:h-[300px] w-full">
            <figure className="w-full  h-full">
                <img src={blogs[blogNumber-1].img} alt="blog-image" className="rounded-b-[30px] h-full w-full object-cover"/>
            </figure>
            <span className=" bg-white/60 absolute top-40 left-4 rounded-md font-semibold text-[12px] px-4 py-1 lg:hidden md:hidden" >{blogs[blogNumber-1].tag}</span>
            <NavLink to='/blog'>
                <span className="text-[36px] absolute top-24 left-4 lg:left-16 lg:top-40 hover:text-main_orange hover:scale-110 transform transition-all duration-300">  
                    <MdOutlineArrowBackIosNew />
                </span>
            </NavLink>
            <h2 className="font-bold text-[20px] leading-tight mt-4 absolute top-48 left-4 lg:top-80 lg:font-bold lg:text-[54px] lg:ml-12">{blogs[blogNumber-1].title}</h2>
        </div>
        <div className="flex px-8 py-6 items-center justify-between lg:justify-start md:justify-start lg:ml-6 lg:my-4">
            <div className="flex">
                <figure className="w-[36px] lg:w-[50px] md:w-[50px]">
                    <img src={blogs[blogNumber-1].authorPhoto} alt="author-image"
                        className="rounded-full"
                    />
                </figure>
                <div className="flex flex-col text-[#8E8E8E] ml-4">
                    <span className="font-medium text-[13px] lg:text-[18px] md:text-[18px]">{blogs[blogNumber-1].author}</span>
                    <span className="font-medium text-[11px] lg:text-[18px] md:text-[18px]">{blogs[blogNumber-1].date}</span>
                </div>
            </div>
            <div className="flex justify-around items-center lg:ml-4 md:ml-4">
                <div className="bg-[#FB432C] w-[28px] h-[28px] text-white text-[26px] flex justify-center items-center rounded-lg lg:p-1">
                    <IoShareSocialOutline />
                </div>
            </div>
        </div>
        <div className="px-8 md:px-12 flex flex-col gap-4 last:mb-8 text-[#6F6F6F] w-full lg:ml-0 lg:last:mb-16">
            <p className="font-bold text-[24px] text-black lg:text-[42px] md:text-[42px]">{blogs[blogNumber-1].title}</p>
            <div className="full-info" dangerouslySetInnerHTML={{ __html: blogs[blogNumber-1].fullInfo }} />
        </div>
    </div>
  )
}
