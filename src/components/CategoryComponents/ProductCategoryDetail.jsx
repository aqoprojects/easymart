import React, { useEffect } from 'react';
import { useCategory } from '../../contexts/CategoryContext';
import ProductDetail from '../ProductComponents/ProductDetail';

const ProductCategoryDetail = () =>
{
  const { state } = useCategory();
  const { sub_categories, selectedSubCategory } = state;

  
 if (selectedSubCategory){
    const sub_catgory_products = sub_categories.find( category => category.category_id === selectedSubCategory )

    if(sub_catgory_products){
      return <section className='mb-5 pl-5'>
            <div className='py-6 px-10'>
              <h1 className='text-2xl font-semibold '>{sub_catgory_products.name}</h1>
            </div>
      
            <div className="flex flex-wrap w-fit max-w-full  gap-4">
              {
                sub_catgory_products.products.results.map( product =>  <ProductDetail  key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug}/> )
              }
      
      
            </div>
      
          </section>
      
    }
  }
  

 


  return (
    <>
      {
        sub_categories.map( category => (
          <section className='mb-5'>
            <div className='py-6 px-10'>
              <h1 className='text-2xl font-semibold '>{category.name}</h1>
            </div>
      
            <div className="grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar w-fit max-w-full">
              {
                category.products.results.map( product => <ProductDetail  key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug}/> )
              }
      
      
            </div>
      
          </section>
        ) )
      }
    </>
  );
};

export default ProductCategoryDetail;