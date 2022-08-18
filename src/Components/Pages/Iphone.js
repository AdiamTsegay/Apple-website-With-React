import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Iphone() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
        //  fetch("http://localhost:3001/iphones")
        fetch("./iphones.json")
          .then((res) => res.json())
          .then((x) => {
            setProducts(x.products);
          })
          .catch(() => console.log("Error:unable to fetch"));

    }, []);

  // IIFE (Immediately Invoked Function Expression)
  // useEffect(() => {
  //   (async () => {
  //     const response = await axios.get("http://localhost:3001/iphones");
  //     setProducts(response.data.products);
  //   })();
  // }, []);

  let order = 1;
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products.map((product) => {
            let id = product.product_url;
            let title = product.product_name;
            let img = product.product_img;
            let Brief = product.product_brief_description;
            let StartPrice = product.starting_price;
            let PriceRange = product.price_range;
            let ProductPage = "/iphone/" + id;
            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }
            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order2}`}>
                  <div className="product-title">{title}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">{`Starting at ${StartPrice}`}</div>
                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to ={ProductPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="prodict-image">
                    <img src={img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone
