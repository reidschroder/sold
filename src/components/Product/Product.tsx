import React, { useEffect, useState } from 'react';
import "./Product.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProducts } from "../../store/productSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Product: React.FC<any> = (props: any) => {

    const [addToCart, setAddToCart] = useState(0);
    const dispatch = useDispatch<any>();
    const productList = useSelector(getProducts);
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, []);






    
    const AddToCart=()=>{
        if(addToCart<10){ 
            setAddToCart(addToCart+1); 
        } 
    }; 
        
    
        const RemoveFromCart=()=>{
            if(addToCart>=1){
            setAddToCart(addToCart-1);
        
            }
            };



  return (
    <>
        
            <div className="card">
                <div className="top_part">
                    <div className="circle">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="image">
                    {/* {productList.length > 0 && <img src={productList[0].productImgUrl} />} */}
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="item">
                {/* {productList.length > 0 && <h3>{productList[0].productName}</h3>} */}
                    <h3>{props.name}</h3>
                </div>
                <div className="item-description">
                    <p>{props.description}</p>
                </div>
                <div className="last_buttons">
                    <div className="qty_btn">
                        <i onClick={RemoveFromCart} className="fa fa-minus"></i>
                        <p>{addToCart}</p>
                        <i onClick={AddToCart} className="fa fa-plus"></i>
                    </div>
                    <div className="money_bag">
                        <h3>{props.price}</h3>
                        <button onClick={AddToCart}><i className="fa fa-shopping-bag"></i>Add to bag</button>
                    </div>

                </div>
            </div>
        


    </>
  )
}

export default Product