import { createContext, useContext, useReducer } from "react";
import api from "../services/api";


const ProductContext = createContext();

const initialState = {
  bestSelling: [],
  trending: [],

  searchProducts: [],
};

export const useProduct = () =>
{
  const context = useContext( ProductContext );
  if ( !context ) {
    throw new Error( 'useProduct must be used with ProductProvider' );
  }
  return context;
};

  const reducer = ( state, action ) =>
  {
    switch ( action.type ) {
      case "SET_BEST_SELLING":
        return { ...state, bestSelling: action.payload };

      case "SET_TRENDING":
        return { ...state, trending: action.payload };

      case "SET_SEARCH_PRODUCTS":
        return { ...state, searchProducts: action.payload };

      default:
        return state;
    }
  };

export const ProductProvider = ( { children } ) =>
{

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchBestSellingProducts = async () =>
  {
    try {
      const response = await api.get( '/products/?type=best_selling' );
      dispatch({
        type: "SET_BEST_SELLING",
        payload: response.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  };


  const fetchTrendingProducts = async ()=>{
    try {
      const response = await api.get('/products/?type=trending');
      dispatch({
        type: "SET_TRENDING",
        payload: response.data.results, 
      });
    } catch (err){
      console.log(err);
    }
  }


  const fetchSearchProducts = async (search_value)=> {
    try{
      const response = await api.get(`search/?q=${encodeURIComponent(search_value)}`)
      dispatch({
        type: "SET_SEARCH_PRODUCTS",
        payload: response.data
      })
    } catch(err){
      console.log(err);
    }
  }

  

   return (
    <ProductContext.Provider
      value={{
        state,
        fetchBestSellingProducts,
        fetchTrendingProducts,
        fetchSearchProducts, 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};