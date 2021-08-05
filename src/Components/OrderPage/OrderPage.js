import './OrderPage.css'
import React from 'react'
import  Container  from 'react-bootstrap/Container'
import  Button  from 'react-bootstrap/Button'

function OrderPage() {
    return (
        <Container>
            <div className="order-container">
                <h1>Your Orders</h1>
                <div className="search-order-container">
                    <span>
                        
                        <input className="search-input" type="search" placeholder="Your Search Here"/>
                    
                
                        <Button>
                            Search Orders
                        </Button>
                </span>
                </div>
            </div>

            <div className="drop-down-container">
            <label for="orderFilter">
                <span className="num-orders">1 order</span> placed in
            </label>
            
            <span className="dropdown">
            <button className="dropbtn">Last 30 days</button>
                <div className="dropdown-content">
                    <a href="#">Past 2 months</a>
                    <a href="#">Past 3 months</a>
                    <a href="#">Past year</a>
                </div>  
            </span>
            </div>
            <div className="orders-container">
                <div className="order-top">
                <div className="order-inner">
                    <div className="order-top-left">
                        <div className="col-1">
                            <div className="col-1-top">
                                <span>ORDER PLACED</span>
                            </div>
                            <div className="col-1-bottom">
                                <span>5 July 2021</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="col-2-top">
                                <span>TOTAL</span>
                            </div>
                            <div className="col-2-bottom">
                                <span>Rs. 969</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-3-top">
                                <span>SHIP TO</span>
                            </div>
                            <div className="col-3-bottom">
                            <span className="dropdown">
                                <button className="dropbtn-col">Ram Katori</button>
                                    <div className="dropdown-content-col">
                                        <div className="dropdown-content-col-inner">
                                        <p className="col-3-bottom-name">Ram Katori</p>
                                        <p>69</p>
                                        <p>Jhumri Tallaiya</p>
                                        <p>Phone: 9999999999</p>
                                        </div>
                                    </div>  
                            </span>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="col-4-top">
                            <span>Order # 12345-67890</span>
                        </div>
                        <div className="col-4-bottom">
                            <span><a href="#" className="order-det">View Order Details</a></span>
                        </div>
                        </div>
                    </div>
                    </div>
                   

                </div>

                <div className="order-bottom">
                    <div className="order-inner">
                        <div className="order-bottom-left">
                            <div className="order-bottom-left-top">
                                <div className="delivery-date">
                                <span className="delivery">Delivered 08-July-2021</span>
                                </div>
                                <div className="order-details">
                                <div className="order-image">
                                    <img src="https://via.placeholder.com/150"></img>
                                </div>
                                <div className="order-description">
                                    <span><a href="#" className="order-det">Wow.. nice painting.. I love it.. wow man.. maza aagya dekh kar</a></span>
                                </div>

                                </div>
                            </div>
                            <div className="order-bottom-right-top">
                                <a href="#"><button className="trackbtn">Track Package</button></a>
                                <a href="#"><button className="reviewbtn">Leave Review</button></a>
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>



            <div className="orders-container">
                <div className="order-top">
                <div className="order-inner">
                    <div className="order-top-left">
                        <div className="col-1">
                            <div className="col-1-top">
                                <span>ORDER PLACED</span>
                            </div>
                            <div className="col-1-bottom">
                                <span>5 July 2021</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="col-2-top">
                                <span>TOTAL</span>
                            </div>
                            <div className="col-2-bottom">
                                <span>Rs. 969</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-3-top">
                                <span>SHIP TO</span>
                            </div>
                            <div className="col-3-bottom">
                            <span className="dropdown">
                                <button className="dropbtn-col">Ram Katori</button>
                                    <div className="dropdown-content-col">
                                        <div className="dropdown-content-col-inner">
                                        <p className="col-3-bottom-name">Ram Katori</p>
                                        <p>69</p>
                                        <p>Jhumri Tallaiya</p>
                                        <p>Phone: 9999999999</p>
                                        </div>
                                    </div>  
                            </span>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="col-4-top">
                            <span>Order # 12345-67890</span>
                        </div>
                        <div className="col-4-bottom">
                            <span><a href="#" className="order-det">View Order Details</a></span>
                        </div>
                        </div>
                    </div>
                    </div>
                   

                </div>

                <div className="order-bottom">
                    <div className="order-inner">
                        <div className="order-bottom-left">
                            <div className="order-bottom-left-top">
                                <div className="delivery-date">
                                <span className="delivery">Delivered 08-July-2021</span>
                                </div>
                                <div className="order-details">
                                <div className="order-image">
                                    <img src="https://via.placeholder.com/150"></img>
                                </div>
                                <div className="order-description">
                                    <span><a href="#" className="order-det">Wow.. nice painting.. I love it.. wow man.. maza aagya dekh kar</a></span>
                                </div>

                                </div>
                            </div>
                            <div className="order-bottom-right-top">
                                <a href="#"><button className="trackbtn">Track Package</button></a>
                                <a href="#"><button className="reviewbtn">Leave Review</button></a>
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>




            <div className="orders-container">
                <div className="order-top">
                <div className="order-inner">
                    <div className="order-top-left">
                        <div className="col-1">
                            <div className="col-1-top">
                                <span>ORDER PLACED</span>
                            </div>
                            <div className="col-1-bottom">
                                <span>5 July 2021</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="col-2-top">
                                <span>TOTAL</span>
                            </div>
                            <div className="col-2-bottom">
                                <span>Rs. 969</span>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="col-3-top">
                                <span>SHIP TO</span>
                            </div>
                            <div className="col-3-bottom">
                            <span className="dropdown">
                                <button className="dropbtn-col">Ram Katori</button>
                                    <div className="dropdown-content-col">
                                        <div className="dropdown-content-col-inner">
                                        <p className="col-3-bottom-name">Ram Katori</p>
                                        <p>69</p>
                                        <p>Jhumri Tallaiya</p>
                                        <p>Phone: 9999999999</p>
                                        </div>
                                    </div>  
                            </span>
                            </div>
                        </div>
                        <div className="col-4">
                        <div className="col-4-top">
                            <span>Order # 12345-67890</span>
                        </div>
                        <div className="col-4-bottom">
                            <span><a href="#" className="order-det">View Order Details</a></span>
                        </div>
                        </div>
                    </div>
                    </div>
                   

                </div>

                <div className="order-bottom">
                    <div className="order-inner">
                        <div className="order-bottom-left">
                            <div className="order-bottom-left-top">
                                <div className="delivery-date">
                                <span className="delivery">Delivered 08-July-2021</span>
                                </div>
                                <div className="order-details">
                                <div className="order-image">
                                    <img src="https://via.placeholder.com/150"></img>
                                </div>
                                <div className="order-description">
                                    <span><a href="#" className="order-det">Wow.. nice painting.. I love it.. wow man.. maza aagya dekh kar</a></span>
                                </div>

                                </div>
                            </div>
                            <div className="order-bottom-right-top">
                                <a href="#"><button className="trackbtn">Track Package</button></a>
                                <a href="#"><button className="reviewbtn">Leave Review</button></a>
                                
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default OrderPage
