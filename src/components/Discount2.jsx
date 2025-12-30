import { MdArrowForwardIos } from "react-icons/md";
import XsProductDetail from "./ProductComponents/XsProductDetail";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Discount2 = ( { name, desc, total_products, products, discount_type, discount_value, start_date, end_date } ) =>
{
   const [duration, setDuration] = useState({ type: "", value: 0 });

  function getDurationType(start_date, end_date) {
  const now = dayjs();
  const end = dayjs(end_date);
  const diffMs = end.diff(now);

  if (diffMs <= 0) {
    return { type: "Ended", value: 0 };
  }
  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinutes = diffMs / (1000 * 60); 
  const diffHours = diffMinutes / 60;
  const diffDays = diffHours / 24;

  if (diffDays >= 1) {
    return { type: "days", value: Math.floor(diffDays) };
  } else if (diffHours >= 1) {
    return { type: "hours", value: Math.floor(diffHours) };
  } else if (diffMinutes >= 1) {
    return { type: "minutes", value: Math.floor(diffMinutes) };
  }  else{
    return {
        type: "seconds",
        value: `${diffSeconds}`,
      };
  }
}

  useEffect(() => {
    const update = () => {
      const durationInfo = getDurationType(start_date, end_date);
      setDuration(durationInfo);
    };

    update();

    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, [start_date, end_date]);


  return (
    <article className='p-4 lg:p-20  hidden lg:block'>

      <section className='w-full flex flex-wrap-reverse lg:flex-nowrap gap-4 justify-evenly bg-[#F5FBF5] px-4 py-10 rounded-2xl'>
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory lg:overflow-visible  no-scrollbar">
          {
            products.map( product => <XsProductDetail name={product.name} price={product.price} image={product.productImage} discount={product.discount_price} /> )
          }

        </div>

        <div className='w-full text-wrap hidden xl:block'>
          <div className="flex flex-col text-center mb-5">
            <p className='text-[clamp(0.7rem,3vw,1.1rem)]  lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>{desc}</p>
            <h3 className='text-[clamp(1.4rem,3vw,2.5rem)] lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word'>{name}</h3>
          </div>
          <div className="flex flex-col items-center-safe gap-3">
            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">{total_products}</p>
                <p className="text-[clamp(0.6rem,3vw,1.3rem)] font-medium">items</p>
              </div>
              <div className="text-center">
                <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">{duration.value}</p>
                <p className="text-[clamp(0.6rem,3vw,1.3rem)] font-medium">{duration.type}</p>
              </div>
              <div className="text-center">
                <p className="text-[clamp(0.9rem,3vw,2rem)] font-semibold">{Number( discount_value )} {discount_type == 'percentage' && '%'}</p>
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
  );
};

export default Discount2;