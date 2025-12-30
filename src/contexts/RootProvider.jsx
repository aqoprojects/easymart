import { composeProviders } from "./ProvderComposer";
import { AuthProvider } from "./AuthContext";
import { ProductProvider } from "./ProductCOntext";
import { CategoryProvider } from "./CategoryContext";
import { CartProvider } from "./CartContext";
import { OrderProvider } from "./OrderContext";

export const RootProvider = composeProviders(
  AuthProvider,
  CategoryProvider,
  ProductProvider,
  CartProvider,
  OrderProvider
);