import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha';

export default function Form({id}) {
    
  const [ confirmEmail, setConfirmEmail ] = useState(false)
  const [ errorEmail, setErrorEmail ] = useState(false)
  const [ errorConection, setErrorConection ] = useState(false)
  const captcha = useRef(null)
  const { i18n, t } = useTranslation()

  const [formInfo, setFormInfo] = useState()

  const sendForm = async (e) => {
    e.preventDefault();
  
    if (
      formInfo.name &&
      formInfo.phone &&
      formInfo.email &&
      formInfo.product &&
      captcha.current.getValue()
    ) {
      console.log(formInfo);
  
      try {
        const response = await axios.post('http://localhost:3000/api/v1/requests', formInfo);
        if(response.status === 200){
          console.log('response', response);
          handleConfirm();
        }else{
          handleErrorConection();
        }
      } catch (error) {
        console.log(error);
        handleErrorConection();
      }
  
    } else {
      handleErrorEmail();
    }
  };

  const handleConfirm = () => {
    setConfirmEmail(true)
    setTimeout(() => {
      setConfirmEmail(false)
      setFormInfo(emptyValue)
    }, 2000);
  }

  const handleErrorConection = () => {
    setErrorConection(true)
    setTimeout(() => {
      setErrorConection(false)
      setFormInfo(emptyValue)
    }, 4000);
  }

  const handleErrorEmail = () => {
    setErrorEmail(true)
    setTimeout(() => {
      setErrorEmail(false)
    }, 2000);
  }

  const products = {
    "1": 'Software de respaldo de archivos',
    "2": 'Software de respaldo para SO Windows',
    "3": 'Software de respaldo para SaS',
    "4": 'Software de respaldo para máquinas virtuales',
    "5": 'Software de respaldo para bases de datos',
    "6": 'Software de respaldo de servidores'
  }

  const handleForm = (value,type) => {
    let newData = {...formInfo}
    newData.product = products[id]
    if(type === 'product'){
      newData[type] = products[value]
    }else {
      newData[type] = value
    }
    setFormInfo(newData)
    console.log(formInfo)
  }

  const capchaFunction = () => {
    captcha.current.getValue() ? console.log('Validado') : console.log('No Validado')
  }

  const emptyValue= {
    'name': '',
    'phone': '',
    'email': '',
    'product': '',
    'newsletter': false
  }

  const formInputs = [
    {
      id: '1',
      name: 'name',
      placeholder: 'formNameHolder',
      type: 'text'
    },
    {
      id: '2',
      name: 'phone',
      placeholder: 'formPhoneHolder',
      type: 'number'
    },
    {
      id: '3',
      name: 'email',
      placeholder: 'formEmailHolder',
      type: 'email'
    },
  ]

  useEffect(() => {
    setFormInfo(emptyValue)
  }, []);

  return (
    <div className="w-full py-4 bg-[#28292B] text-white justify-center items-center flex flex-col lg:flex-row lg:py-28 lg:justify-evenly lg:items-center lg:h-full md:items-start" id="contact">
        <h3 className="font-bold text-[26px] leading-tight p-8 mt-6 text-start lg:font-semibold lg:text-[63px] md:text-[42px] lg:w-2/6 md:w-5/6">{t('formTitle')}</h3>
        <div className="w-2 bg-white h-[512px] hidden lg:block"/>
        <form  className="flex flex-col items-center justify-center w-4/5 lg:gap-12 md:w-3/6 lg:w-2/6 md:pl-8" onSubmit={sendForm}>
            <div className="w-full my-4 flex flex-col">
                <label htmlFor="" className="w-full lg:text-[20px] md:text-[18px]">{t('formSelectTitle')}</label> 
                <select id='productSelect' name="product" className="text-[#28292B] bg-white text-sm md:text-md lg:text-lg mt-2 cursor-pointer after:bg-transparent border border-white p-3 rounded-xl" onChange={(e) => handleForm(e.target.value,"product")}>
                    <option value="1">{t('productsTitleCard1')}</option>
                    <option value="2">{t('productsTitleCard2')}</option>
                    <option value="3">{t('productsTitleCard3')}</option>
                    <option value="4">{t('productsTitleCard4')}</option>
                    <option value="5">{t('productsTitleCard5')}</option>
                    <option value="6">{t('productsTitleCard6')}</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-4 md:text-[20px]">
              {
                formInfo && formInputs &&
                  formInputs.map(input => {
                    return (
                      <input
                        key={`form-field-${input.id}`}
                        className="w-full p-1 bg-transparent placeholder:text-white border-b-2 focus:outline-none text-[16px] md:text-[18px] py-3 lg:w-4/6"
                        id={`form-field-${input.id}`}
                        onChange={(e) => handleForm(e.target.value,input.name)}
                        placeholder={t(input.placeholder)}
                        type={input.type}
                        value={formInfo[input.name]}
                      />
                    )
                  })
              }
            </div>
            <div className="w-full  lg:text-[14px] md:text-[14px] ">
                <input type="checkbox"  name="newsletter" className="accent-[#FF591E]" onChange={(e) => handleForm(e.target.checked,"newsletter")} value={formInfo?.newsletter}/>
                <span className="ml-2">{t('formCheckButton')}</span>
            </div>
            <div className="w-full text-center mb-12 lg:text-start md:text-start">
                <ReCAPTCHA
                  ref={captcha}
                  sitekey="6LdeffkqAAAAAKtiU_kl4_8kvnZkQjQdQLHiYup4"
                  onChange={capchaFunction}
                  />
                  { 
                    confirmEmail && 
                    <div className='text-white bg-green-600 py-4 mt-4 text-center'>
                      <span>solicitud enviada con exito, un agente se contactará contigo</span>
                    </div>   
                  }
                  {
                    errorEmail && 
                    <div className='text-white bg-red-600 py-4 mt-4 text-center'>
                      <span>Todos los campos son obligatorios</span>
                    </div> 
                  }
                  {
                    errorConection && 
                    <div className='text-white bg-orange-600 py-4 mt-4 text-center'>
                      <span>Hay un error en la comunicación con el servidor, por favor intente más tarde o comuniquese a nuestros números de atención</span>
                    </div> 
                  }
                <button type='submit' className="bg-main_orange px-8 py-2 mt-6 rounded-full lg:font-semibold lg:text-[24px]  md:text-[24px] hover:bg-white hover:text-main_orange hover:border hover:border-main_orange border border-transparent hover:scale-105">{t('formButtonTitle')}</button>
            </div>
        </form>
    </div>
  )
}
