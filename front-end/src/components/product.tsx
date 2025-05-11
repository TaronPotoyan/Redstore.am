import { Link } from 'react-router-dom';
import type { IProduct } from '../interfaces/product';


export default function Product({
  _id,  
  img,  
  cost,
  model,
}: IProduct) {
  return (
    <div className="product-card">
        {
          img ?  <Link to={`/products/${_id}`}><img
            src={img}
            alt="product"
          /></Link> : <></> 
        }
        <div className="product-info">
            <h2 className="product-model">{model}</h2>
            <p className="product-price">${cost.toFixed(2)}</p>
            <button className='by-product'> Գնել</button>
      </div>
    </div>
  );
}