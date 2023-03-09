import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  console.log(cart);

  useEffect(() => {
    setTotal(cart.reduce((prev, curr) => prev + curr.quantity, 0));
  }, [cart]);
  return (
    <Link to={'/cart'}>
      <div>
        <img alt="12" src="/img/carrito.png" width="35px" />
        {total}
      </div>
    </Link>
  );
};

export default CartWidget;
