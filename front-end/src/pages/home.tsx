import { useEffect, useState } from 'react';

import api from '../services/api';
import type { IProduct  } from '../interfaces/product';
import Product from '../components/product';



function Home() {
  const [product, setProduct] = useState<IProduct[] | null>(null);

  useEffect(() => {
    try {
        api.fetchProducts()
        .then(data=>{
          setProduct(data);
          console.log(data);
        })

    }catch(e) {
      console.error(e)
    }
  },[]);

  return (
    <>
     <div className='products'>
            { product === null ? (
              <h3>Տվյալների բեռնում</h3>
            ) : product.length === 0 ? (
              <h3>Ապրանքներ չկան</h3>
            ) : (
              product.map((product) => (
                  <Product key={product._id} {...product}/>
              ))
            )}

     </div>
    </>
  )
}

export default Home
