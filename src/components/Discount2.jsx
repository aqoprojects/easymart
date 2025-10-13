import { MdArrowForwardIos } from "react-icons/md";
import XsProductDetail from "./ProductComponents/XsProductDetail";

const Discount2 = () => {
  return (
    <article className='p-4 lg:p-20  hidden lg:block'>
      
        <section className='w-full flex flex-wrap-reverse lg:flex-nowrap gap-4 justify-evenly bg-[#F5FBF5] px-4 py-10 rounded-2xl'>
          <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory lg:overflow-visible  no-scrollbar">
            <XsProductDetail/>
            <XsProductDetail/>
            <XsProductDetail/>
        
          </div>
        
          <div className='w-full text-wrap hidden xl:block'>
            <div className="flex flex-col text-center mb-5">
              <p className='text-[clamp(0.7rem,3vw,1.1rem)]  lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>Get 10% OFF On Your First Order</p>
              <h3 className='text-[clamp(1.4rem,3vw,2.5rem)] lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word'>Order Now Your Grocery!</h3>
            </div>
            <div className="flex flex-col items-center-safe gap-3">
              <div className="flex gap-8">
                <div>
                  <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">1K+</p>
                  <p className="text-[clamp(0.6rem,3vw,1.3rem)] font-medium">items</p>
                </div>
                <div>
                  <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">20</p>
                  <p className="text-[clamp(0.6rem,3vw,1.3rem)] font-medium">Minutes</p>
                </div>
                <div>
                  <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">30%</p>
                  <p className="text-[clamp(0.6rem,3vw,1.3rem)] font-medium">Up to offers</p>
                </div>
              </div>
              <div className="">
                <button className="flex items-center-safe justify-center-safe gap-2 px-4 py-2 bg-[#A02B84] text-white rounded-full font-normal">Order Now  <MdArrowForwardIos className="size-5" /></button>
              </div>
            </div>
          </div>
        </section>

    </article>
  )
}

export default Discount2