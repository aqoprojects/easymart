import React from 'react';
import { BsCreditCard2Front } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

const CheckoutPage = () =>
{
  return (
    <article className='min-h-100 flex-wrap md:flex-nowrap w-full flex gap-10 lg:gap-20 px-2 md:px-8 lg:px-20 pt-10'>
      <section className='flex-1 w-full shadow-xs md:shadow-md shadow-black/8 p-5 rounded-3xl md:min-w-100'>
        <div className='flex gap-2 items-center-safe mb-10 flex-wrap'>
          <div className='p-3 rounded-full bg-[#FDEAF8] text-[#A02B84]'>
            <BsCreditCard2Front className="size-6" />
          </div>
          <h1 className='font-semibold text-3xl flex-1'>Checkout</h1>
          <div className='flex gap-1 items-center-safe '>
            <MdLocationPin className="size-5 " />
            <p className='text-lg font-semibold'>Deliver Tomorrow, Sep 17, 8am-10am</p>
          </div>
        </div>

        <div className='ring-1 ring-gray-200 px-6 rounded-2xl py-4 mb-6'>
          <div className='flex items-center-safe justify-between mb-6'>
            <div className='flex gap-1 items-center-safe'>
              <p className='font-semibold text-xl'>Delivery info </p>
              <IoIosInformationCircleOutline className='size-6 transform rotate-180' />
            </div>
            <MdArrowForwardIos className='size-6' />
          </div>

          <div className='flex items-center-safe gap-3 flex-wrap'>
            <p className='text-black/70 text-md'>Deliver to</p>
            <p className='text-[#A02B84] flex gap-1 items-center-safe font-semibold'>
              <MdLocationPin  className='size-6'/>
              2118 Thorindge Cir.Syracus, Connecticut 35624
            </p>
          </div>
        </div>

        <div className='ring-1 ring-gray-200 px-6 rounded-2xl py-4 mb-6'>
          <div className='flex items-center-safe justify-between mb-6'>
            <div className='flex gap-1 items-center-safe'>
              <p className='font-semibold text-xl'>Payment Method</p>
              <IoIosInformationCircleOutline className='size-6' />
            </div>
            <MdArrowForwardIos className='size-6' />
          </div>

          <div className='flex items-center-safe gap-3'>
            <p className='text-black/70 text-md'>Pay With</p>
            <p className='text-[#A02B84] flex gap-2 items-center-safe font-semibold'>
              <BsCreditCard2Front />
              MasterCard ***** 3434
            </p>
          </div>
        </div>


        <div className='ring-1 ring-gray-200 px-6 rounded-2xl py-4 mb-6'>
          <div>
            <div className='flex gap-1 items-center-safe  mb-6'>
              <p className='font-semibold text-xl'>Review Order</p>
              <IoIosInformationCircleOutline className='size-6' />
            </div>
            {/* <MdArrowForwardIos className='size-6' /> */}
          </div>

          <div className='flex items-baseline-last justify-between bg-gray-100/70 p-3 rounded-3xl'>
            <div className='flex flex-wrap items-center-safe gap-3'>
              <div className='w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              <div className='w-18 p-2 bg-white rounded-xl'>
                <img src="../../src/assets/images/products/orange.png" className='w-full object-contain' alt='product' />
              </div>
              
              <div className=' p-4 bg-white rounded-xl'>
                <p className='font-medium text-xl'>+12</p>
              </div>
            </div>
            
              <MdArrowForwardIos className='size-6' />
          </div>
        </div>
      </section>


      <section className='md:max-w-100 md:min-w-60 shadow-xl md:shadow-md shadow-black/8 p-5 rounded-3xl'>
        <div className='mb-4 '>
          <h2 className='text-xl font-normal'>Order Summary</h2>
        </div>
        <div className='border-b-1 border-gray-100 mb-5'>
          <div className='flex justify-between mb-2'>
            <p className='text-black/70'>Delivery fee</p>
            <p className='font-medium'>$4.78</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='text-black/70'>Service fee</p>
            <p className='font-medium'>$4.78</p>
          </div>
          <div className='flex justify-between mb-2'>
            <p className='text-black/70'>Items total</p>
            <p className='font-medium'>$4.78</p>
          </div>
        </div>

        <div>
          <div className='mb-4'>
            <h2 className='text-xl font-normal'>Delivery Tip</h2>
            <p className='text-black/70 text-md'>Your delivery person keeps 100% of tips</p>
          </div>

          <div className='flex flex-wrap items-center-safe gap-4 border-b-1 border-gray-100 mb-1 pb-5'>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$5</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$10</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$15</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$15</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$20</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>$30</button>
            <button className='px-3 py-1 bg-black/3 font-normal rounded-xl'>Other</button>
          </div>

          <div className='flex justify-between items-center-safe mb-5 border-b-1 border-gray-100 py-3'>
            <p className='text-lg font-normal'>Coupon</p>
            <button className='text-[#A02B84] font-semibold'>+ Add Coupon</button>
          </div>

          <div>
            <div className='font-semibold text-2xl flex items-center-safe justify-between mb-6'>
              <h3 >Total</h3>
              <p>$30</p>
            </div>
            <p className='text-black/60 text-sm text-center mb-6'>By placing this order, you are agreeing to Terms and Conditions.</p>
            <button className='bg-[#B6349A] px-4 py-3 rounded-3xl font-semibold text-xl text-white w-full'>Place Order</button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default CheckoutPage;