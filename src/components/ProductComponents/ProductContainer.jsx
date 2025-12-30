import React from 'react'
import ProductDetail from './ProductDetail';

const ProductContainer = ({title, products}) => {
  return (
    <article className='min-h-100'>
      <div className='py-6 px-10'>
        <h1 className='text-2xl font-semibold '>{title}</h1>
      </div>

      <section className='w-full px-5 md:pl-10 flex flex-wrap gap-x-3 gap-y-10 items-center-safe justify-center-safe md:justify-normal '>
        {
          products?.map( product =>  <ProductDetail fillWidth={'flex-1 max-w-80'} key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug} />)
        }
       
      </section>

      {/* <section className="w-full flex justify-center-safe items-center-safe gap-3 mt-15 mb-10">
        <button className="bg-[#A02B84]/50 text-white px-4 py-1 font-semibold rounded-sm text-lg" disabled>Previous</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">1</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">2</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">3</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">4</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">5</button>
        <button className="bg-[#A02B84] text-white px-4 py-1 font-semibold rounded-sm text-lg">Next</button>
      </section> */}
    </article>
  )
}

export default ProductContainer