import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import type { Product } from "../types/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img alt={product.name} src={product.image} />

      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
