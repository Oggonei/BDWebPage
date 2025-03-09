import { useTranslation } from "react-i18next";
import { IoCloseSharp } from "react-icons/io5";


const ProductsPopup = ({toggleProductPopup,productPopup,id}) => {

    const {t} =useTranslation()

    let navigateContactMd = (idProduct) => {
        toggleProductPopup()
        setTimeout(() => {
          window.scrollTo(0,document.getElementById('contact').offsetTop)
        }, 200)
        document.getElementById('productSelect').value = idProduct
      }

  return (
    <div className={`w-screen h-screen bg-black bg-opacity-95 fixed top-0 left-0 z-50 flex justify-center items-center md:items-center transform transition-transform duration-300 ${productPopup ? 'translate-y-0' : '-translate-y-full'}`}>
            {
                productPopup &&
                <div className={`w-[100%] h-[85%] absolute md:flex md:h-[70%] md:w-[80%] bg-gray-700 rounded-t-[40px] md:rounded-3xl flex flex-col justify-center items-center bg-popupProducts bg-cover bg-top shadow-md shadow-orange-900/50`}>
                    <div className="flex w-full justify-center">
                        <span className="text-white md:text-2xl bg-main_orange p-4 rounded-full -translate-y-5 cursor-pointer hover:text-main_orange hover:bg-white hover:border-main_orange hover:scale-110 hover:border box-content" onClick={toggleProductPopup}>
                            <IoCloseSharp />
                        </span>
                    </div>
                    <div className="text-white p-8 h-full">
                        <h2 className="text-xl md:text-2xl text-center font-bold">{t(`productPopupTitle${id}`)}</h2>
                        <ul className="mt-8 list-disc list-outside	gap-2 flex flex-col text-sm md:text-lg justify-center h-full">
                            <li>{t(`productPopupList${id}1`)}</li>
                            <li>{t(`productPopupList${id}2`)}</li>
                            <li>{t(`productPopupList${id}3`)}</li>
                            <li>{t(`productPopupList${id}4`)}</li>
                            <li>{t(`productPopupList${id}5`)}</li>
                            <li>{t(`productPopupList${id}6`)}</li>
                        </ul>
                    </div>
                    <button onClick={() => navigateContactMd(id)} className="bg-[#FB432C] text-white font-semibold text-[16px] md:text-[20px] rounded-2xl px-[20px] py-[10px] m-10 hover:text-[#FB432C] hover:bg-white hover:scale-110">
                        {t('navBarContact')}
                    </button>
                </div>
            }
    </div>
  )
}

export default ProductsPopup