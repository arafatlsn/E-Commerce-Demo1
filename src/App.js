import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthRequire from './Components/Checkout/AuthRequire';
import Checkout from './Components/Checkout/Checkout';
import Products from './Components/Products/Products';
import SignUp from './Components/SignUp/SignUp';
import Header from './Pages/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import SignIn from './Pages/SignIn/SignIn';

export const CartContext = createContext()

function App() {

  const [cart, setCart] = useState([]);
  const [searchInput, setSearch] = useState('')

  return (
    <div>
      <CartContext.Provider value={{cart, setCart, searchInput, setSearch}}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/checkout' element={<AuthRequire>
            <Checkout></Checkout>
          </AuthRequire>}></Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
