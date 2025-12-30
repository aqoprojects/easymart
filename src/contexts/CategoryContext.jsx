import { createContext, useContext, useReducer } from "react";
import api from "../services/api";

const CategoryContext = createContext();

const initialState = {
  categories: [],
  sub_categories: [],
  category_products: [],
  loading: true, 
  error: null,
  selectedCategory: null,
  selectedSubCategory: null,
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("Category Context must be used within CategoryProvider");
  }
  return context;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload, error: null };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload, loading: false };
    case "SET_SUB_CATEGORIES":
      return { ...state, sub_categories: action.payload, loading: false };
    case "SET_CATEGORY_PRODUCTS":
      return { ...state, category_products: action.payload, loading: false };
    case "SELECT_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SELECT_SUB_CATEGORY":
      return { ...state, selectedSubCategory: action.payload };
    default:
      return state;
  }
};

export const CategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCategories = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await api.get("/categories/");  
      dispatch({
        type: "SET_CATEGORIES",
        payload: response.data.results || response.data,  
      });
    } catch (err) {
      console.error("Error fetching categories:", err);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };


  const fetchSubCategories = async (categoryId) => {
    if (!categoryId) return;
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await api.get(`/categories/${categoryId}/children/?include_products=true`);
      dispatch({
        type: "SET_SUB_CATEGORIES",
        payload: response.data.results || response.data,  
      });
      
    } catch (err) {
      console.error("Error fetching subcategories:", err);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  const fetchCategoryProducts = async (subCategoryId, page = 1, pageSize = 20) => {
    if (!subCategoryId) return;
    dispatch({ type: "SET_LOADING", payload: true });
    try {

      const response = await api.get(
        `/categories/${subCategoryId}/products/?page=${page}&page_size=${pageSize}`
      );

      dispatch({
        type: "SET_CATEGORY_PRODUCTS",
        payload: {
          ...response.data,
          subCategoryId,  
        },
      });
    } catch (err) {
      console.error("Error fetching products:", err);
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  const loadMoreProducts = async (subCategoryId, nextPage) => {
    if (!subCategoryId || !nextPage) return;
    try {
      const response = await api.get(
        `/categories/${subCategoryId}/products/?page=${nextPage}&page_size=20`
      );
      dispatch({
        type: "APPEND_CATEGORY_PRODUCTS", 
        payload: {
          results: response.data.results,
          subCategoryId,
          nextPage: nextPage + 1,
        },
      });
    } catch (err) {
      console.error("Error loading more products:", err);
    }
  };

  const selectCategory = (category) => {
    if (state.selectedCategory === category){
      return;
    }
    
    dispatch({ type: "SELECT_CATEGORY", payload: category });
    dispatch({ type: "SELECT_SUB_CATEGORY", payload: null });
    fetchSubCategories(category);  
  };

  const selectSubCategory = (subCategory, page) => {
    dispatch({ type: "SELECT_SUB_CATEGORY", payload: subCategory });
    
  };

  
  const resetSelectedCategory = () => {
    dispatch({ type: "SELECT_CATEGORY", payload: null });
  };
  return (
    <CategoryContext.Provider
      value={{
        state,
        fetchCategories,
        fetchSubCategories,
        fetchCategoryProducts,
        loadMoreProducts,
        selectCategory,
        selectSubCategory,
        resetSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};