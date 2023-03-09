import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from 'firebase/firestore';
import ItemCart from './ItemCart';
import './styles.css';

const Cart = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();

    const querySnapshot = collection(db, 'orders');

    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
      products: cart.map((product) => {
        return {
          title: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity,
        };
      }),
      total: total,
    })
      .then((response) => {
        console.log(response.id);
        alert(`Orden con el id:${response.id} ha sido creada`);
        updateStocks(db);
      })
      .catch((error) => console.log(error));
  };

  const updateStocks = (db) => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, 'products', product.id);

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          alert('El stock de los productos ha sido actualizado');
        })
        .catch((error) => console.log(error));
    });
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="cartConatiner">
      <div>
        {cart.map((product) => (
          <div className="cartProduct" key={product.id}>
            <ItemCart product={product} />
            <button onClick={() => removeItem(product.id)}>X</button>
          </div>
        ))}
        {cart.length > 0 && <button onClick={clear}>Vaciar carrito</button>}
        {cart.length > 0 && (
          <div>
            <button onClick={() => navigate('/')}>Seguir comprando</button>
            <span>El total es: ${total}</span>
          </div>
        )}
      </div>
      <div>
        <form className="cartForm">
          <input
            name="name"
            type="text"
            placeholder="nombre "
            value={formValue.name}
            onChange={handleInput}
          />
          <input
            name="phone"
            type="text"
            placeholder="telefono "
            value={formValue.phone}
            onChange={handleInput}
          />
          <input
            name="email"
            type="email"
            placeholder="email "
            value={formValue.email}
            onChange={handleInput}
          />
          <button onClick={createOrder}>Completar compra</button>
        </form>
      </div>
      {cart.length === 0 && <h2>No hay productos en el carrito</h2>}
    </div>
  );
};

export default Cart;
