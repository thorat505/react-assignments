import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../app/store";

const Header = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="header">
      <h2>E-Commerce Store</h2>

      <div className="cart" onClick={() => navigate("/cart")}>
        🛒 Cart ({totalItems})
      </div>
    </div>
  );
};

export default Header;
