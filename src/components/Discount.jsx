
import XsProductDetail from './ProductComponents/XsProductDetail';
import StoreCategory from './CategoryComponents/StoreCategory';
import { useEffect, useState } from 'react';

const Discount = ({name, desc}) =>
{
 

  return (
    <article className='py-3 md:mt-20 px-4'>

      <section className='flex justify-between items-center-safe md:hidden bg-gray-200/40 py-5 px-5 rounded-xl'>
        <div>
          <p className='text-sm lg:text-[clamp(0.7rem,3vw,1.1rem)] text-[#A02B84] font-bold '>{desc}</p>
          <h3 className='text-md  lg:text-[clamp(1.4rem,3vw,2.5rem)] font-semibold break-word mb-3'>{name}</h3>
          <div className='flex gap-2'>
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div>
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white ring-1 ring-[#A02894]/70">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div>
            <div className=" w-9 h-8 grid place-content-center-safe rounded-md mb-1 bg-white">
              <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />
            </div>
          </div>
        </div>
        <div className=" w-30 grid place-content-center-safe rounded-3xl mb-1">
          <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />

        </div>
      </section>

    </article>
  );
};

export default Discount;