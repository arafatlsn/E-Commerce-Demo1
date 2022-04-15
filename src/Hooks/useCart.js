import { useState } from "react"

const useCart = () => {
  const [cart, setCart] = useState([]);
  console.log(cart)
  return { cart, setCart }
}


export default useCart