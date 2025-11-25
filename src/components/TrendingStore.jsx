import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ProductDetail from "./ProductComponents/ProductDetail";
import StoreCategory from "./CategoryComponents/StoreCategory";
import { useEffect, useRef, useState } from "react";
import axiosinstance from "../axiosinstance";
import ScrollAction from "./ControlComponents/ScrollAction";

const TrendingStore = () =>
{
  const scrollRef = useRef( null );
  const [ canScrollLeft, setCanScrollLeft ] = useState( false );
  const [ canScrollRight, setCanScrollRight ] = useState( true );
  const [trendingProducts, setTrendingProducts]= useState({
    total_tProducts: 0,
    trending: []
  })

  const getTrendingProducts = async ()=>{
    const response = await axiosinstance.get("/products/")
    setTrendingProducts(
      {
        total_tProducts: response.data.total_tProducts,
        trending: response.data.trending
      }
    )
  }

  useEffect(()=>{
    getTrendingProducts()
  }, [])

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
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener( 'scroll', checkScrollPosition );
    checkScrollPosition();

    return () => scrollContainer.removeEventListener( 'scroll', checkScrollPosition );
  }, [ trendingProducts ] );
  return (
    <article className="mx-4 px-5 py-8 ring-1  ring-gray-200 rounded-2xl">
      <section className="w-full flex  justify-between items-center px-4 mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Trending Store</h2>

        <div className="flex gap-10 items-center-safe justify-center-safe ">
          <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-2 rounded-full font-semibold text-[clamp(0.6rem,3vw,1.1rem)]">
            View All ({trendingProducts.total_tProducts > 99 ? '+ 99': trendingProducts.total_tProducts})
            <GoArrowRight className="hidden md:block size-6" />
            <MdArrowForwardIos className="block md:hidden" />
          </button>

        </div>

      </section>

      <section className=" flex  justify-between items-center mb-5">
        <div className="w-full flex justify-between items-center-safe  " >
          <div className="flex text-nowrap gap-2 overflow-auto py-1 px-1 lg:flex-wrap lg:overflow-visible lg:max-w-180 no-scrollbar">
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
            <StoreCategory/>
          </div>

          <ScrollAction scrollRef={scrollRef} canScrollRight={canScrollRight} canScrollLeft={canScrollLeft}  totalProducts={trendingProducts.total_tProducts} disabled_view={true}  />
        </div>
      </section>



      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar" ref={scrollRef}>


          {
            
            trendingProducts.total_tProducts > 0 ?  
            trendingProducts.trending.map(product =>  <ProductDetail key={product.product_id} name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug} />)
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

export default TrendingStore;