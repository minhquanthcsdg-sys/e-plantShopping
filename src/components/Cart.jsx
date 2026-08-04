import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  increaseQuantity, 
  decreaseQuantity, 
  removeItem,
  clearCart 
} from '../features/CartSlice';
import './Cart.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const total = item.price * item.quantity;

  return (
    <div className="cart-item">
      <img 
        src={item.image} 
        alt={item.name} 
        className="cart-item-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/80x80/4caf50/ffffff?text=' + item.name;
        }}
      />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">${item.price.toFixed(2)} each</div>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
          <span>{item.quantity}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
        </div>
        <div className="cart-item-total">${total.toFixed(2)}</div>
        <button 
          className="btn-danger"
          onClick={() => dispatch(removeItem(item.id))}
        >
          ✕ Delete
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>🛒 Your Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Start shopping to add some beautiful plants to your collection!</p>
          <Link to="/products" className="btn-primary" style={{ marginTop: '20px' }}>
            🌱 Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>🛒 Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <div>
          <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Items</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{totalItems}</div>
        </div>
        <div className="cart-total">
          Total: ${totalCost.toFixed(2)}
        </div>
        <div className="cart-actions">
          <Link to="/products" className="btn-secondary">
            Continue Shopping
          </Link>
          <button 
            className="btn-checkout"
            onClick={() => {
              alert('Thank you for your purchase! 🌿\nYour plants will be delivered soon.');
              dispatch(clearCart());
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
