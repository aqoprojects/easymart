// import { useRef } from 'react';
import PromoDetail from './PromoDetail';
import {PromoSliderContext} from '../ProductSlider'
import { useContext } from 'react';
const ProductPromoSlider = () =>
{
  
  const {row1Ref, row2Ref} = useContext(PromoSliderContext)


  const images = [

    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png", ];

  const images2 = [
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",

  ];

  return (
    <>
      <div ref={row1Ref} className='flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:flex'>
        {
          images.map( ( image ) => <PromoDetail image={image} /> )
        }
      </div>

      <div ref={row2Ref} className='hidden md:flex overflow-x-auto snap-x snap-mandatory no-scrollbar'>
        {
          images2.map( ( image ) => <PromoDetail image={image} /> )
        }
      </div>
    </>
  );
};

export default ProductPromoSlider;