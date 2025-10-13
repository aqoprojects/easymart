import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoLogoPaypal } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";


const AccountPaymentPage = () => {
  return (
    <article className="p-5">
                <div className="mb-5">
                  <h1 className="text-3xl font-semibold">Account Details</h1>
                </div>
              
                <section className="w-full">
              
                  <div className="flex flex-col gap-5 mb-20 md:mb-0">
                    <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                      <div className="flex items-center-safe gap-4">
                        <div>
                          <BsCreditCard2Front className="size-7" />
                        </div>
                        <div>
                          <p className="font-semibold text-xl">MasterCard 6568</p>
                          <p className="text-black/50 text-lg">Exp 12/2025</p>
                        </div>
                      </div>
                      <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                        <HiOutlinePencilAlt className="size-7" />
                        <span className="hidden md:block">Edit</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                      <div className="flex items-center-safe gap-4">
                        <div>
                          <BsCreditCard2Front className="size-7" />
                        </div>
                        <div>
                          <p className="font-semibold text-xl">MasterCard 6568</p>
                          <p className="text-black/50 text-lg">Exp 12/2025</p>
                        </div>
                      </div>
                      <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                        <HiOutlinePencilAlt className="size-7" />
                        <span className="hidden md:block">Edit</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between gap-2 ring-1 ring-black/10 rounded-2xl py-3 px-5">
                      <div className="flex items-center-safe gap-4">
                        <div>
                          <IoLogoPaypal className="size-7" />
                        </div>
                        <div>
                          <p className="font-semibold text-xl">Paypal</p>
                          <p className="text-black/50 text-lg">Exp 12/2025</p>
                        </div>
                      </div>
                      <div className="flex items-center-safe gap-2 text-[#B6349A] font-semibold">
                        <HiOutlinePencilAlt className="size-7" />
                        <span className="hidden md:block">Edit</span>
                      </div>
                    </div>
                  </div>
                
    
                <div className="fixed bottom-5 left-3 right-3 mt-4 md:static">
                  <button className="font-semibold md:text-[#B6349A]  text-xl  bg-[#B6349A] w-full py-3 text-white rounded-4xl md:bg-transparent md:w-auto">+ Add Payment Method</button>
                </div>
                </section>
              </article>
  )
}

export default AccountPaymentPage