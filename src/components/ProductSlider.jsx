import  { createContext, useRef } from 'react'
import ProductPromoSlider from './PromoSliderComponents/ProductPromoSlider';
import PromoSliderButton from './PromoSliderComponents/PromoSliderButton';

const PromoSliderContext = createContext()

const ProductSlider = () => {
const row1Ref = useRef( null );
const row2Ref = useRef( null );

 const scrollToPosition = (position) => {
    const scrollOptions = { behavior: 'smooth' };
    const refs = [row1Ref, row2Ref].filter(ref => ref.current); // Handle mobile case
    refs.forEach((ref) => {
      if (position === 'start') {
        ref.current.scrollTo({ left: 0, ...scrollOptions });
      } else if (position === 'middle') {
        const middle = ref.current.scrollWidth / 2 - ref.current.clientWidth / 2;
        ref.current.scrollTo({ left: middle, ...scrollOptions });
      } else if (position === 'end') {
        ref.current.scrollTo({ left: ref.current.scrollWidth, ...scrollOptions });
      }
    });
  };

  return (

    <PromoSliderContext.Provider value={{row1Ref, row2Ref, scrollToPosition}}>
      <article className='mt-5 flex flex-col items-center justify-center p-4 px-5'>
        <section className='w-full space-y-4'>
          <ProductPromoSlider/>
          
        </section>
      
        <PromoSliderButton/>
        
      </article>
    </PromoSliderContext.Provider>
  )
}

export default ProductSlider
export {PromoSliderContext}