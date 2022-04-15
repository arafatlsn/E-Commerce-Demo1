import React, { useContext, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsTelephoneForward, BsBagPlus, BsSearch } from 'react-icons/bs'
import { FaUserPlus } from 'react-icons/fa'
import { VscHeart } from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import auth from '../../Firebase/FireBase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
import { CartContext } from '../../App';


const Header = () => {

  const [ inputValue, setValue ] = useState('')
  const { cart,  setSearch } = useContext(CartContext)

  const userSearch = input => {
    setSearch(input)
  }

  const [user, loading, error] = useAuthState(auth);
  console.log(user?.photoURL)
  return (
    <div style={{position: 'sticky', top: '0', zIndex: '100'}}>
      <Navbar bg="light" expand="lg">
        <Container style={{width: '100vw'}}>
          <Navbar.Brand className='fs-3 fw-bold' href="#" style={{color: '#0188CC'}}>E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className='ms-lg-5 nav-bar-childrens'>
            <div className='input-field-div input-side-div'>
              <Form onSubmit={(e) => e.preventDefault()} className="d-flex">
                <FormControl
                onBlur={(e) => setValue(e.target.value)}
                type="search"
                placeholder="Search"
                className="me-2 fw-bold"
                aria-label="Search"
                style={{borderRadius: '20px', paddingRight: '2.8rem'}}
              />
                <p onClick={() => userSearch(inputValue)} className='fs-5 position-absolute' style={{right: '25px'}}>
                    <BsSearch/>
                </p>
            </Form>
            </div>
            <div className='d-none ms-lg-5 d-lg-flex  align-items-center contact-num-side'>
              <div>
                <BsTelephoneForward className='fs-2'/>
              </div>
              <div className='ms-1 d-flex flex-column'>
                <small className='ms-3 p-0 fw-bold' style={{color: 'gray'}}>
                  CALL US NOW
                </small>
                <h4 className='m-0 p-0'>
                +123 5678 890
                </h4>
              </div>
            </div>
            <div className='ms-lg-4 d-flex flex-lg-column align-items-center'>
            <div className='d-flex nav-icons-side'>
              <Link to={'/signin'} className='my-0 mx-2 fs-3'><FaUserPlus/></Link>
              <p className='my-0 mx-2 fs-3'><VscHeart/></p>
              <p className='my-0 mx-2 fs-3'><BsBagPlus/><sup>{cart.length}</sup></p>
            </div>
            <Nav
              className="me-auto my-2 my-lg-0"
              navbarScroll
            >
              <Nav.Link className='fw-bold fs-6' as={Link} to={'/'}>Home</Nav.Link>
              <Nav.Link className='fw-bold fs-6' as={Link} to={'/products'}>Products</Nav.Link>
              <Nav.Link as={Link} to = {'/checkout'} className='fw-bold fs-6' href="#action2">Checkout</Nav.Link>
            </Nav>
            </div>
            <div className='profile-img-div d-flex align-items-center'>
        <p onClick={() => signOut(auth)} className='my-0 me-2 fw-bold ' style={{color: '#0d6efd'}}>Sign-out</p>
        <img src= {user ? user?.photoURL : "https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" } alt="" style={{width: '35px', height: '35px', borderRadius: '50%'}} />
      </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;