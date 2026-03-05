import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import type { RootState } from "../app/store";

const ProductGrid = () => {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
