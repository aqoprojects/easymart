import React, { useContext } from 'react';
import {PromoSliderContext} from '../ProductSlider'
const PromoSliderButton = () =>
{
  const {scrollToPosition} = useContext(PromoSliderContext)
  return (
    <div className="flex gap-4 mt-6  md:hidden" >
      <button
        onClick={() => scrollToPosition( 'start' )}
        className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
        aria-label="Scroll to start"
      ></button>
      <button
        onClick={() => scrollToPosition( 'middle' )}
        className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
        aria-label="Scroll to middle"
      ></button>
      <button
        onClick={() => scrollToPosition( 'end' )}
        className="px-4 py-1 bg-[#B6349A] text-white rounded-lg hover:bg-[#B6349A]"
        aria-label="Scroll to end"
      ></button>
    </div>
  );
};

export default PromoSliderButton;