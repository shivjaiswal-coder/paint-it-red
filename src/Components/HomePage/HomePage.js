import React from "react";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import TopDeals from './Carousel/TopDeals';
import NewPainting from './Carousel/NewPainting';
function HomePage() {
  return (
      <div className="container_fluid">
      <div className="carousel-container">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/user/erondu/1400x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/user/erondu/1400x400"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://source.unsplash.com/user/erondu/1400x400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="top_deal">

          <div className="top_deal_header">
              <h3>Top Deals</h3>
              <Button variant="primary">View All</Button>
          </div>

          <Container fluid id="top_deal_items">
            <TopDeals/>
          </Container>

      </div>

      <div className="top_deal">

          <div className="top_deal_header">
              <h3>New Paintings</h3>
              <Button variant="primary">View All</Button>
          </div>

          <Container fluid id="top_deal_items">
            <NewPainting/>
          </Container>

      </div>
    </div>
  );
}

export default HomePage;
