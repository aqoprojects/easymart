import { useEffect } from "react";
import ProductContainer from "../components/ProductComponents/ProductContainer";
import ProductDetail from "../Components/ProductComponents/ProductDetail";
import { useProduct } from "../contexts/ProductCOntext";
import { useParams } from "react-router-dom";
const ProductSearchPage = () => {
  const {searchName} = useParams();
  const {state, fetchSearchProducts} = useProduct();


  useEffect(()=>{
    fetchSearchProducts(searchName)
  }, [])
  return (
    <ProductContainer title={state.searchProducts.query} products={state.searchProducts.results} />
  )
}

export default ProductSearchPage