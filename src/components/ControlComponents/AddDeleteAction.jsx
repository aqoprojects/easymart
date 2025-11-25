import React, { useReducer } from 'react';
import { HiOutlineTrash } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { useCart } from '../../contexts/CartContext';
const AddDeleteAction = ( { cartItemId, productId, quantity } ) =>
{

  const { updateCart } = useCart();
  const reducer = ( state, action ) =>
  {
    switch ( action.type ) {
      case "increment":
        return { quantity: state.quantity + 1 };
      case "decrement":
        return { quantity: state.quantity > 1 && state.quantity - 1 };
    }
  };
  const [ state, dispatch ] = useReducer( reducer, { quantity: quantity } );


  async function UpdateCart ()
  {
    try {
      const quantity = state.quantity + 1;
      dispatch( { type: "increment" } );
      await updateCart( cartItemId, productId, quantity );
    } catch ( error ) {
      dispatch( { type: "decrement" } );
      console.log( error );
    }

  }

  async function DeleteCart ()
  {
    if ( state.quantity <= 1 ) {
      return;
    }

    try {
      const quantity = state.quantity - 1;
      dispatch( { type: "decrement" } );
      await updateCart( cartItemId, productId, quantity );
    } catch ( error ) {
      dispatch( { type: "increment" } );
      console.log( error );
    }

  }

  return (
    <div className="bg-gray-100/50 flex items-center-safe p-1 gap-1 rounded-3xl">
      <button className="p-2 bg-white rounded-full" onClick={() => DeleteCart()}>
        <HiOutlineTrash className="size-5" />
      </button>
      <p className="px-2 font-semibold">{state.quantity}</p>
      <button className="p-2 bg-[#A02B84] text-white rounded-full" onClick={() => UpdateCart()}><GoPlus className="size-5" /></button>
      <button className="text-[#A02B84] text-sm font-medium lg:order-last order-first">Remove</button>
    </div>
  );
};

export default AddDeleteAction;