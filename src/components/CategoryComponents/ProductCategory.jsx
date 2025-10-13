import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductCategory = ({truncate}) =>
{
  return (
    <NavLink to={"/category/bread"} className='md:bg-black/5 flex space-x-1.5 px-3 py-1 w-auto max-w-40 rounded-full items-center justify-center flex-col md:flex-row '>
      <img className='bg-black/5 rounded-full' src="../../src/assets/images/icons/bread.png" alt="bread" />
      <span className={`font-medium text-md pr-2 ${truncate && truncate} `} >Bread</span>
    </NavLink>
  );
};

export default ProductCategory;