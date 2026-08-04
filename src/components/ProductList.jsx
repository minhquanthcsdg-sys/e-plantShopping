import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';
import './ProductList.css';

// Sample plant data
const plantsData = {
  aromatic: [
    {
      id: 1,
      name: 'Lavender',
      description: 'A fragrant herb with beautiful purple flowers, known for its calming properties.',
      price: 24.99,
      image: '/images/lavender.jpg',
      category: 'Aromatic'
    },
    {
      id: 2,
      name: 'Rosemary',
      description: 'An aromatic herb with needle-like leaves, perfect for cooking and aromatherapy.',
      price: 19.99,
      image: '/images/rosemary.jpg',
      category: 'Aromatic'
    },
    {
      id: 3,
      name: 'Jasmine',
      description: 'A climbing plant with intensely fragrant white flowers that bloom at night.',
      price: 29.99,
      image: '/images/jasmine.jpg',
      category: 'Aromatic'
    },
    {
      id: 4,
      name: 'Eucalyptus',
      description: 'A fast-growing tree with distinctive aromatic leaves used in essential oils.',
      price: 34.99,
      image: '/images/eucalyptus.jpg',
      category: 'Aromatic'
    }
  ],
  medicinal: [
    {
      id: 5,
      name: 'Aloe Vera',
      description: 'A succulent plant with healing properties, known for its gel used in skincare.',
      price: 22.99,
      image: '/images/aloe.jpg',
      category: 'Medicinal'
    },
    {
      id: 6,
      name: 'Tulsi (Holy Basil)',
      description: 'A sacred herb in Ayurveda with numerous health benefits and adaptogenic properties.',
      price: 18.99,
      image: '/images/tulsi.jpg',
      category: 'Medicinal'
    },
    {
      id: 7,
      name: 'Mint',
      description: 'A refreshing herb used in teas, cooking, and traditional medicine for digestion.',
      price: 14.99,
      image: '/images/mint.jpg',
      category: 'Medicinal'
    },
    {
      id: 8,
      name: 'Neem',
      description: 'A tree with powerful antibacterial and antifungal properties, used in natural remedies.',
      price: 27.99,
      image: '/images/neem.jpg',
      category: 'Medicinal'
    }
  ]
};

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isInCart = cartItems.some(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }));
  };

  return (
    <div className="product-card">
      <img 
        src={plant.image} 
        alt={plant.name} 
        className="product-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/280x220/4caf50/ffffff?text=' + plant.name;
        }}
      />
      <div className="product-info">
        <h3>{plant.name}</h3>
        <p className="product-description">{plant.description}</p>
        <div className="product-price">${plant.price.toFixed(2)}</div>
        <button 
          className={`btn-add-to-cart ${isInCart ? 'in-cart' : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? '✓ In Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="product-listing">
      {/* Aromatic Plants Section */}
      <section className="category-section">
        <h2 className="category-title">🌸 Aromatic Plants</h2>
        <div className="products-grid">
          {plantsData.aromatic.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>

      {/* Medicinal Plants Section */}
      <section className="category-section">
        <h2 className="category-title">🌿 Medicinal Plants</h2>
        <div className="products-grid">
          {plantsData.medicinal.map(plant => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductList;
