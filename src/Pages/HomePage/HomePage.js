import React, { useState } from 'react';
import MenuBar from '../../Components/MenuBar/MenuBar';
import Product from '../../Components/Product/Product';
import TopCarousel from '../../Components/TopCarousel/TopCarousel';
import useProducts from '../../Hooks/useProducts';
import './HomePage.css'

const HomePage = () => {

  const { products, setProducts } = useProducts();

  if(products.length > 8){
    setProducts(products.slice(0, 8))
  }

  return (
    <div className='homepage-parent-container'>

      <div className='carouseNmenu-container mt-3'>
        <div className='menubar-side'>
          <MenuBar></MenuBar>
        </div>
        <div className='image-slide-side'>
          <TopCarousel></TopCarousel>
        </div>
      
      </div>
      <div className='card-container'>
        <div className=''>

        </div>
        
        <div className='card-side-div'>
            <hr />
            <div className='d-flex flex-wrap justify-content-center justify-items-center' style={{gap: '2.33rem'}}>
            {
          products.map(elProducts => <Product key={elProducts.id} elProducts = {elProducts} ></Product>)
        }
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;