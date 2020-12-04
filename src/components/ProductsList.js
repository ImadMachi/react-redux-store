import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

const ProductsList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="list">
      <h1 className="list__title">store items</h1>
      <div className="list-container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
