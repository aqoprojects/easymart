import React from 'react';

const CartProductItem = ({id, product_picture, product_name, product_price,}) =>
{
  return (
    <div className="flex items-center-safe gap-2 " key={id}>
      <div className="bg-gray-100/50 w-20 rounded-2xl ">
        <img src={product_picture} className="w-full object-contain object-center" alt="product" />
      </div>

      <div className="font-medium flex-1 md:min-w-40 W-FULL">
        <p className="">{product_name}</p>
        <p className="text-[#A02B84] font-semibold">${product_price}  <span className="text-gray-400 font-light ml-2">$99.99</span></p>
      </div>
    </div>
  );
};

export default CartProductItem;