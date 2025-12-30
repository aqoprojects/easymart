import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import api from '../services/api';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartTotal, setCartTotal] = useState(0); 
  const [cartItems, setCartItems] = useState([]); 
  const [orderItems, setOrderItems] = useState([]); 
  const { user } = useAuth()
  
  const fetchCart = async () => {
    try {
      const response = await api.get('/carts/', { withCredentials: true });
      const items  = response.data.cart_cartitems_cart_id; 
      const order_items  = response.data.order_items; 
      const total_items  = response.data.total_items; 
      setCartItems(items || []);
      setOrderItems(order_items || []);
      setCartTotal(total_items || 0); 
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  
  const addToCart = async (productId, quantity = 1) => {
    try { 
      setCartTotal(prev => prev + quantity);
      const response = await api.post('/add_cart/', { 
        product_id: productId,
        quantity: quantity,
      }, { withCredentials: true });
      const items  = response.data.cart_cartitems_cart_id; 
      const order_items  = response.data.order_items; 
      const total_items  = response.data.total_items; 
      setCartItems( items || []);
      setOrderItems(order_items || []);
      setCartTotal(total_items); 
      return response.data;
    } catch (error) {
      setCartTotal(prev => prev - quantity);
      console.error('Failed to add to cart:', error);
      throw error;
    }
  };

  const updateCart = async (cartItemId, productId, quantity) => {
    try {
      
      const response = await api.patch(`/update_cart/${cartItemId}/`, { 
        product_id: productId,
        quantity: quantity,
      }, { withCredentials: true });
      const items  = response.data.cart_cartitems_cart_id; 
      const order_items  = response.data.order_items; 
      const total_items  = response.data.total_items; 
      setCartItems( items || []);
      setOrderItems(order_items || []);
      setCartTotal(total_items); 
      return response.data;
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    }
  };

  const deleteCart = async (cartItemId, productId) => {
    try {
      
      const response = await api.delete(`/delete_cart/${cartItemId}/`, { 
        product_id: productId,
      }, { withCredentials: true });
      const items  = response.data.cart_cartitems_cart_id; 
      const order_items  = response.data.order_items; 
      const total_items  = response.data.total_items; 
      setCartItems( items || []);
      setOrderItems(order_items || []);
      setCartTotal(total_items); 
      return response.data;
    } catch (error) {
      console.error('Failed to add to cart:', error);
      throw error;
    }
  };

  const resetCart = async () => {
    setCartItems([])
    setCartTotal(0)
    setOrderItems([])
  };

  

  useEffect(() => {
      if(user){
        fetchCart();
      }
  }, [user]);

  return (
    <CartContext.Provider value={{ cartTotal, addToCart, updateCart, deleteCart, cartItems, orderItems, fetchCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};