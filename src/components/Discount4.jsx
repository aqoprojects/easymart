
import XsProductDetail from './ProductComponents/XsProductDetail';
import StoreCategory from './CategoryComponents/StoreCategory';
import { useEffect, useState } from 'react';

const Discount4 = ({name, desc, products}) =>
{
  // const [promotions, setPromotions] = useState([])
 
  return (
    <article className='px-4'>

      <section className='w-full flex flex-wrap-reverse lg:flex-nowrap gap-4 justify-evenly bg-black/1 px-4 py-10 rounded-2xl'>
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory lg:overflow-visible  no-scrollbar">
          {
            products.map(product => <XsProductDetail name={product.name} price={product.price} image={product.productImage} discount={product.discount_price} slug={product.product_slug} />)
          }
          

        </div>

        <div className='w-full text-wrap'>
          <p className='text-[clamp(0.7rem,3vw,1.1rem)] lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>{desc}</p>
          <h3 className='text-[clamp(1.4rem,3vw,2.5rem)]  lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word'>{name}</h3>
          <div className="flex text-nowrap gap-2 overflow-auto py-1 px-1 lg:flex-wrap lg:overflow-visible lg:max-w-180 no-scrollbar">
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
      </section>
    </article>
  );
};

export default Discount4;