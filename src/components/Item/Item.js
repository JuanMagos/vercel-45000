import './style.css';
const Item = ({ product }) => {
  console.log(product.image);
  return (
    <div className="item">
      <img alt={product.title} src={`/img/${product.image}`} width="100px" />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h2>${product.price}</h2>
    </div>
  );
};

export default Item;
