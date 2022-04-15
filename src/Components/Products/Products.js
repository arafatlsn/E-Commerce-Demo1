import React from 'react';
import { Table } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
import { BsPhone, BsLaptop, BsKeyboard, BsMouse, BsSpeaker } from 'react-icons/bs'
import { GoDeviceDesktop } from 'react-icons/go'
import { GiWifiRouter } from 'react-icons/gi'
import useCart from '../../Hooks/useCart';

const Products = () => {
  const { cart, setCart } = useCart()
  const { products } = useProducts()

  const addToCart = product => {
    const cartFind = cart.find(elCart => elCart.id === product.id);
    if(!cartFind){
      const newCart = [...cart, product]
      setCart(newCart)
    }
  }

  return (
    <div className='card-container mt-3'>
      <div className='menubar-side' style={{order: '1'}}>
      <Table striped bordered hover>
        <tbody className=''>
          <tr>
            <td className='fw-bold'>BROWSE CATEGORIES</td>
          </tr>
          <tr>
            <td><BsPhone/> Phone</td>
          </tr>
          <tr>
            <td><BsLaptop/> Laptop</td>
          </tr>
          <tr>
            <td><GoDeviceDesktop/> Desktop</td>
          </tr>
          <tr>
            <td><BsKeyboard/> Keyboard</td>
          </tr>
          <tr>
            <td><BsMouse/> Mouse</td>
          </tr>
          <tr>
            <td><BsSpeaker/> Speaker</td>
          </tr>
          <tr>
            <td><GiWifiRouter/> Wifi Router</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <div className='card-side-div' style={{order: '2'}}>
            <div className='d-flex flex-wrap justify-content-center justify-items-center' style={{gap: '2.33rem'}}>
            {
          products.map(elProducts => <Product key={elProducts.id} elProducts = {elProducts} addToCart = {addToCart} ></Product>)
        }
            </div>
        </div>
    </div>
  );
};

export default Products;