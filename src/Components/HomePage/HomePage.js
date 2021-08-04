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
    <div className="body123">
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
              <a><img src="https://rukminim1.flixcart.com/image/300/300/k3dc7m80pkrrdj/slipper-flip-flop/5/r/q/7-sl5105-kraasa-original-imaetfqytsgg8n8h.jpeg?q=70"/></a>
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
              <a><img src="https://rukminim1.flixcart.com/image/300/300/kjn6qvk0-0/shoe/d/c/v/ck2669-001nike-12-nike-black-white-smoke-grey-original-imafz5vwe5t53z3t.jpeg?q=70"/></a>
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
    </Container>
  </div>
  );
}

export default HomePage;
