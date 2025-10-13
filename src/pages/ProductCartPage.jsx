import { IoCartOutline } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { BsCreditCard2Front } from "react-icons/bs";
import { HiMinus } from "react-icons/hi2";
import ProductDetail from "../components/ProductComponents/ProductDetail";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

const ProductCartPage = () =>
{
  const navigate = useNavigate()
  const handleCheckout = ()=>{
    navigate("/order/2345")
  }

  const reducer = (state, action)=> {
    switch(action.type){
      case "increment":
        return {count: state.count + 1}
      case "decrement":
        return {count: state.count > 0 && state.count - 1}
    }
  }

  const [state, dispatch] = useReducer(reducer, {count: 0})
  return (
    <>
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
            <div className="mt-5 block md:hidden pb-4 px-2">
              <h3 className="font-semibold text-2xl my-3">Order Summary</h3>
              <div className="flex text-gray-600 justify-between items-center-safe my-2">
                <p>Items total</p>
                <p>$128.79</p>
              </div>
              <div className="flex text-gray-600 justify-between items-center-safe my-2">
                <p>Delivery Fee</p>
                <p>$5.79</p>
              </div>
            </div>
          </div>

          <div className="ring-1 ring-gray-200/50 p-6 rounded-2xl md:min-w-100 lg:min-w-120">
            <div className="text-gray-600 font-medium"><p>Items Name</p></div>
            <div className="p-3 flex flex-col gap-8">
              <div className="flex items-center-safe gap-3 lg:flex-nowrap flex-wrap justify-between">
                <div className="flex items-center-safe">
                  <div className="bg-gray-100/50 w-20 rounded-2xl">
                    <img src="../../src/assets/images/products/orange.png" className="w-full object-contain object-center" alt="product" />
                  </div>

                  <div className="font-medium flex-1">
                    <p className=" ">Sweet Green Seedless Grapes 1.5-2 lb</p>
                    <p className="text-[#A02B84] font-semibold">$99.99  <span className="text-gray-400 font-light ml-2">$99.99</span></p>
                  </div>
                </div>

                <div className="flex w-full lg:w-70 justify-between items-center-safe gap-1 ">
                  <div className="bg-gray-100/50 flex items-center-safe p-1 gap-1 rounded-3xl">
                    <button className="p-2 bg-white rounded-full" onClick={()=> dispatch({type: "decrement"})}>
                      <HiOutlineTrash className="size-5" />
                    </button>
                    <p className="px-2 font-semibold">{state.count || 0}</p>
                    <button className="p-2 bg-[#A02B84] text-white rounded-full" onClick={()=> dispatch({type: "increment"})}><GoPlus className="size-5" /></button>
                    <button className="text-[#A02B84] text-sm font-medium lg:order-last order-first">Remove</button>
                  </div>

                  <p className="font-medium text-xl order-first lg:order-last">$25.98</p>
                </div>
              </div>
              <div className="flex items-center-safe gap-3 lg:flex-nowrap flex-wrap justify-between">
                <div className="flex items-center-safe">
                  <div className="bg-gray-100/50 w-20 rounded-2xl">
                    <img src="../../src/assets/images/products/orange.png" className="w-full object-contain object-center" alt="product" />
                  </div>

                  <div className="font-medium flex-1">
                    <p className=" ">Sweet Green Seedless Grapes 1.5-2 lb</p>
                    <p className="text-[#A02B84] font-semibold">$99.99  <span className="text-gray-400 font-light ml-2">$99.99</span></p>
                  </div>
                </div>

                <div className="flex w-full lg:w-70 justify-between items-center-safe gap-1 ">
                  <div className="bg-gray-100/50 flex items-center-safe p-1 gap-1 rounded-3xl">
                    <button className="p-2 bg-white rounded-full">
                      <HiOutlineTrash className="size-5" />
                    </button>
                    <p className="px-2 font-semibold">{state.count || 0}</p>
                    <button className="p-2 bg-[#A02B84] text-white rounded-full"><GoPlus className="size-5" /></button>
                    <button className="text-[#A02B84] text-sm font-medium lg:order-last order-first">Remove</button>
                  </div>

                  <p className="font-medium text-xl order-first lg:order-last">$25.98</p>
                </div>
              </div>
              <div className="flex items-center-safe gap-3 lg:flex-nowrap flex-wrap justify-between">
                <div className="flex items-center-safe">
                  <div className="bg-gray-100/50 w-20 rounded-2xl">
                    <img src="../../src/assets/images/products/orange.png" className="w-full object-contain object-center" alt="product" />
                  </div>

                  <div className="font-medium flex-1">
                    <p className=" ">Sweet Green Seedless Grapes 1.5-2 lb</p>
                    <p className="text-[#A02B84] font-semibold">$99.99  <span className="text-gray-400 font-light ml-2">$99.99</span></p>
                  </div>
                </div>

                <div className="flex w-full lg:w-70 justify-between items-center-safe gap-1 ">
                  <div className="bg-gray-100/50 flex items-center-safe p-1 gap-1 rounded-3xl">
                    <button className="p-2 bg-white rounded-full">
                      <HiOutlineTrash className="size-5" />
                    </button>
                    <p className="px-2 font-semibold">1</p>
                    <button className="p-2 bg-[#A02B84] text-white rounded-full"><GoPlus className="size-5" /></button>
                    <button className="text-[#A02B84] text-sm font-medium lg:order-last order-first">Remove</button>
                  </div>

                  <p className="font-medium text-xl order-first lg:order-last">$25.98</p>
                </div>
              </div>
              <div className="flex items-center-safe gap-3 lg:flex-nowrap flex-wrap justify-between">
                <div className="flex items-center-safe">
                  <div className="bg-gray-100/50 w-20 rounded-2xl">
                    <img src="../../src/assets/images/products/orange.png" className="w-full object-contain object-center" alt="product" />
                  </div>

                  <div className="font-medium flex-1">
                    <p className=" ">Sweet Green Seedless Grapes 1.5-2 lb</p>
                    <p className="text-[#A02B84] font-semibold">$99.99  <span className="text-gray-400 font-light ml-2">$99.99</span></p>
                  </div>
                </div>

                <div className="flex w-full lg:w-70 justify-between items-center-safe gap-1 ">
                  <div className="bg-gray-100/50 flex items-center-safe p-1 gap-1 rounded-3xl">
                    <button className="p-2 bg-white rounded-full">
                      <HiOutlineTrash className="size-5" />
                    </button>
                    <p className="px-2 font-semibold">1</p>
                    <button className="p-2 bg-[#A02B84] text-white rounded-full"><GoPlus className="size-5" /></button>
                    <button className="text-[#A02B84] text-sm font-medium lg:order-last order-first">Remove</button>
                  </div>

                  <p className="font-medium text-xl order-first lg:order-last">$25.98</p>
                </div>
              </div>


            </div>
          </div>


        </section>


        <section className="w-full md:w-120 md:px-15 ">
          <div className="mx-auto shadow-xs shadow-black/10 p-7 rounded-2xl" >
            <div className="">
              <div className="w-full bg-gray-100/90 h-1.5 rounded-2xl my-2"> <div className="bg-[#A02B84] h-1.5 w-[50%] rounded-2xl"></div></div>
              <p className="text-center font-medium">Free delivery + saving $3.00 on this order Go to</p>
              <div className="mt-5 border-b-1 border-gray-200 pb-4 hidden md:block">
                <h3 className="font-semibold text-2xl my-3">Order Summary</h3>
                <div className="flex text-gray-600 justify-between items-center-safe my-2">
                  <p>Items total</p>
                  <p>$128.79</p>
                </div>
                <div className="flex text-gray-600 justify-between items-center-safe my-2">
                  <p>Delivery Fee</p>
                  <p>$5.79</p>
                </div>
              </div>
            </div>
            <div className="font-semibold text-lg mb-4 mt-4">
              <h3 className="flex justify-between items-center-safe">Subtotal <span className="text-gray-600 font-light ">$134.56</span></h3>
            </div>

            <div className="">
              <button className="w-full bg-[#B6349A] flex text-white text-xl font-normal gap-2 items-center-safe justify-baseline px-5 py-3 rounded-full" onClick={handleCheckout}>
                <BsCreditCard2Front className="size-7" />
                <p className="flex-1 text-left">Checkout</p>
                <p>$134.56</p>
              </button>
            </div>
          </div>
        </section>


      </article>

      <section className="mt-10 mb-18 px-8">
        <div className="w-full flex justify-between items-center mb-5">
          <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Recommendations</h3>
        </div>

        <section className="mt-2">
          <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />


          </div>
        </section>
      </section>


    </>
  );
};

export default ProductCartPage;