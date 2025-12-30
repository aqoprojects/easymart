import { useEffect, useState } from "react";
import api from "../../services/api";
import OrderTotal from "./OrderTotal";
import { BsCreditCard2Front } from "react-icons/bs";
import { useAuth } from "../../contexts/AuthContext";
import { useOrder } from "../../contexts/OrderContext";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const OrderSummary = () =>
{
  const {addToCart, updateCart, deleteCart} = useCart()
  const {user} = useAuth();
  const {state, fetchOrderTotal} = useOrder();
  const navigate = useNavigate();
  useEffect(()=>{
    fetchOrderTotal()
  }, [addToCart, updateCart, deleteCart])



  const handleCheckout = async () =>
  {
    if(!user){
      navigate('/login')
    }
    try{
      const response = await api.post('/checkout/');
      const {url} = response.data; 

      if (url) {
        window.location.href = url;
      } else {
        alert('Failed to get checkout URL');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to start checkout. Please try again.');
    }
  };

  return (
    <section className="w-full md:w-100 lg:w-120 md:px-6 lg:px-9 ">
      <div className="mx-auto shadow-xs shadow-black/10 p-7 rounded-2xl" >
        <div className="">
          <div className="w-full bg-gray-100/90 h-1.5 rounded-2xl my-2"> <div className="bg-[#A02B84] h-1.5 w-[50%] rounded-2xl"></div></div>
          <p className="text-center font-medium">Free delivery + saving $3.00 on this order Go to</p>

          <OrderTotal total_amount={state.OrderTotal} display_style={'mt-5 border-b-1 border-gray-200 pb-4 hidden md:block'} />

        </div>
        <div className="font-semibold text-lg mb-4 mt-4">
          <h3 className="flex justify-between items-center-safe">Subtotal <span className="text-gray-600 font-light ">${state.OrderTotal}</span></h3>
        </div>

        <div className="">
          <button className="w-full bg-[#B6349A] flex text-white text-xl font-normal gap-2 items-center-safe justify-baseline px-5 py-3 rounded-full" onClick={handleCheckout}>
          { user ? 
            <>
              <BsCreditCard2Front className="size-7" />
              <p className="flex-1 text-left">Checkout</p>
              <p>${state.OrderTotal}</p>
            </>
          :  <p className="flex-1 text-center font-medium">Login To Checkout</p>}</button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;