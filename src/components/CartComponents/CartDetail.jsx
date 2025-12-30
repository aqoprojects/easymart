import { IoCartOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CartProuduct from './CartProuduct'
import OrderSummary from './OrderSummary';
import { useCart } from '../../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import OrderTotal from "./OrderTotal";

const CartDetail = () => {
  
  const { cartItems, orderItems, cartTotal } = useCart();

  if (!cartItems || cartItems.length <= 0) {
    return (
      <article className='min-h-100 flex gap-3 pt-15 lg:px-15 md:flex-nowrap flex-wrap'>
        <section className="flex-1">
          <div className="p-4 ring-1 ring-gray-200/50 rounded-2xl  mb-10">
            <div className="flex items-center-safe gap-5 ">
              <div className="rounded-full bg-[#FDEAFB] p-2"><IoCartOutline className="size-8 text-[#A02B84]" /></div>
              <div className="flex-1">
                <p className="font-semibold text-2xl">No Cart Available</p>
                <p className="flex text-[#A02B84] gap-1 items-center-safe font-medium"><MdLocationPin className="size-5 " /> Shopping in 07114</p>
              </div>
              <NavLink to={'/'} className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-4 rounded-full font-semibold text-[clamp(0.6rem,3vw,1.1rem)]">
                Start Shopping
                <MdOutlineKeyboardArrowRight className="size-5" />
              </NavLink>

            </div>
            
          </div>

        </section>

      </article>
    )
  }

  return (
    <article className='min-h-100 flex gap-3 pt-15 lg:px-15 md:flex-nowrap flex-wrap'>
        <section className="flex-1">
          <div className="p-4 ring-1 ring-gray-200/50 rounded-2xl  mb-10">
            <div className="flex items-center-safe gap-5 ">
              <div className="rounded-full bg-[#FDEAFB] p-2"><IoCartOutline className="size-8 text-[#A02B84]" /></div>
              <div className="flex-1">
                <p className="font-semibold text-2xl">Local Market</p>
                <p className="flex text-[#A02B84] gap-1 items-center-safe font-medium"><MdLocationPin className="size-5 " /> Shopping in 07114</p>
              </div>
              <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-4 rounded-full font-semibold text-[clamp(0.6rem,3vw,1.1rem)]">
                <LuCalendarDays />
                Wed 123
                <MdOutlineKeyboardArrowRight className="size-5" />
              </button>

            </div>
            <OrderTotal total_amount={300} display_style={"mt-5 block md:hidden pb-4 px-2"} />
          </div>

          <div className="ring-1 ring-gray-200/50 p-6 rounded-2xl md:min-w-100 lg:min-w-120">
            <div className="text-gray-600 font-medium"><p>Items Name</p></div>
            <div className="p-3 flex flex-col gap-8">

              {cartItems.map( ( item ) =>
              {
                return (
                  <CartProuduct key={item.cart_item_id} id={item.cart_item_id} product_id={item.product.product_id } product_picture={item.product.productImage} product_name={item.product.name} product_price={item.product.price} cart_quantity={item.quantity} orderItems={orderItems} />
                )

              } )}


            </div>
          </div>


        </section>


        <OrderSummary />


      </article>
  )
}

export default CartDetail