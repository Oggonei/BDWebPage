import { useTranslation } from 'react-i18next';

const ProductCard = ({bg,title,info,toggleProductPopup,selectedProductPopup,id}) => {
  
  const { i18n, t } = useTranslation()

  let onSelectedProductPopup = () => {
    selectedProductPopup(id)
  }
  
  return (
    <div className={`cursor-pointer w-[222px] h-[349px] md:w-[229px] md:h-[359px]  ${bg} bg-cover rounded-2xl flex text-center justify-between  flex-col text-white p-4`} onClick={onSelectedProductPopup}>
        <div>
            <h3 className="font-bold text-[20px] mt-10">{title}</h3>
            <p className="text-[12px] mt-4">{info}</p>
        </div>
        <button className="px-4 py-1 bg-white/50 rounded-md my-4" onClick={toggleProductPopup}>{t('productsTitleButton')}</button>
    </div>
  )
}

export default ProductCard