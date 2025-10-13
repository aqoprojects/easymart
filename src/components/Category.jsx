import { PiDotsThreeOutlineThin } from "react-icons/pi";
import ProductCategory from "./CategoryComponents/ProductCategory";


const Category = () => {
  return (
    <section className='py-2 mx-auto px-4 mt-3 mb-12'>
      <div className='w-full justify-evenly md:justify-center-safe flex-wrap md:flex-nowrap  items-center flex md:overflow-x-auto snap-x snap-mandatory no-scrollbar  space-x-2 space-y-1.5'>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>
        <ProductCategory truncate={'truncate'}/>

        

        <div className='md:bg-black/5 md:hidden  flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row '>
          <PiDotsThreeOutlineThin className="size-6" />
          <span className='font-medium text-md'>View all</span>
        </div>
      </div>
    </section>
  )
}

export default Category