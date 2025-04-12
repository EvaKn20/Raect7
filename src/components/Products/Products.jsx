import "./products.scss";
import ProductCard from "../ProductCard/ProductCard";

function Products({ navActive, stateProduct, stateBasket, onOpenModal }) {
  const { product } = stateProduct;

  return (
    <div className="products">
      <div className="product_header">
        <span className="products_title">{product[navActive.group].title}</span>
      </div>
      <div className="products_flex">
        {product[navActive.group].items
          .filter(item => item.id !== "exclusive")
          .map((item) => (
          <ProductCard 
            key={item.id} 
            {...item} 
            stateBasket={stateBasket}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
}
export default Products;
