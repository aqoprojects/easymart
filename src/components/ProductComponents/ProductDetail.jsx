import { useState } from "react";
import { NavLink } from "react-router-dom";


const ProductDetail = ( { fillWidth, name, price, discount, slug, image } ) =>
{
  const [ isLoading, setIsLoading ] = useState( false );
  return (
    <div className={`min-w-60  ${fillWidth ? fillWidth : 'max-w-60'} `}>
      <div className={`w-auto h-60 grid place-content-center-safe rounded-3xl mb-3 ${isLoading && 'p-3 bg-[#FEF5FD]' }`}>
        {!isLoading  && <div className="rounded-3xl w-60 h-60 bg-gray-300 animate-pulse"></div>}
        <img src={image} className={`object-contain object-center rounded-3xl ${isLoading ? 'block' : 'hidden'}`} onLoad={()=> setIsLoading(true)} alt="{name}" />

      </div>
      <div>
        <NavLink to={`/product/${slug}`}>
          <h4 className={`text-xl font-normal mb-4 line-clamp-1 ${!name && "w-40 h-5 rounded-md bg-gray-300 animate-pulse"} `}>{name}</h4>
        </NavLink>

        <div>
          {/* <p className="text-sm font-normal">$2.71/lb</p> */}
          <div className="flex gap-3 text-xl items-baseline mb-2">
            <p className={`font-light text-xl ${!price && 'w-14 h-3 bg-gray-300 animate-pulse rounded-md'} `}>{price && `$${price}`}</p>
            <p className={`line-through text-md text-gray-700 ${!price && 'w-14 h-3 bg-gray-300 animate-pulse rounded-md'} `}>{discount && `$${discount}`}</p>
          </div>
          {/* <div className="flex gap-8 text-lg font-light">
            <p className="text-[#A02B84]">12 Left</p>
            <p>12 Left</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;