import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { PiCompassThin } from "react-icons/pi";
import StoreCategory from "./CategoryComponents/StoreCategory";
import ProductDetail from "./ProductComponents/ProductDetail";

const WeeklySold = () => {
  return (
    <article className="md:bg-gray-100/60 lg:p-20 rounded-3xl lg:mt-18">
      <section className="mx-4 pl-8 pb-8  bg-white rounded-3xl shadow-xs shadow-black/20">
          <section className="w-full flex  justify-between items-start pl-4">
            <div className="mt-4">
              <p className='block md:hidden text-sm lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>Get 10% OFF</p>
              <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold">Trending Store Favorites</h2>
              <div className="hidden lg:flex text-nowrap gap-2 overflow-auto py-1 px-1 lg:flex-wrap lg:overflow-visible lg:max-w-180 no-scrollbar">
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                  <StoreCategory/>
                </div>
            </div>
            <div className="hidden md:block bg-[#6C2358] pl-5 pr-5 md:pr-15 rounded-tr-3xl rounded-bl-2xl pt-1 pb-4  ">
              <div className="flex gap-1 items-center-safe ">
                <PiCompassThin className="text-white size-6"/>
                <p className="text-[clamp(0.7rem,3dvw,1.1rem)] text-white text-nowrap font-medium">Freshness Guarantee</p>
              </div>
              <p className="text-[clamp(1rem,3dvw,1.6rem)] text-white font-semibold mb-3 text-nowrap">Weekly Sold 1K+</p>

              <button className="hidden md:flex bg-white py-1.5 px-3 rounded-2xl gap-1 items-center-safe justify-center-safe text-sm font-semibold">
                 View More
                <GoArrowRight className="hidden md:block size-4"/>
              </button>
            </div>
            
          </section>
    
          {/* <section className=" flex  justify-between items-center mb-5">
            <div className="w-full flex justify-between items-center-safe  ">
              
              
              <div className="hidden lg:block">
                <button className="ring-1 ring-black/10 p-2 rounded-full bg-black/3 mr-4">
                  <MdArrowBackIosNew className="size-7 text-gray-400" />
                  </button>
                <button className="ring-1 ring-black/10 p-2 rounded-full ">
                <MdArrowForwardIos className="size-7 " />
                </button>
              </div>
            </div>
          </section> */}
    
          
    
          <section className="mt-2 pr-5">
            <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
              <ProductDetail/>
    
    
            </div>
          </section>
          </section>
        </article>
  )
}

export default WeeklySold