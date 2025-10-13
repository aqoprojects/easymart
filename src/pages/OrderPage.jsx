import { BsArrowLeft } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { BiCopy } from "react-icons/bi";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { LiaArrowLeftSolid } from "react-icons/lia";
import { LiaArrowRightSolid } from "react-icons/lia";
import { MdLocationPin } from "react-icons/md";
import { NavLink } from "react-router-dom";


const OrderPage = () =>
{
  return (
    <article className=" bg-[#FEFCFE] px-4 md:px-20">
      <section className="py-10 ">
        <div className="flex justify-between items-center-safe">
          <div className="p-2 rounded-full ring-1 ring-black/10">
            <BsArrowLeft className="size-5 md:size-7" />
          </div>
          <NavLink to={"/account/support"} className="flex gap-2 items-center-safe justify-center-safe px-3.5 py-2 rounded-3xl ring-1 ring-[#DE57C4] font-semibold text-[clamp(1rem,3vw,1.2rem)]">
            <TbMessage2 className="size-6"/>
            Help
          </NavLink>
        </div>
      </section>

      <section className="flex gap-10 md:flex-nowrap flex-wrap">
        <div className="flex-1 w-full md:min-w-110">
          <div className=" shadow-sm shadow-black/8 rounded-3xl p-6">
            <div className="flex justify-between items-center-safe mb-10">
              <div>
                <h1 className="font-semibold text-[clamp(1rem,3vw,1.5rem)] mb-1">Order in Progress</h1>
                <p className="text-black/60 text-[clamp(0.8rem,3vw,1rem)] hidden md:block">Order Arrived at Apr 5, 2025, 10:07 AM</p>
                <p className="text-[#DE57C4] font-medium text-[clamp(0.8rem,3vw,1rem)] block md:hidden">Estimated time is 30 min</p>
              </div>
              <button className=" py-1 px-2 md:px-3.5 md:py-2 rounded-3xl ring-1 ring-[#DE57C4] font-normal text-[clamp(0.7rem,3vw,1rem)] text-[#DE57C4] text-nowrap">In Progress</button>
            </div>
          
            <div>
              <div className="flex flex-col justify-center-safe items-center-safe gap-3 mb-12">
                <div className=" rounded-full bg-green-200 p-6">
                  <BsFillCheckCircleFill className="text-green-600 size-10"/>
                </div>
                <p className="font-semibold text-xl">Order is Placed</p>
              </div>
          
              <div className="flex  gap-3 px-5 mb-13">
                <div className="flex-1">
                  <div className="w-full h-2 rounded-2xl bg-[#A02B84] "> </div>
                  <div className="hidden md:flex gap-2 items-center-safe justify-center-safe">
                    <div className="border-1 border-black/10 rounded-full size-4 ">
                      <BsFillCheckCircleFill className="size-4 text-[#A02B84]" />
                    </div>
                    <p className="text-black/70 text-lg ">Apr 5, 2025, 10:0 AM</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-2 rounded-2xl bg-black/5 "> </div>
                  <div className="hidden md:flex gap-2 items-center-safe justify-center-safe">
                    <div className="border-1 border-black/10 rounded-full size-4 ">
                      <BsFillCheckCircleFill className="size-4 text-[#A02B84] hidden" />
                    </div>
                    <p className="text-black/70 text-lg ">Apr 5, 2025, 10:0 AM</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-2 rounded-2xl bg-black/5 "> </div>
                  <div className="hidden md:flex gap-2 items-center-safe justify-center-safe">
                    <div className="border-1 border-black/10 rounded-full size-4 ">
                      <BsFillCheckCircleFill className="size-4 text-[#A02B84] hidden" />
                    </div>
                    <p className="text-black/70 text-lg ">Apr 5, 2025, 10:0 AM</p>
                  </div>
                </div>
                
                
              </div>
          
          
            </div>
          </div>
          
          
          <div className=" shadow-sm shadow-black/8 rounded-3xl p-6 mt-10">
            <div className="flex justify-between items-center-safe">
              <p className="font-semibold text-[clamp(1rem,3vw,1.2rem)]">Item Name</p>
              <p className="font-medium text-[clamp(0.8rem,3vw,1.1rem)]">N.of Items</p>
            </div>
          
            <div>
          
              <div className="flex items-center-safe gap-3 border-b-1 border-black/5 py-4">
                <div className="w-19 bg-gray-100/80 p-2 rounded-2xl">
                  <img src="../../src/assets/images/products/orange.png" className="w-full object-contain" alt="orange" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] min-w-18">Sweet Green Seedless</p>
                  <p className="font-medium text-[#A02B84] md:text-black text-[clamp(0.7rem,3vw,1.2rem)]">$99.99 <span className="text-black/70 font-normal text-[clamp(0.6rem,3vw,1rem)]">$99.99</span></p>
                </div>
          
                <div className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] text-center px-3">
                  12x
                </div>
              </div>
          
              <div className="flex items-center-safe gap-3 border-b-1 border-black/5 py-4">
                <div className="w-19 bg-gray-100/80 p-2 rounded-2xl">
                  <img src="../../src/assets/images/products/orange.png" className="w-full object-contain" alt="orange" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] min-w-18">Sweet Green Seedless</p>
                  <p className="font-medium text-[#A02B84] md:text-black text-[clamp(0.7rem,3vw,1.2rem)]">$99.99 <span className="text-black/70 font-normal text-[clamp(0.6rem,3vw,1rem)]">$99.99</span></p>
                </div>
          
                <div className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] text-center px-3">
                  12x
                </div>
              </div>
          
              <div className="flex items-center-safe gap-3 border-b-1 border-black/5 py-4">
                <div className="w-19 bg-gray-100/80 p-2 rounded-2xl">
                  <img src="../../src/assets/images/products/orange.png" className="w-full object-contain" alt="orange" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] min-w-18">Sweet Green Seedless</p>
                  <p className="font-medium text-[#A02B84] md:text-black text-[clamp(0.7rem,3vw,1.2rem)]">$99.99 <span className="text-black/70 font-normal text-[clamp(0.6rem,3vw,1rem)]">$99.99</span></p>
                </div>
          
                <div className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] text-center px-3">
                  12x
                </div>
              </div>
          
              <div className="flex items-center-safe gap-3 border-b-1 border-black/5 py-4">
                <div className="w-19 bg-gray-100/80 p-2 rounded-2xl">
                  <img src="../../src/assets/images/products/orange.png" className="w-full object-contain" alt="orange" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] min-w-18">Sweet Green Seedless</p>
                  <p className="font-medium text-[#A02B84] md:text-black text-[clamp(0.7rem,3vw,1.2rem)]">$99.99 <span className="text-black/70 font-normal text-[clamp(0.6rem,3vw,1rem)]">$99.99</span></p>
                </div>
          
                <div className="font-semibold text-[clamp(0.8rem,3vw,1.2rem)] text-center px-3">
                  12x
                </div>
              </div>
          
              
          
          
          
            </div>
          
            <div className="mt-5">
              <div className="flex justify-center-safe items-center-safe gap-3 md:gap-6">
                <button>
                  <LiaArrowLeftSolid className="size-7 md:size-11 ring-1 p-1 md:p-3 rounded-full ring-black/5" />
                </button>
                <button className="md:py-2 md:px-4 px-2  ring-1 ring-[#DE57C4] rounded-lg font-semibold">1</button>
                <button className="md:py-2 md:px-4 px-2 ">2</button>
                <button>
                  <LiaArrowRightSolid className="size-7 md:size-11 ring-1 p-1 md:p-3 rounded-full ring-black/5" />
                </button>
              </div>
            </div>
          </div>
        </div>





        <div className="w-full md:w-120 flex flex-col">
          <div className=" shadow-sm shadow-black/8 rounded-3xl p-7 order-last md:order-none">
            <div >
              <p className="font-semibold text-lg mb-1">Order Summary</p>
              <p className="text-black/50 flex gap-2 items-center-safe font-normal text-md">Order Number 
              <span className="text-[#A02B84] flex gap-1 items-center-safe font-semibold">
                <BiCopy className="size-5" />
                #234513
                </span>
              </p>
            </div>
            
            <div>
              <div className="text-md flex justify-between items-center-safe my-5">
                <p>Delivery Fee</p>
                <p>$144</p>
              </div>
              <div className="text-md flex justify-between items-center-safe my-5">
                <p>Delivery Fee</p>
                <p>$144</p>
              </div>
             
            </div>
            
            <div className="text-lg font-semibold flex justify-between items-center-safe mt-8">
              <p>Total</p>
              <p>$144</p>
            </div>
          </div>


          <div className=" shadow-sm shadow-black/8 rounded-3xl p-7 order-first md:order-none">
            <div className="font-semibold text-md mb-2">
              <p>Pay With</p>
            </div>
            <div className="text-[#A02B84] flex gap-2">
              <BsCreditCard2Front className="size-6" />
              <p className=" font-semibold">MasterCard 02132</p>
            </div>
          </div>

          <div className=" shadow-sm shadow-black/8 rounded-3xl p-6">
            <div className="font-semibold text-md mb-2">
              <p>Delivery Address</p>
            </div>
            <div className="text-[#A02B84] flex gap-1 items-center-safe font-semibold">
              <MdLocationPin className="size-5 text-[#A02B84]" />
              <p>Shipping in 07114</p>
            </div>
          </div>
        </div>
      </section>


      <section className="flex justify-center-safe md:justify-between items-center-safe bg-white py-8 px-5  shadow-md shadow-black/5 rounded-3xl my-10  flex-wrap md:flex-nowrap text-center gap-2">
        <p className="font-semibold text-[clamp(1rem,3vw,1.3rem)]">You can cancel your order before it starts being prepared.</p>
        <button className="w-full md:w-auto  px-6 py-3.5 rounded-4xl ring-1 ring-[#DE57C4] font-medium text-[clamp(1rem,3vw,1.2rem)] text-nowrap">Cancel Order</button>
      </section>
    </article>
  );
};

export default OrderPage;