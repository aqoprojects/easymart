

const XsProductDetail = () =>
{
  return (
    <div className="min-w-50 max-w-60">
      <div className="bg-white w-auto h-58 grid place-content-center-safe rounded-3xl mb-3">
        <img src="../../src/assets/images/products/berry.png" className="object-contain object-center" alt="orange" />

      </div>
      <div>
        <h4 className="text-xl font-medium mb-4">This is product a</h4>

        <div>
          <p className="text-sm font-normal">$2.71/lb</p>
          <div className="flex gap-3 text-md items-baseline mb-2">
            <p className="font-medium text-xl">$99.99</p>
            <p className="line-through text-gray-700">$99.99</p>
          </div>
          <div className="flex gap-8 text-md font-normal">
            <p className="text-[#A02B84]">12 Left</p>
            <p>12 Left</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XsProductDetail;