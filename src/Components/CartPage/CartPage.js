import React from 'react'
import './CartPage.css'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
function CartPage() {
    return (
        <Container id="cart-container">

            <Container id="cart-header">
                <h1>My Cart</h1>
                <h3>Address</h3>
            </Container>

            <Container id="cart-items">
                <ul>

                    <li className="cart-item-value">
                        <img src="https://source.unsplash.com/user/erondu/100x100" alt="" />
                        <ul className="cart-item-des">
                            <li>Item and Brand Name</li>
                            <li>Item description</li>
                            <li style={{color: 'red' , fontWeight:'bold'}}>Out of Stock</li>
                            <Button style={{backgroundColor: 'orange' , borderStyle: 'none'}}>Buy</Button>
                            <Button>Remove</Button>

                        </ul>

                    </li>


                    <li className="cart-item-value">
                        <img src="https://source.unsplash.com/user/erondu/100x100" alt="" />
                        <ul className="cart-item-des">
                            <li>Item and Brand Name</li>
                            <li>Item description</li>
                            <li style={{color: 'red' , fontWeight:'bold'}}>Out of Stock</li>
                            <Button style={{backgroundColor: 'orange' , borderStyle: 'none'}}>Buy</Button>
                            <Button>Remove</Button>

                        </ul>

                    </li>
                    
                    <li className="cart-item-value">
                        <img src="https://source.unsplash.com/user/erondu/100x100" alt="" />
                        <ul className="cart-item-des">
                            <li>Item and Brand Name</li>
                            <li>Item description</li>
                            <li style={{color: 'green' , fontWeight:'bold'}}>Available</li>
                            <Button style={{backgroundColor: 'orange' , borderStyle: 'none'}}>Buy</Button>
                            <Button>Remove</Button>

                        </ul>

                    </li>
                    
                    
                    <li className="cart-item-value">
                        <img src="https://source.unsplash.com/user/erondu/100x100" alt="" />
                        <ul className="cart-item-des">
                            <li>Item and Brand Name</li>
                            <li>Item description</li>
                            <li style={{color: 'green' , fontWeight:'bold'}}>Available</li>
                            <Button style={{backgroundColor: 'orange' , borderStyle: 'none'}}>Buy</Button>
                            <Button>Remove</Button>

                        </ul>

                    </li>
                    
                    
                </ul>
            </Container>

            <Button id="place-order">Place Order</Button>

        </Container>
    )
}

export default CartPage
