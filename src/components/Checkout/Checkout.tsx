import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="cards-container">
                        <div className="cards">
                            <div className="header">Order Summary</div>
                            <div className="row item">
                                {/* <div className="col-4 align-self-center"><img className="img-fluid" src="product.productImgUrl"/></div> */}
                                <div className="col-8">
                                    <div className="row"><b>product.price</b></div>
                                    <div className="row text-muted">product.name</div>
                                    <div className="row">Qty:1</div>
                                </div>
                            </div>
                            <div className="row item">
                                {/* <div className="col-4 align-self-center"><img className="img-fluid" src="product.productImgUrl"/></div> */}
                                <div className="col-8">
                                    <div className="row"><b>product.price</b></div>
                                    <div className="row text-muted">product.name</div>
                                    <div className="row">product.count</div>
                                </div>
                            </div>
                            
                            <div className="row lower">
                                <div className="col text-left"><b>Total to pay</b></div>
                                <div className="col text-right"><b>product.price</b></div>
                            </div>
                            <button className="btn">Place order</button>
                        </div>
                    </div>
  )
}

export default Checkout;