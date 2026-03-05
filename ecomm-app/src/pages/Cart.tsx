import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <table border={1} cellPadding={10} width="100%">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>

                <td>₹ {item.price}</td>

                <td>{item.quantity}</td>

                <td>₹ {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total: ₹ {totalPrice}</h3>
    </div>
  );
};

export default Cart;
