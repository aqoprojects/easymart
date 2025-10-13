import { NavLink } from "react-router-dom";


const ProductDetail = ({fillWidth}) =>
{
  return (
    <div className={`min-w-60  ${fillWidth ? fillWidth :'max-w-60'} `}>
      <div className="bg-[#FEF5FD] w-auto h-60 grid place-content-center-safe rounded-3xl mb-3">
        <img src="../../src/assets/images/products/lime.png" className="object-contain object-center" alt="orange" />

      </div>
      <div>
        <NavLink to={"/product/34234553"}>
          <h4 className="text-2xl font-medium mb-4">This is product a</h4>
        </NavLink>

        <div>
                <p className="text-md font-normal">$2.71/lb</p>
                <div className="flex gap-3 text-xl items-baseline mb-2">
                  <p className="font-light text-2xl">$99.99</p>
                  <p className="line-through text-md text-gray-700">$99.99</p>
                </div>
                <div className="flex gap-8 text-lg font-light">
                  <p className="text-[#A02B84]">12 Left</p>
                  <p>12 Left</p>
                </div>
              </div>
      </div>
    </div>
  );
};

export default ProductDetail;