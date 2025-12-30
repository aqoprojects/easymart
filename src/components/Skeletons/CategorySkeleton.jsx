import React from 'react'

export const CategorySkeleton = ({mobile_bg, contain_items, items_no_wrap}) => {
   return (
    <div className={`md:bg-black/5 ${mobile_bg && 'bg-black/5'} flex space-x-1.5 px-3 py-1 w-40 ${ contain_items || 'max-w-40'} rounded-full items-center justify-center ${items_no_wrap ||'flex-col'} md:flex-row `}>
      <div className='bg-gray-300 rounded-full min-w-6 h-6 animate-pulse'></div>
      <span className='font-medium text-md pr-2 w-full h-4 bg-gray-300'></span>
    </div>
  );
}

export const CategoryErrorSkeleton = ({children}) => {
   return (
    <div className={'md:bg-black/5  flex space-x-1.5 px-3 py-1 w-auto my-2 rounded-full items-center justify-center flex-col md:flex-row '}>
    {children}
    </div>
  );
}

