import { useEffect, useState } from "react"

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('phone_laptop_smart-tv.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return { products, setProducts }
}

export default useProducts;