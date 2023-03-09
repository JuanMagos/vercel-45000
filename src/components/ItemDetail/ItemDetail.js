import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ detail }) => {
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [count, setCount] = useState(detail?.stock === 0 ? 0 : 1);
  console.log(detail.image);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        flexDirection: 'column',
      }}
    >
      <img src={`/img/${detail.image}`} alt={detail.title} width="200px" />
      <h2>{detail.title}</h2>
      <h2>{detail.description}</h2>
      <h2>{detail.price}</h2>
      <ItemCount count={count} setCount={setCount} />
      <Button onClick={() => navigate('/')} variant="primary">
        Seguir Comprando
      </Button>
      <Button
        disabled={count > detail.stock}
        onClick={() => addItem(detail, count)}
        variant="primary"
      >
        Agregar al carrito
      </Button>
      <Button onClick={() => navigate('/cart')} variant="primary">
        Completar mi compra
      </Button>
      {/* <button onClick={() => navigate('/')}>Seguir Comprando</button> */}
      {/* <button onClick={agregarAlCarrito}>Agregar al carrito</button>
      <button onClick={() => navigate('/cart')}>Completar mi compra</button> */}
    </div>
  );
};

export default ItemDetail;
