import { BsArrowRight } from "react-icons/bs";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { IoCheckmark } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const AccountPreferencePage = () =>
{

  const [currentPreferencePage, setCurrentPreferencePage] = useState(1)
  const moveDirection = ()=>{
    setCurrentPreferencePage(currentPreferencePage > 1 ? 1 : 2)
  }
  return (
    <>
      <article className={`${currentPreferencePage < 2 ? 'block': 'hidden'} px-3 md:px-20 py-10`}>
        <div className='w-full bg-black/5 h-3 rounded-2xl'>
          <div className='bg-[#B6349A] w-[50%] h-full rounded-2xl'></div>
        </div>

        <section className="flex flex-col gap-8">
          <div className='w-full flex justify-between items-center-safe'>
            <h1 className='text-3xl font-bold'>What kind of meals do you prefer?</h1>
            <button className="text-black/60 font-medium text-xl flex items-center-safe gap-0.5">skip <RiArrowRightDoubleLine className="size-6 mt-0.5" /></button>
          </div>
          <div className="flex justify-center items-center-safe">
            <div className='flex flex-wrap justify-center-safe max-w-150 gap-5'>

              <div className='w-27 h-30 ring-1 ring-[#B6349A] rounded-2xl flex items-center-safe justify-center flex-col bg-[#FEF5FD]'>
                <img src="../../src/assets/images/meals/mushroom.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Mushroom</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/fish.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Fish</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/ham.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Ham</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/meat.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Meat</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/spaghetti.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Spaghetti</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/shrimp.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Shrimp</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/pizza.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Pizza</p>
              </div>
              <div className='w-27 h-30  rounded-2xl flex items-center-safe justify-center flex-col bg-black/5 '>
                <img src="../../src/assets/images/meals/fish.png" alt="meals" className='size-10' />
                <p className="font-semibold text-lg mt-3">Fish</p>
              </div>
            </div>
            <div className='min-w-80 w-120 hidden md:block'>
              <img src="../../src/assets/images/setup/setup1.png" alt="all in one" className='w-full object-cover' />
            </div>
          </div>

          <div>
            <button className="bg-[#B6349A] text-white flex gap-2 py-3.5 px-8 justify-center-safe items-center-safe font-semibold text-xl rounded-4xl" onClick={moveDirection}>Coutinue <BsArrowRight className="size-6" /> </button>
          </div>
        </section>
      </article>


      <article className={`${currentPreferencePage >= 2 ? 'block': 'hidden'}  px-3 md:px-20 py-10`}>
        <div className="p-2 rounded-full ring-1 ring-black/30 w-fit mb-6" onClick={moveDirection}>
          <GoArrowLeft className="size-7" />
        </div>
        <div className='w-full bg-black/5 h-3 rounded-2xl mb-15'>
          <div className='bg-[#B6349A] w-full h-full rounded-2xl'></div>
        </div>

        <section>
          <div className="flex justify-center-safe">
            <div className="flex flex-col gap-6">
              <div className='w-full flex md:justify-between md:items-center-safe  md:flex-row flex-col'>
                <h1 className='text-3xl font-bold'>What are your goals with EasyMart?</h1>
                <button className="text-black/60 font-medium text-xl flex items-center-safe gap-0.5 order-first md:order-none">skip <RiArrowRightDoubleLine className="size-6 mt-0.5" /></button>
              </div>

              <div className="flex  flex-wrap max-w-180 gap-3">
                <button className="flex gap-2 items-center-safe ring-1 ring-[#B6349A] bg-[#FEF5FD] px-4 py-3 rounded-3xl font-semibold">Save time on Shopping  <IoCheckmark className="size-6" /> </button>
                <button className="flex gap-2 items-center-safe bg-black/5 px-4 py-3 rounded-3xl font-semibold">Eat healthier <IoCheckmark className="size-6" /></button>
                <button className="flex gap-2 items-center-safe bg-black/5 px-4 py-3 rounded-3xl font-semibold">Try new recipes <IoCheckmark className="size-6" /></button>
                <button className="flex gap-2 items-center-safe bg-black/5 px-4 py-3 rounded-3xl font-semibold">Save money <IoCheckmark className="size-6" /></button>
                <button className="flex gap-2 items-center-safe bg-black/5 px-4 py-3 rounded-3xl font-semibold">Simplify meal planning <IoCheckmark className="size-6" /></button>
                <button className="flex gap-2 items-center-safe bg-black/5 px-4 py-3 rounded-3xl font-semibold">Reduce food waste <IoCheckmark className="size-6" /></button>
              </div>
            </div>
            <div className="hidden md:block max-w-140">
              <img src="../../src/assets/images/setup/setup2.png" className="w-full object-cover" alt="setup" />
            </div>
          </div>
          <div className="mt-10 md:mt-5">
             <NavLink to={"/account"} className="bg-[#B6349A] text-white flex gap-2 py-3.5 px-8 justify-center-safe items-center-safe font-semibold text-xl rounded-4xl">Coutinue <BsArrowRight className="size-6" /> </NavLink>
          </div>
        </section>
      </article>
    </>
  );
};

export default AccountPreferencePage;