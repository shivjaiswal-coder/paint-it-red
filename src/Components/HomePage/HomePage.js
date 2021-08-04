import React from "react";
import "./HomePage.css";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll:4,
    initialSlide: 0,
    autoplay:true,
    autoplayspeed: 9000,
  };
  return (
      <Container fluid>
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
          <div className="top_deal_items">
            <Slider {...settings}>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
          </Slider>
          </div>
      </div>

      <div className="top_deal">
          <div className="top_deal_header">
              <h3>New Paintings</h3>
              <Button variant="primary">View All</Button>
          </div>
          <div className="top_deal_items">
          <Slider {...settings}>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
            <div>
              <a><img src="#"/></a>
            </div>
          </Slider>
          </div>
      </div>
      {/* <div className="top_deal">
          <div className="top_deal_header">
              <h3>New Paintings</h3>
              <Button variant="primary">View All</Button>
          </div>
          <div className="top_deal_items">

          </div>
      </div> */}
    </Container>

  );
}

export default HomePage;
