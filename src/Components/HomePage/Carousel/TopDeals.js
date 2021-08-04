import React, { Component } from "react";
import Slider from "react-slick";
import Container from 'react-bootstrap/Container'
import './Carousel.css'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 7
    };
    return (
      
        
          <Container>
              <Slider {...settings}>

              <div className="carousel-items">
                <img className="carousel-items-img" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=60" alt=""  />

                <ul>
                  <li>Product1</li>
                  <li>Min 60% Off</li>
                  <li>Grap Now!</li>
                </ul>

              </div>

        
              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" alt="" />

                    <ul>
                      <li>Product2</li>
                      <li>Min 50% Off</li>
                      <li>Discover Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product3</li>
                      <li>Min 60% Off</li>
                      <li>Explore Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1578926288207-a90a5366759d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product4</li>
                      <li>Min 70% Off</li>
                      <li>Buy Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1578925773717-a41e4a7fa4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product5</li>
                      <li>Min 40% Off</li>
                      <li>Grap Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1575396574188-ccf23d32d4b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product6</li>
                      <li>Min 70% Off</li>
                      <li>Discover Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1576773689115-5cd2b0223523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product7</li>
                      <li>Min 50% Off</li>
                      <li>Explore Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
                
                    <img className="carousel-items-img" src="https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                    <ul>
                      <li>Product8</li>
                      <li>Min 60% Off</li>
                      <li>Grap Now!</li>
                    </ul>
                
              </div>


              <div className="carousel-items">
              
                  <img className="carousel-items-img" src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=100&q=60" alt="" />

                  <ul>
                      <li>Product1\9</li>
                      <li>Min 70% Off</li>
                      <li>Buy Now!</li>
                    </ul>
              
              </div>

            </Slider>
      
            </Container>
        
    );
  }
}