import { PiDotsThreeOutlineThin } from "react-icons/pi";
import ProductCategoryItem from "./CategoryComponents/ProductCategoryItems";
import { useCategory } from "../contexts/CategoryContext";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Category = () => {
  const {state, fetchCategories, resetSelectedCategory} = useCategory();
  const location = useLocation();

  useEffect(()=> {
    fetchCategories();
  }, [])

  useEffect(() => {
    if (state.selectedCategory === null){
      return;
    }
  resetSelectedCategory();
  }, [resetSelectedCategory]);
    
      
  return (
    <section className='py-2 mx-auto px-4 mt-3 mb-12'>
      <div className='w-full justify-evenly md:justify-center-safe flex-wrap md:flex-nowrap  items-center flex md:overflow-x-auto snap-x snap-mandatory no-scrollbar  space-x-2 space-y-1.5'>
        {
          state.categories.length > 0 ? state.categories.map( category => <ProductCategoryItem key={category.category_id} categoryId={category.category_id} truncate={'truncate'} name={category.name} icon={category.Icon} />) : <div className="w-150 h-9 flex justify-center items-center-safe rounded-full bg-gray-200 animate-pulse"></div>
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