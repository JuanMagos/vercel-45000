import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../../components/ItemCount/ItemCount';

const ItemCart = ({ product }) => {
  const { updateItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(product.quantity);

  useEffect(() => {
    updateItem(product.id, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);
  return (
    <>
      <h2>{product.name}</h2>
      <h2>${product.price}</h2>
      <ItemCount count={quantity} setCount={setQuantity} />
    </>
  );
};

export default ItemCart;
