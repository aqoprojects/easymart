import { useEffect } from 'react'
import { useCategory } from '../../contexts/CategoryContext';
import ProductCategoryItem from './ProductCategoryItems';
import { CategoryErrorSkeleton, CategorySkeleton } from '../Skeletons/CategorySkeleton';
import { useParams, useLocation } from 'react-router-dom';

const ProductCategory = () => {
  const {categoryId} = useParams();
  const location = useLocation()
  const { state, selectCategory,  } = useCategory();
  const { categories,  loading: isLoading, error: fetchError } = state;

  useEffect(()=>{
    if (location.pathname.includes('/category/')){
      
    selectCategory(categoryId); 
    }
    }, [location.pathname]
  )

  const handleCategoryClick = (category) => {
    selectCategory(category);  
  };
  

  if (fetchError && !isLoading) {
    return (
      <CategoryErrorSkeleton>
        Failed to load categories
      </CategoryErrorSkeleton>
    );
  }
  
  if (categories.length === 0) {
    return (
      <>
        {[ ...Array( 6 ) ].map( ( _, i ) => (
          <CategorySkeleton key={i} items_no_wrap={'flex-row text-nowarp'} />
        ) )}
      </>
    );
  }

  return (
    <>
      {
       categories.map( category => (<div onClick={()=> handleCategoryClick(category.category_id)}><ProductCategoryItem key={category.category_id}  categoryId={category.category_id} truncate={'text-nowrap'} slug={category.slug} name={category.name} icon={category.Icon} contain_items={'w-auto'} items_no_wrap={'flex-row'} mobile_bg={'true'} /> </div>) )
      }
    </>
  )
}

export default ProductCategory