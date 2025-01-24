import { NavLink } from "react-router-dom";
import List from "../list/List"
import { FaCheck } from "react-icons/fa6";

export default function ListGroup(props) {

    let navigateContactMd = () => {
        setTimeout(() => {
          window.scrollTo(0,document.getElementById('contact').offsetTop)
        }, 100)
      }

  return (
    <div className={` ${props.bg} ${props.text} px-4 pt-16 pb-8  ${props.bgDesktop} bg-cover ${props.lgPadding ? props.lgPadding : 'lg:p-6 md:p-2'}`}>
        {
            props.h1Title && <h1 className={`font-semibold text-[34px] leading-tight lg:w-2/5 lg:font-semibold lg:text-[42px] md:font-semibold md:text-[25px] ${props.titleColor} `}>{props.h1Title}</h1>
        }
        {
            props.h2Title && <h2 className={`font-semibold text-[34px] leading-tight md:text-[32px] ${props.titleColor}`}>{props.h2Title}</h2>
        }
        {
            props.subtitle && <h3 className={`${props.subtitleColor} font-bold text-[16px] ml-8 -mb-6 mt-5`}>{props.subtitle}</h3>
        }
        {
            props.productTitle && <h3 className={`${props.productTitleColor} font-bold text-[20px] ml-2 -mb-6 mt-5 lg:text-[32px] lg:ml-6`}>{props.productTitle}</h3>
        }
        <div className={props.listItemsHidden && "lg:hidden md:hidden"}>
            <List listItems={props.listItems} text={props.text} listSize={props.listSize}/>
        </div>
        {
            props.keywords &&
            <div className="mx-4 mt-8 flex ">
                {
                    props.keywords.map((element, index) => {
                        return (
                            <div key={index} className="flex text-[#282828] gap-3">
                                <span className="bg-gray-300 rounded-full flex justify-center items-center px-1 text-sm -mx-2" >
                                    <FaCheck />
                                </span>
                                <span className="mr-6 text-[14px]" >
                                    {element}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        }
        {
            props.button && 
            <NavLink to={props.button == 'WhatsApp' && 'https://wa.me/573104653633'} target={props.button == 'WhatsApp' ? '_blank' : undefined}>
                <button onClick={() => props.button !== 'WhatsApp' && navigateContactMd()} className={` ${props.buttonBg}  rounded-full px-[20px] py-[10px] m-6 text-white font-semibold text-[14px] lg:ml-0 md:ml-0 lg:my-16 md:my-4 lg:text-[25px] md:text-[16px] hover:scale-105 ${props.button == 'WhatsApp' ? 'hover:text-green-600 hover:bg-white hover:border-green-600 hover:border border border-transparent'  :'hover:text-[#FB432C] hover:bg-white hover:border hover:border-[#FB432C] border border-transparent'}`}>{props.button}</button>
            </NavLink>
        }
        {
            props.isProductsButton && <button onClick={() => props.toggleProductPopup()} className={`bg-white/50 my-4   rounded-md px-[20px] py-[10px] text-white font-semibold text-[14px] lg:ml-0 md:ml-0 lg:my-16 md:my-4 lg:text-[25px] md:text-[16px] hover:text-[#FB432C] hover:bg-white`}>Ver más</button>
        }
    </div>
  )
}
