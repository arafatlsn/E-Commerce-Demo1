import { Table } from 'react-bootstrap';
import useProducts from '../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css'
import { BsPhone, BsLaptop, BsKeyboard, BsMouse, BsSpeaker } from 'react-icons/bs'
import { GoDeviceDesktop } from 'react-icons/go'
import { GiWifiRouter } from 'react-icons/gi'
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../App';

const Products = () => {
  const { products, setProducts } = useProducts()
  const [ searchProducts, setSearchProducts ] = useState([])
  const [search, setSearch] = useState('')

  const { cart, setCart, searchInput } = useContext(CartContext)

  useEffect(() => {
    
    if(search.length){
      const prodFilt = products.filter(elProd => elProd.category == search.slice(1).toLowerCase())
      if(prodFilt.length){
        setSearchProducts(prodFilt)
      }
      else{
        alert('Produts not availble right now')
      }
      }
    
  }, [search])

  useEffect(() => {

    if(searchInput.length){

      const prodFilt = products.filter(elProd => elProd.category == searchInput.toLowerCase())
      if(prodFilt.length){
        setSearchProducts(prodFilt)
      }
      else{
        alert('Produts not availble right now')
      }

    }

  }, [searchInput])

  const addToCart = product => {
    const cartFind = cart.find(elCart => elCart.id === product.id);
    if(!cartFind){
      const newCart = [...cart, product];
      setCart(newCart)
    }
  }
  
  return (
    <div className='card-container mt-3'>
      <div className='menubar-side' style={{order: '1'}}>
      <Table striped bordered hover>
        <tbody className='menu-container'>
          <tr>
            <td className='fw-bold'>BROWSE CATEGORIES</td>
          </tr>
          <tr>
            <td onClick={() => setSearchProducts([])}>All</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><BsPhone/> Phone</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><BsLaptop/> Laptop</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><GoDeviceDesktop/> Smart TV</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><BsKeyboard/> Keyboard</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><BsMouse/> Mouse</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><BsSpeaker/> Speaker</td>
          </tr>
          <tr>
            <td onClick={(e) => setSearch(e.target.innerText)}><GiWifiRouter/> Wifi Router</td>
          </tr>
        </tbody>
      </Table>
      </div>
      <div className='card-side-div' style={{order: '2'}}>
            <div className='d-flex flex-wrap justify-content-center justify-items-center' style={{gap: '2.33rem'}}>
            { searchProducts.length ? searchProducts.map(elProducts => <Product key={elProducts.id} elProducts = {elProducts} addToCart = {addToCart} ></Product>)
          : products.map(elProducts => <Product key={elProducts.id} elProducts = {elProducts} addToCart = {addToCart} ></Product>)
        }
            </div>
        </div>
    </div>
  );
};

export default Products;