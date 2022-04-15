import React from 'react';
import './Product.css'
import { BsStar, BsBagPlus } from 'react-icons/bs'
import { VscHeart } from 'react-icons/vsc'

const Product = ({ elProducts, addToCart }) => {
  const { image, name, price, id } = elProducts;
  return (
    <div className='card-parent-container border'>
      <div className='card-img-div d-flex flex-column align-items-center'>
        <img className='card-img' src={image} alt="" />
        <p onClick={() => addToCart(elProducts)} className='add-to-cart-div border rounded-circle d-flex align-items-center justify-content-center' style={{width: '40px', height: '40px', position: 'absolute', top: '.9rem', right: '.7rem', cursor: 'pointer'}}><BsBagPlus className='fs-5'/></p>
        <p className='add-to-cart-div border rounded-circle d-flex align-items-center justify-content-center' style={{width: '40px', height: '40px', position: 'absolute', top: '3.8rem', right: '.7rem', cursor: 'pointer'}}><VscHeart className='fs-5'/></p>
        <p className='card-view-details w-100 text-center py-2 text-white fw-bold' style={{ background: 'rgb(1, 136, 204)', position: 'absolute', top: '80%', cursor: 'pointer'}}>QUICK VIEW</p>
      </div>
      <div className='card-text-div px-2'>
        <p className='m-0' style={{whiteSpace:'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>BEST SELLING PRODUCT</p>
        <h6 className='m-0' style={{whiteSpace:'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{name}</h6>
        <div>
          <BsStar className='ms-1'/>
          <BsStar className='ms-1'/>
          <BsStar className='ms-1'/>
          <BsStar className='ms-1'/>
          <BsStar className='ms-1'/>
        </div>
        <h5>${price}</h5>
      </div>
    </div>
  );
};

export default Product;