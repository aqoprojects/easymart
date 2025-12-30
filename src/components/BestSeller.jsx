import ProductDetail from "./ProductComponents/ProductDetail";
import { useEffect, useRef, useState } from "react";
import ScrollAction from "./ControlComponents/ScrollAction";
import { useProduct } from "../contexts/ProductCOntext";

const BestSeller = () =>
{
  const scrollRef = useRef( null );
  const [ canScrollLeft, setCanScrollLeft ] = useState( false );
  const [ canScrollRight, setCanScrollRight ] = useState( true );
  const { state, fetchBestSellingProducts } = useProduct();

  const checkScrollPosition = () =>
  {
    if ( scrollRef.current ) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft( scrollLeft > 0 );
      setCanScrollRight( scrollLeft < scrollWidth - clientWidth - 1 );
    }
  };


  useEffect( () =>
  {
    fetchBestSellingProducts();
  }, [] );


  useEffect( () =>
  {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener( 'scroll', checkScrollPosition );
    checkScrollPosition();
    return () => scrollContainer.removeEventListener( 'scroll', checkScrollPosition );
  }, [ state.bestSelling.product ] );




  return (
    <article className=" px-4 mb-30">
      <section className="w-full flex justify-between items-center mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Best Sellers</h2>

        <ScrollAction scrollRef={scrollRef} canScrollRight={canScrollRight} canScrollLeft={canScrollLeft}  totalProducts={state.bestSelling.total}  />
      </section>

      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar" ref={scrollRef}>
         
          {

            state.bestSelling.total > 0 ?
              state.bestSelling.product.map( product => <ProductDetail key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug} /> )
              :
              <>
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
              </>
          }



        </div>
      </section>
    </article>
  );
};

export default BestSeller;