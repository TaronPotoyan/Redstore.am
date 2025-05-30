import { Link, useNavigate } from 'react-router-dom';
import type  IProduct from '../interfaces/product';
import { useEffect, useRef } from 'react';

export default function Product({
  _id,
  img,
  cost,
  model,
  setMessage,
  type,
}: IProduct & { message: string; setMessage: (msg: string) => void }) {
  const navigate = useNavigate();
  const user = useRef<string>('');

  useEffect(() => {
    user.current = localStorage.getItem('user') || '';
  }, []);

  const handlerBasket = (): void => {
    if (!user.current) {
      navigate('/');
      setMessage('Ձեր զամբյուղը հասանելի կլինի մուտքագրումից կամ գրանցումից հետո:');
      setTimeout(() => {
        setMessage('');
      }, 3000);
      return;
    }
    navigate('/basket');
  };

  return (
    <div className="product-card">
      {img ? (
        <Link to={ {
                    pathname : `/products/${_id}`
                }}
              state ={{type}}  
        >
          <img src={img} alt={model} />
        </Link>
      ) : null}
      <div className="product-content">
        <h3 className="product-model">{model}</h3>
        <h6 className="product-price">{cost.toFixed(2)} ֏</h6>
        <button className="by-product" onClick={handlerBasket}>
          Գնել
        </button>
      </div>
    </div>
  );
}
