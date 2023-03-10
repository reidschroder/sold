import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProducts } from '../../store/productSlice';
import Product from '../Product/Product'
import "./Home.css"

const Home: React.FC<any> = () => {

  const productList = useSelector(getProducts);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getAllProducts());
}, []);

  return (
    <div className="product-container">
      {(productList.length > 0)&&
        productList.map((productList: any) => {
          return <Product id = {productList.productId} name = {productList.productName}price = {productList.productPrice} description = {productList.productDescription} type = {productList.productType} image = {productList.productImgUrl} />
        })
      }
    </div>
    
  )
}

export default Home