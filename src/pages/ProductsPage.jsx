import React, { useEffect, useState } from 'react'
import ProductContainer from '../components/ProductComponents/ProductContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { useProduct } from '../contexts/ProductCOntext';

const ProductsPage = () => {
  const {typeSlug } = useParams();
  const [title, setTitle] = useState('')
  const navigate = useNavigate();
  const {state, fetchBestSellingProducts, fetchTrendingProducts} = useProduct();
  const typeMap = {
    'best-selling': 'bestSelling',
    'trending': 'trending',
  }
  const Type = typeMap[typeSlug];


  useEffect(()=> {
    if (!Type && typeSlug){
      navigate('/products', {replace: true})
    }
    setTitle( Type === 'bestSelling' ? 'Best Selling': 'Trending' )
  }, [typeSlug, navigate])

  useEffect(()=>{
    if (Type === 'bestSelling' && state[Type].length <= 0){
      fetchBestSellingProducts();

    }else if (Type === 'trending' && state[Type].length <= 0){
      fetchTrendingProducts();
    }
  }, [])
  return (
    <ProductContainer title={title} products={state[Type].product} />
  )
}

export default ProductsPage