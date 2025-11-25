import { useState } from "react";
import { NavLink } from "react-router-dom";


const XsProductDetail = ({name, price, image, discount, slug}) =>
{
  const [ isLoading, setIsLoading ] = useState( false );
  return (
    <div className="min-w-50 max-w-60">
      <div className={` w-auto h-55 grid place-content-center-safe rounded-3xl mb-3 ${isLoading && ' bg-[#FEF5FD]' }`}>
         {/* <div className={`w-auto h-60 grid place-content-center-safe rounded-3xl mb-3 ${isLoading && 'p-3 bg-[#FEF5FD]' }`}> */}
        {!isLoading  && <div className="rounded-3xl w-50 h-50 bg-gray-300 animate-pulse"></div>}
        
        <img src={image} className={`object-cover h-50 object-center rounded-3xl ${isLoading ? 'block' : 'hidden'}`} onLoad={()=> setIsLoading(true)} alt="{name}"/>

      </div>
      <div>
         <NavLink to={`/product/${slug}`}>
        <h4 className={`text-xl font-normal mb-4 line-clamp-1 ${!name && "w-40 h-5 rounded-md bg-gray-300 animate-pulse"}`}>{name}</h4>
</NavLink>
        <div>
          {/* <p className="text-sm font-normal">$2.71/lb</p> */}
          <div className="flex gap-3 text-md items-baseline mb-2">
            <p className={`font-medium text-xl ${!price && 'w-10 h-3 bg-gray-300 animate-pulse rounded-md'}`}>{price && `$${price}`}</p>
            <p className={`line-through text-gray-700 ${!price && 'w-10 h-3 bg-gray-300 animate-pulse rounded-md'}`}>{discount && `$${discount}`}</p>
          </div>
          {/* <div className="flex gap-8 text-md font-normal">
            <p className="text-[#A02B84]">12 Left</p>
            <p>12 Left</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default XsProductDetail;