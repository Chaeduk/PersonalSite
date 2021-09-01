import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import 'holderjs';

const Home = () => {
  return (
    <div className="Home-content">
      <div style={{ height: 450, width: 850, margin: 30 }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?&text=Hello!!&bg=20232a"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=KyungJi's Personalsite.&bg=20232a"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Welcome!!&bg=20232a"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
