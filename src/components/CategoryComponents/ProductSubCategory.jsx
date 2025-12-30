import React, { useEffect, useState } from 'react'
import { useCategory } from '../../contexts/CategoryContext'


const ProductSubCategory = () => {
  const {state, selectSubCategory} = useCategory();
  const {sub_categories, selectedSubCategory, loading: isLoading, error: fetchError} = state
  const [page, setPage] = useState(1);

  const handleSubCategoryClick = (subCategory) => {
    if (selectedSubCategory === subCategory){
      selectSubCategory(null, page); 
    } else{
    selectSubCategory(subCategory, page); 
    setPage( (prev)=> prev + 1);
    }
    
  };


  return (
      <>
        {
          sub_categories.length > 0 ? sub_categories.map( category => <button className={`px-4 py-2 ring-1 ring-gray-200 hover:ring-[#DE57C4] rounded-full  ${selectedSubCategory === category.category_id && 'bg-[#B6349A] text-white' }`} onClick={()=> handleSubCategoryClick(category.category_id)}>{category.name}</button> ) : <div className="w-150 h-9 flex justify-center items-center-safe rounded-full bg-gray-200 animate-pulse"></div>
        }
      </>
  )
}

export default ProductSubCategory