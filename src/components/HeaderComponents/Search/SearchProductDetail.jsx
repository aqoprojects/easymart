import React, { useContext } from 'react';
import { SearchContext } from './SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchProductDetail = () =>
{
  const {setIsSearchActive, searchValue} = useContext(SearchContext)
  const navigate = useNavigate()
  const redirectToSearchPage = ()=>{
    console.log("wwwe");
    setIsSearchActive(false)
    navigate(`/search/${searchValue}`)
  }

  return (
    <div className="flex items-center-safe gap-2 bg-gray-100/40 rounded-2xl p-1 cursor-pointer" onClick={redirectToSearchPage}>
      <div className="w-20 bg-white p-2 rounded-2xl">
        <img src="../../src/assets/images/products/orange.png" alt="productName" className="w-100 object-cover" />
      </div>
      <p className="font-medium">Fresh bakery</p>
    </div>
  );
};

export default SearchProductDetail;