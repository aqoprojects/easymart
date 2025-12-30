import React from 'react';

const OrderTotal = ({total_amount, display_style}) =>
{
  return (
    <div className={`${display_style}`}>
      <h3 className="font-semibold text-2xl my-3">Order Summary</h3>
      <div className="flex text-gray-600 justify-between items-center-safe my-2">
        <p>Items total</p>
        <p>${total_amount}</p>
      </div>
      <div className="flex text-gray-600 justify-between items-center-safe my-2">
        <p>Delivery Fee</p>
        <p>$5.79</p>
      </div>
    </div>
  );
};

export default OrderTotal;