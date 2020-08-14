import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner-img"
      />
      {/**rendering products  */}

      <div className="home__row">
        <Product
          id="1234"
          title="Microservices for the Enterprise: Designing, Developing, and Deploying 1st ed. Edition, Kindle Edition"
          price={11.94}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41cnX+sEbFL._SX397_BO1,204,203,200_.jpg"
        />

        <Product
          id="1244"
          title="
ASUS VivoBook L203MA Laptop, 11.6” HD Display, Intel Celeron Dual Core CPU, 4GB RAM, 64GB Storage, USB-C, Windows 10 Home In S Mode"
          price={559.94}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81o8Tll-5-L._AC_SL1500_.jpg"
        />
      </div>

      {/*second row */}

      <div className="home__row">
        <Product
          id="1254"
          title="
Acer Aspire Z24-890-UA91 AIO Desktop, 23.8 inches Full HD, 9th Gen Intel Core i5-9400T, 12GB DDR4, 512GB SSD, 802.11ac Wifi, USB 3.1 Type C, Wireless"
          price={799.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81ODwqmdl6L._AC_SL1500_.jpg"
        />

        <Product
          id="1111"
          title="Apple iPad Air (10.5-inch, Wi-Fi, 64GB) - Space Gray"
          price={499.94}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61z85f1XsgL._AC_SL1500_.jpg"
        />

        <Product
          id="12254"
          title=" Wireless Bluetooth Over the Ear Headset with Mic for phone-call and Alexa voice control - Industry Leading Active Noise Cancellation – Black"
          price={298.94}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51IdLe-%2B6kL._AC_SL1500_.jpg"
        />
      </div>

      {/*third row */}

      <div className="home__row">
        <Product
          id="12254"
          title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA Ports (1KL30AA) - Black"
          price={109.94}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
