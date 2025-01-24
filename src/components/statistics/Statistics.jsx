import {  useState, useEffect } from "react"
import CountUp from "react-countup"
import { useTranslation } from 'react-i18next';


export default function Statistics(props) {

    const [numberAnimation, setNumberAnimation] = useState(0)
    const [numberAnimationMd, setNumberAnimationMd] = useState(0)

    const { i18n, t } = useTranslation()
    
    const handleScroll = () => {
        let yvalue = window.scrollY
        setNumberAnimation(yvalue>630)
        setNumberAnimationMd(yvalue>90)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    
    
  return (
    <div className={`${props.bg} w-full py-8 flex flex-col items-center justify-center lg:items-start md:items-start ${props.textColor} p-4 lg:p-24 md:p-10`}>
        <h2 className="font-semibold text-[34px] my-4 leading-tight lg:w-3/5 md:w-3/5 lg:text-[54px] md:text-[42px] lg:my-2 md:my-1">{props.title}</h2>
        <p className="text-[16px] my-8 lg:my-4 md:my-2 lg:text-[24px] md:text-[20px] lg:w-4/5 md:w-4/5">{props.info}</p>
        <div className="flex gap-4 my-4 lg:hidden md:hidden">
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px] md:text-[50px] md:my-4">+</span>
                    {
                        numberAnimation && <CountUp start={0} end={60000} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">{t('statisticsInfoNumber1')}</span>
            </div>
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px]  md:text-[50px]  md:my-4">+</span>
                    {
                        numberAnimation && <CountUp start={0} end={20} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">{t('statisticsInfoNumber2')}</span>
            </div>
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px]  md:text-[50px]  md:my-4">+</span>
                    {
                        numberAnimation && <CountUp start={0} end={100} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">{t('statisticsInfoNumber3')}</span>
            </div>
        </div>
        <div className="hidden md:flex gap-4 my-4">
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px] md:text-[50px] md:my-4">+</span>
                    {
                        numberAnimationMd && <CountUp start={0} end={60000} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">Empresas clientes en el mundo</span>
            </div>
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px]  md:text-[50px]  md:my-4">+</span>
                    {
                        numberAnimationMd && <CountUp start={0} end={20} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">Años de experiencia</span>
            </div>
            <div className="flex flex-col">
                <div className="flex  items-center lg:my-12">
                    <span className="font-bold text-3xl lg:text-[80px]  md:text-[50px]  md:my-4">+</span>
                    {
                        numberAnimationMd && <CountUp start={0} end={100} duration={3} className="font-bold text-3xl lg:text-[80px] md:text-[50px]">+</CountUp>
                    }
                </div>
                <span className="text-sm lg:font-semibold lg:text-[38px] lg:leading-snug md:leading-snug lg:w-4/5 md:w-4/5 md:text-[24px] md:mt-4">Paises con presencia</span>
            </div>
        </div>
    </div>
  )
}
