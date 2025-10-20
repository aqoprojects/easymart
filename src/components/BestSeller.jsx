import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ProductDetail from "./ProductComponents/ProductDetail";
import { useEffect, useRef, useState } from "react";
import axiosinstance from "../axiosinstance";

const BestSeller = () =>
{
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [products, setProducts] = useState([])
  const checkScrollPosition = ()=>{
    if(scrollRef.current) {
      const {scrollLeft, scrollWidth, clientWidth} = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  
  const getProducts = async ()=>{
    const response = await axiosinstance.get('/products/');
    setProducts(response.data)
  }

  useEffect(()=> {
    if (products.length < 1) getProducts(); console.log("WOOO");
  }, [])


  useEffect(()=>{
    const scrollContainer = scrollRef.current
    scrollContainer.addEventListener('scroll', checkScrollPosition)
    checkScrollPosition();

    return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
  }, [])

  const scrollForward = ()=> {
    if(scrollRef.current && canScrollRight){
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth'})
    }
  };

  const scrollBackward = ()=> {
    if(scrollRef.current && canScrollLeft){
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth'})
    }
  };



  return (
    <article className=" px-4 mb-30">
      <section className="w-full flex justify-between items-center mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Best Sellers</h2>

        <div className="flex gap-10 items-center-safe justify-center-safe ">
          <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-2 rounded-full font-semibold">
            View All ({products.length > 99 && '+'} {products.length})
            <GoArrowRight className="hidden md:block size-6" />
            <MdArrowForwardIos className="block md:hidden" />
          </button>

          <div className="hidden md:block">
            <button className={`ring-1 ring-black/10 p-2  ${!canScrollLeft&& 'bg-black/3 text-gray-400'} rounded-full  mr-4`} onClick={scrollBackward} 
        disabled={!canScrollLeft}>
              <MdArrowBackIosNew className="size-7"/>
            </button>
            <button className={`ring-1 ring-black/10 ${!canScrollRight && 'bg-black/3 text-gray-400'} p-2 rounded-full`}  onClick={scrollForward} 
        disabled={!canScrollRight}>
              <MdArrowForwardIos className="size-7 " />
            </button>
          </div>
        </div>
      </section>

      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar" ref={scrollRef}>
         { products.length > 0 ?  
            products.slice(0,15).map(product =>  <ProductDetail name={product.name} price={product.price} discount={product.discount_price} image={product.productImage} slug={product.product_slug} />)
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