import ProductDetail from "../components/ProductComponents/ProductDetail";
import CartDetail from "../components/CartComponents/CartDetail";

const ProductCartPage = () =>
{

  return (
    <>

      <CartDetail/>      

      <section className="mt-10 mb-18 px-8">
        <div className="w-full flex justify-between items-center mb-5">
          <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-semibold">Recommendations</h3>
        </div>

        <section className="mt-2">
          <div className="w-full grid grid-flow-col gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />
            <ProductDetail />


          </div>
        </section>
      </section>


    </>
  );
};

export default ProductCartPage;