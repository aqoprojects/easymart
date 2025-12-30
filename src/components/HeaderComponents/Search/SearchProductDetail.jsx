import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../../contexts/ProductCOntext';
const SearchProductDetail = ({name, setIsSearchActive, setQuery}) =>
{
  
  const navigate = useNavigate()
  const {fetchSearchProducts} = useProduct();
  const redirectToSearchPage = ()=>{
    fetchSearchProducts(name)
    setIsSearchActive(false)
    setQuery(name)
    navigate(`/search/${encodeURIComponent(name)}`)
  }

  return (
    <div className="flex items-center-safe gap-2 bg-gray-100/40 rounded-2xl p-1 cursor-pointer" onClick={redirectToSearchPage}>
      <div className="w-20 bg-white p-2 rounded-2xl">
        <img src="../../src/assets/images/products/orange.png" alt="productName" className="w-100 object-cover" />
      </div>
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default SearchProductDetail;