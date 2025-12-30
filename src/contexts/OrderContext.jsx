import { createContext, useContext, useReducer } from "react";
import OrderTotal from "../components/CartComponents/OrderTotal";
import api from "../services/api";

const OrderContext = createContext();

const initialState = {
  OrderTotal: 0,
}


export const useOrder = ()=> {
  const context = useContext(OrderContext);
  if(!context){
    throw new Error("Order context should be used within it context")
  }
  return context
}

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_ORDER_TOTAL":
      return {...state, OrderTotal: action.payload}

  default:
    return state;
  }

}


export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchOrderTotal = async()=> {
    try{
      const response = await api.get('/orders/');
      dispatch({
        type: "SET_ORDER_TOTAL",
        payload: response.data.total_amount, 
      })
    } catch(err){
      console.log(err);
    }
  }

 return (
  <OrderContext.Provider 
  value={{
    state,
    fetchOrderTotal,
  }}>
    {children}
  </OrderContext.Provider>
 ) 

}