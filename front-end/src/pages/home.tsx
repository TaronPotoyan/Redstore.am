import { useEffect, useState } from 'react';
import Header from '../components/header';
import api from '../services/api';
import type IProduct from '../interfaces/product';
import Product from '../components/product';

function Home() {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.fetchProducts('http://localhost:3000/products')
      .then(data => {
        setProducts(data);
        console.log(data);
      })
      .catch(e => {
        console.error(e);
        setMessage('Failed to load products');
      });
  }, []);

  return (
    <>
      <Header />
      {message && (
        <span style={{
          display: 'flex',
          color: 'red',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          backgroundColor: 'black',
          padding: '10px',
          margin: '10px 0',
        }}>
          {message}
        </span>
      )}
      <div className="products">
        {products === null ? (
          <h3>Տվյալների բեռնում</h3>
        ) : products.length === 0 ? (
          <h3>Ապրանքներ չկան</h3>
        ) : (
          products.map(product => (
            <Product
              key={product._id}
              {...product}
              message={message}
              setMessage={setMessage}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Home;
