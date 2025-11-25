import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
const ScrollAction = ({scrollRef, canScrollRight, canScrollLeft, totalProducts, disabled_view=false}) => {
  
  const scrollForward = () =>
  {
    if ( scrollRef.current && canScrollRight ) {
      scrollRef.current.scrollBy( { left: 200, behavior: 'smooth' } );
    }
  };

  const scrollBackward = () =>
  {
    if ( scrollRef.current && canScrollLeft ) {
      scrollRef.current.scrollBy( { left: -200, behavior: 'smooth' } );
    }
  };

  return (
    <div className="flex gap-10 items-center-safe justify-center-safe ">
          {!disabled_view && <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-2 rounded-full font-semibold">
                View All ({totalProducts > 99 ? '+ 99' : totalProducts})
                <GoArrowRight className="hidden md:block size-6" />
                <MdArrowForwardIos className="block md:hidden" />
              </button>}
              
    
              <div className="hidden md:block">
                <button className={`ring-1 ring-black/10 p-2  ${!canScrollLeft && 'bg-black/3 text-gray-400'} rounded-full  mr-4`} onClick={scrollBackward}
                  disabled={!canScrollLeft}>
                  <MdArrowBackIosNew className="size-7" />
                </button>
                <button className={`ring-1 ring-black/10 ${!canScrollRight && 'bg-black/3 text-gray-400'} p-2 rounded-full`} onClick={scrollForward}
                  disabled={!canScrollRight}>
                  <MdArrowForwardIos className="size-7 " />
                </button>
              </div>
            </div>
  )
}

export default ScrollAction