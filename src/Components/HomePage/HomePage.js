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
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1608385836882-63997d3deca1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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
              src="https://images.unsplash.com/photo-1608394078695-623b123d019e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fHBhaW50aW5nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
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
