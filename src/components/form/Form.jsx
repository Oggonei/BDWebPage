import { useTranslation } from 'react-i18next';

export default function Form() {
    
    const { i18n, t } = useTranslation()

  return (
    <div className="w-full py-4 bg-[#28292B] text-white justify-center items-center flex flex-col lg:flex-row lg:py-28 lg:justify-evenly lg:items-center lg:h-full md:items-start" id="contact">
        <h3 className="font-bold text-[26px] leading-tight p-8 mt-6 text-start lg:font-semibold lg:text-[63px] md:text-[42px] lg:w-2/6 md:w-5/6">{t('formTitle')}</h3>
        <div className="w-2 bg-white h-[512px] hidden lg:block"/>
        <form action="" className="flex flex-col items-center justify-center w-4/5 gap-8 lg:gap-12 md:w-3/6 lg:w-2/6 md:pl-8">
            <div className="w-full my-4 flex flex-col">
                <label htmlFor="" className="w-full lg:text-[20px] md:text-[18px]">{t('formSelectTitle')}</label> 
                <select id='productSelect' name="product" className="text-[#28292B] bg-white text-sm md:text-md lg:text-lg mt-2 cursor-pointer after:bg-transparent border border-white p-3 rounded-xl">
                    <option value="1">{t('productsTitleCard1')}</option>
                    <option value="2">{t('productsTitleCard2')}</option>
                    <option value="3">{t('productsTitleCard3')}</option>
                    <option value="4">{t('productsTitleCard4')}</option>
                    <option value="5">{t('productsTitleCard5')}</option>
                    <option value="6">{t('productsTitleCard6')}</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-4 md:text-[20px]">
                <input type="text" className="w-full p-1 bg-transparent placeholder:text-white border-b-2 focus:outline-none text-[16px] md:text-[18px] py-3 lg:w-4/6" placeholder={t('formNameHolder')}/>
                <input type="number" className="w-full p-1 bg-transparent placeholder:text-white border-b-2 focus:outline-none text-[16px] md:text-[18px] py-3 lg:w-4/6" placeholder={t('formPhoneHolder')}/>
                <input type="email" className="w-full p-1 bg-transparent placeholder:text-white border-b-2 focus:outline-none text-[16px] md:text-[18px] py-3 lg:w-4/6" placeholder={t('formEmailHolder')}/>
            </div>
            <div className="w-full my-2 lg:text-[14px] md:text-[14px] hidden">
                <input type="checkbox"  name="" id="" className="accent-[#FF591E]"/>
                <span className="ml-2">{t('formCheckButton')}</span>
            </div>
            <div className="w-full text-center mb-12 lg:text-start md:text-start">
                <button className="bg-main_orange px-8 py-2 rounded-full lg:font-semibold lg:text-[24px]  md:text-[24px] hover:bg-white hover:text-main_orange hover:border hover:border-main_orange border border-transparent hover:scale-105">{t('formButtonTitle')}</button>
            </div>
        </form>
    </div>
  )
}
