export default function Button(props) {
    return (
        <div className="max-lg:flex justify-center">
            <button className={`${props.name} z-10 relative   flex h-[50px] font-Outfit font-semibold sm:text-base text-sm md:leading-[24px]   items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#040404]   before:duration-500 before:ease-out  hover:border-0 hover:shadow-[0px_0px_12px_0px_#A854E9] hover:before:h-56 hover:before:w-56   text-[#FDFDFF]  rounded-[4px] p-[14px_24px_14px_24px]`}>
                <span className='relative z-10 text-nowrap'>{props.text}</span>
            </button>
        </div>
    )
}