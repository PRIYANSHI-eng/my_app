import Button from './Button';

const ProductCard = ({ product }) => (
  <div>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Price: ${product.price}</p>
    <Button label="View Product" />
  </div>
);

export default ProductCard;
