import { GoArrowRight } from "react-icons/go";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import ProductDetail from "./ProductComponents/ProductDetail";
import StoreCategory from "./CategoryComponents/StoreCategory";

const TrendingStore = () =>
{
  return (
    <article className="mx-4 px-5 py-8 ring-1  ring-gray-200 rounded-2xl">
      <section className="w-full flex  justify-between items-center px-4 mb-5">
        <h2 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Trending Store</h2>

        <div className="flex gap-10 items-center-safe justify-center-safe ">
          <button className="flex gap-2 items-center-safe justify-center-safe ring-1 ring-[#DE57C4] py-2 px-2 rounded-full font-semibold text-[clamp(0.6rem,3vw,1.1rem)]">
            View All (+40)
            <GoArrowRight className="hidden md:block size-6" />
            <MdArrowForwardIos className="block md:hidden" />
          </button>

        </div>

      </section>

      <section className=" flex  justify-between items-center mb-5">
        <div className="w-full flex justify-between items-center-safe  ">
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

          <div className="hidden lg:block">
            <button className="ring-1 ring-black/10 p-2 rounded-full bg-black/3 mr-4">
              <MdArrowBackIosNew className="size-7 text-gray-400" />
            </button>
            <button className="ring-1 ring-black/10 p-2 rounded-full ">
              <MdArrowForwardIos className="size-7 " />
            </button>
          </div>
        </div>
      </section>



      <section className="mt-2">
        <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">


          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>
          <ProductDetail/>


        </div>
      </section>

    </article>
  );
};

export default TrendingStore;