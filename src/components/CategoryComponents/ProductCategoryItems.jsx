import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCategory } from '../../contexts/CategoryContext';
import { useLocation } from 'react-router-dom';

const ProductCategoryItem = ( { truncate, categoryId, name, icon, contain_items, items_no_wrap, mobile_bg } ) =>
{
  const {state, resetSelectedCategory} = useCategory();
  const [ isIconLoaded, setIsIconLoaded,  ] = useState( false );
  
      
  
  return (
    <NavLink to={`/category/${categoryId}`}  className={`md:bg-black/5 ${mobile_bg && 'bg-black/5'} flex space-x-1.5 px-3 py-1 w-auto ${contain_items || 'max-w-40'} rounded-full items-center justify-center ${state.selectedCategory === categoryId && 'ring-1 ring-pink-400 !bg-[#FEF5FD]' } ${items_no_wrap || 'flex-col'} md:flex-row `}>
 
      <img className={`${isIconLoaded ? 'block' : 'hidden'} bg-black/5  rounded-full min-w-6 h-6 bg-cover`} src={icon} alt={name} onLoad={() => setIsIconLoaded( true )} />
      <span className={`font-medium text-md pr-2 ${truncate && truncate} `} >{name}</span>
    </NavLink>
  );
};

export default ProductCategoryItem;