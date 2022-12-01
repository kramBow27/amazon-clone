import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61L0yNfyI-L._SX3000_.jpg"
          alt=""
        />
        <div className="row__container">
          <div className="home__row">
            <Product
              key={605}
              id="001"
              title="The Lean Startup Book by Eric Ries"
              price={19.99}
              image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
              rating={5}
            />
            <Product
              key={702}
              id="002"
              title="Electric Guitar TG-530 Surf green"
              price={366.87}
              image="https://m.media-amazon.com/images/I/51ZdqyOLlVL._AC_SY450_.jpg"
              rating={5}
            />
            <Product
              key={103}
              id="003"
              title="Head First Object-Oriented Analysis  "
              price={98.79}
              image="https://m.media-amazon.com/images/I/51FNFnkTMKL._SX260_.jpg"
              rating={5}
            />
            <Product
              key={504}
              id="004"
              title="Piano Digital Clarinova CLP-775R Rosewood Yamaha"
              price={17870.0}
              image="https://m.media-amazon.com/images/I/51i1-4VO19S._AC_SX522_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="101"
              key={101}
              title="Tnis Converse Chuck Taylor All Star Platform High Top"
              price={988.79}
              image="https://m.media-amazon.com/images/I/71e91UBfLVL._AC_SX395_.jpg"
              rating={5}
            />
            <Product
              id="102"
              key={102}
              title="Allied Gaming Stinger Desktop PC "
              price={19900.99}
              image="https://m.media-amazon.com/images/I/81oGvmWBzVL._AC_SX522_.jpg"
              rating={5}
            />
            <Product
              key={203}
              id="103"
              title="Star Watch Moon Telescope  2020"
              price={39900.99}
              image="https://m.media-amazon.com/images/I/41mfhWYxNpL._AC_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              key={403}
              id="201"
              title="Orange Rocker 15 Terror Tube Amp"
              price={8870.0}
              image="https://m.media-amazon.com/images/I/61SAxkxZGaS._AC_SX522_.jpg"
              rating={5}
            />
            <Product
              key={404}
              id="202"
              title="AMD Ryzen Threadripper 3970X, without cooler 32 Cores Cache 128MB "
              price={28950.0}
              image="https://m.media-amazon.com/images/I/81D-WvtG6OL._AC_SX522_.jpg"
              rating={5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
