import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function PopupWhatsapp() {

      const [whatsappPopup, setWhatsappPopup] = useState(false)
    
      const handleScroll = () => {
        let yvalue = window.scrollY
        setWhatsappPopup(yvalue>900)
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`fixed right-0  bottom-40 h-[50px] w-[50px] md:h-[60px] md:w-[60px] bg-green-700 z-30 text-white flex items-center justify-center rounded-full transform transition-transform duration-700 cursor-pointer hover:text-green-700 hover:bg-white border border-green-700 ${whatsappPopup ? '-translate-x-2 translate-y-3 ' : 'translate-x-[500px] -translate-y-[50px]'}`}>
        {
            whatsappPopup &&
            <a href="https://wa.me/573104653633" target="_blank">
                <div className="w-full h-full flex items-center justify-center text-3xl md:text-[38px]">
                    <IoLogoWhatsapp />
                </div>
            </a>
        }
    </div>
  )
}
