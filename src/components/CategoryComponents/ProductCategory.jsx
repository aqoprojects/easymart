import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ProductCategory = ({truncate, name, icon}) =>
{
  const [isIconLoaded, setIsIconLoaded] = useState(false)

  return (
    <NavLink to={`/category/${name}`} className='md:bg-black/5 flex space-x-1.5 px-3 py-1 w-auto max-w-40 rounded-full items-center justify-center flex-col md:flex-row '>
      {!isIconLoaded && <div className='bg-gray-300 rounded-full min-w-6 h-6 animate-pulse'></div>}

      <img className={`${isIconLoaded ? 'block': 'hidden'} bg-black/5  rounded-full min-w-6 h-6 bg-cover`} src={icon} alt={isIconLoaded && name} onLoad={()=> setIsIconLoaded(true)}/>
      <span className={`font-medium text-md pr-2 ${truncate && truncate} `} >{name}</span>
    </NavLink>
  );
};

export default ProductCategory;