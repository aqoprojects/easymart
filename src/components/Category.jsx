import { PiDotsThreeOutlineThin } from "react-icons/pi";
import ProductCategory from "./CategoryComponents/ProductCategory";
import { useEffect, useState } from "react";
import axiosinstance from "../axiosinstance";


const Category = () => {
  const [productCategories, setProductCategories] = useState([])
  const getProductCategories = async ()=>{
    const resposne = await axiosinstance.get('/categories/')
    setProductCategories(resposne.data)
  }
  useEffect(()=> {
    getProductCategories()
  }, [])
  return (
    <section className='py-2 mx-auto px-4 mt-3 mb-12'>
      <div className='w-full justify-evenly md:justify-center-safe flex-wrap md:flex-nowrap  items-center flex md:overflow-x-auto snap-x snap-mandatory no-scrollbar  space-x-2 space-y-1.5'>
        {
          productCategories.length > 0 ? productCategories.map( category => <ProductCategory key={category.category_id} truncate={'truncate'} name={category.name} icon={category.Icon} />) : <div className="w-150 h-9 flex justify-center items-center-safe rounded-full bg-gray-200 animate-pulse"></div>
        }

        <div className='md:bg-black/5 md:hidden  flex space-x-1.5 px-3 py-1 rounded-full items-center justify-center flex-col md:flex-row '>
          <PiDotsThreeOutlineThin className="size-6" />
          <span className='font-medium text-md'>View all</span>
        </div>
      </div>
    </section>
  )
}

export default Category