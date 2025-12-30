import React from 'react';
import PromoDetail from '../components/PromoSliderComponents/PromoDetail';
import ProductDetail from '../components/ProductComponents/ProductDetail';
import ProductSubCategory from '../components/CategoryComponents/ProductSubCategory';
import { TbArrowsExchange } from "react-icons/tb";
import { useCategory } from "../contexts/CategoryContext";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import ProductCategory from '../components/CategoryComponents/ProductCategory';
import ProductCategoryDetail from '../components/CategoryComponents/ProductCategoryDetail';

const ProductCategoryPage = () =>
{
  const { categoryId } = useParams();
  const images = [

    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png",
    "../../src/assets/images/promo/promo1.png", ];
  const { fetchCategories, selectCategory, fetchSubCategories } = useCategory();

  useEffect( () =>
  {
    fetchCategories();
  }, [] );

  useEffect( () =>
  {
    fetchSubCategories(categoryId);
  }, [] );

  return (
    <article className='min-h-100 flex py-6 gap-5'>
      <aside className='hidden bg-white lg:block min-w-[20dvw] px-4'>
        <div className='w-full'>
          <div className='flex justify-between font-semibold items-center-safe mb-4'>
            <p className=' text-2xl'>Filter</p>
            <p className='text-lg text-[#B6349A]'>Reset</p>
          </div>

          <div className='bg-black/2 p-5 rounded-2xl flex flex-col gap-4'>
            <div className="flex flex-col gap-4">
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>Deals</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>New Arrival</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>Near Me</p>
              </div>
            </div>


            <div className="flex flex-col gap-4">
              <div>
                <p className='font-medium text-lg'>Price</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>All</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>$4-12$</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>$4-12$</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>$4 & Above</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className='font-medium text-lg'>Made In</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>All</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>United States</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>China</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>United Kingdom</p>
              </div>
              <div className='flex gap-2 items-center-safe'>
                <div className='w-9 h-5 bg-black/10 rounded-2xl py-0.5 px-0.5'><div className='w-4 h-4 rounded-full bg-white'></div></div>
                <p className='font-medium text-lg'>Africa</p>
              </div>
            </div>


          </div>
        </div>
      </aside>
      <section className='flex-1 w-full lg:max-w-[76dvw]'>
        <div className='justify-center-safe  items-center flex overflow-x-auto snap-x snap-mandatory no-scrollbar  space-x-2 space-y-1.5 py-1'>
          <ProductCategory/>
        </div>
        <div className="flex text-nowrap gap-2 overflow-auto py-1 px-1 no-scrollbar md:hidden my-2 items-center-safe">
          <div className='bg-[#FDEAF8] p-2 rounded-full'>
            <TbArrowsExchange className='size-6' />
          </div>

          <ProductSubCategory categoryName={categoryId}/>
        </div>

        <section>
          <div className='flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:flex'>
            {
              images.map( ( image ) => <PromoDetail image={image} /> )
            }
          </div>
        </section>

        <ProductCategoryDetail/>



      </section>

    </article>
  );
};

export default ProductCategoryPage;