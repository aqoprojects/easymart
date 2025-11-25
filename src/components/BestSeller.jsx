import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ProductDetail from "./ProductComponents/ProductDetail";
import { useEffect, useRef, useState } from "react";
import axiosinstance from "../axiosinstance";
import ScrollAction from "./ControlComponents/ScrollAction";

const BestSeller = () =>
{
  const scrollRef = useRef( null );
  const [ canScrollLeft, setCanScrollLeft ] = useState( false );
  const [ canScrollRight, setCanScrollRight ] = useState( true );
  const [ products, setProducts ] = useState( {
    'total_bsProducts': '',
    'best_selling': [],
  } );
  const checkScrollPosition = () =>
  {
    if ( scrollRef.current ) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft( scrollLeft > 0 );
      setCanScrollRight( scrollLeft < scrollWidth - clientWidth - 1 );
    }
  };


  const getProducts = async () =>
  {
    const response = await axiosinstance.get( '/products/' );
    setProducts( {
      'total_bsProducts': response.data.total_bsProducts,
      'best_selling': response.data.best_selling,
      'bs': []
    } );
    // console.log(response.data.best_selling.length);
    // response.data.best_selling.map(p => console.log(p))
  };

  useEffect( () =>
  {
    getProducts();
  }, [] );


  useEffect( () =>
  {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener( 'scroll', checkScrollPosition );
    checkScrollPosition();

    return () => scrollContainer.removeEventListener( 'scroll', checkScrollPosition );
  }, [ products ] );



  return (
    <article className=" px-4 mb-30">
      <section className="w-full flex justify-between items-center mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Best Sellers</h2>

        <ScrollAction scrollRef={scrollRef} canScrollRight={canScrollRight} canScrollLeft={canScrollLeft}  totalProducts={products.total_bsProducts}  />
      </section>

      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar" ref={scrollRef}>
          {/* {console.log("wwe",products.length)} */}
          {

            products.total_bsProducts > 0 ?
              products.best_selling.map( product => <ProductDetail key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug} /> )
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