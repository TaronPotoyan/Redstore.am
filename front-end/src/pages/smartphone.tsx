import { useEffect, useState } from "react";
import Header from "../components/header";
import type IProduct from '../interfaces/product';

type SmartBoxProps = {
  model: string;
  cost: number;
  img: string;
};

function Smartphones() {
  const [phons, setPhons] = useState<IProduct[] | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/phons')
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas);
        setPhons(datas.data);
      });
  }, []);

  return (
    <>
      <Header />
      {phons && phons.length ? (
        <div className="products">
          {phons.map((product) =>
            product.count !== 0 ? (
              <SmartBox
                key={product._id}
                model={product.model}
                cost={product.cost}
                img={product.img}
              />
            ) : null
          )}
        </div>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </>
  );
}

function SmartBox({ model, cost, img }: SmartBoxProps) {
  return (
    <div className="product-card">
      <img src={img} alt="product" />
      <div className="product-content">
        <h3 className="product-model">{model}</h3>
        <h6 className="product-price">{cost} ֏</h6>
        <button className="by-product">Buy</button>
      </div>
    </div>
  );
}

export default Smartphones;
