import { useEffect, useState, useMemo } from "react";
import Header from "../components/header";
import type IProduct from '../interfaces/product';
import Product from "../components/product";
import Footer from "../components/footer";

function Smartphones() {
  const [phons, setPhons] = useState<IProduct[] | null>(null);
  const [message, setMessage] = useState('');
  const type = 'phone';

  useEffect(() => {
    fetch('http://localhost:3000/phons')
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setPhons(datas.data);
      })
     .catch(e => {
        console.error(e);
        setMessage('Չհաջողվեց բեռնել ապրանքները');
      });

  }, []);

  const availablePhons = useMemo(() => {
    return phons ? phons.filter(product => product.count !== 0) : [];
  }, [phons]);

  return (
    <>
      <Header />
      {availablePhons.length ? (
        <div className="products">
          {availablePhons.map((product) => (
            <Product
                key={product._id}
                {...product}
                message={message}
                setMessage={setMessage}
                type = {type}
            />
        ))}

        </div>
      ) : (
        <h2 className="loading">
          {phons === null ? 'Loading...' : 'No available products'}
        </h2>
      )}
      <Footer is={!!phons}/>
    </>
  );
}



export default Smartphones;