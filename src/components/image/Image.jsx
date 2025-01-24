import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Image(props) {
  
  useEffect(() => {
      Aos.init({duration: 800});
  }, [])

  return (
    <figure className="w-full flex justify-center my-4 lg:w-2/5 md:w-4/5" data-aos="fade-up-left">
        <img src={props.image} alt={props.alternative} className="w-4/5 h-[200px] lg:h-[337px] md:h-[265px]  rounded-2xl object-cover" />
    </figure>
  )
}
