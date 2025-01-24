export default function List(props) {

  return (
    <div className="w-full flex justify-start ">
        <ul className={`text-start list-disc list-outside ${props.text} ml-4 md:ml-2 ${props.listSize ? props.listSize : 'text-[16px]'} px-4 first:mt-[32px] lg:text-[16px] md:text-[14px] `}>
                {
                    props.listItems.map((element, index) => {
                        return <li key={index}>{element}</li>
                    })
                }
        </ul>
    </div>
  )
}
