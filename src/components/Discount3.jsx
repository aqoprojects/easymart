import { MdArrowForwardIos } from "react-icons/md";

const Discount3 = ({name, desc}) => {
  return (
    <section className='px-3 py-2 my-2'>
      <div className=' w-full flex  md:hidden flex-col justify-center-safe items-center-safe bg-[#FDEAFB] py-5 rounded-2xl'>
         <p className='text-[clamp(0.7rem,3vw,1.1rem)] lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>{desc}</p>
          <h3 className='text-[clamp(1.4rem,3vw,2.5rem)]  lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word'>{name}</h3>
           <button className="px-4 py-1 bg-[#A02B84] text-white rounded-full font-normal">Shop Now</button>
      </div>
    </section>
  )
}

export default Discount3