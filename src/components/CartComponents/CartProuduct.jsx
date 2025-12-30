import AddDeleteAction from '../ControlComponents/AddDeleteAction';
import CartProductItem from './CartProductItem';

const CartProuduct = ({id, product_id, product_picture, product_name, product_price, cart_quantity, orderItems}) =>
{
  return (
    <div key={id} className="flex items-center-safe gap-3 lg:flex-nowrap flex-wrap justify-between">
      
      <CartProductItem id={product_id} product_picture={product_picture} product_name={product_name} product_price={product_price} />

      <div className="flex w-full lg:w-70 justify-between items-center-safe gap-1 ">
        <p className="text-lg font-medium order-first lg:order-last text-nowrap">${
          orderItems.find( order => order.product_id === product_id)?.subtotal
        }</p>
        <AddDeleteAction quantity={cart_quantity} cartItemId={id} productId={product_id} />



      </div>
    </div>
  );
};

export default CartProuduct;