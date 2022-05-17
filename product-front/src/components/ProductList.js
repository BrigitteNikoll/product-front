
import React, {useEffect} from 'react'

export const ProductList = () => {
    useEffect(() => {
        fetch("http://localhost:5000/api/products");
    }, [])
  return (
    <div>PRODUCTS!!!!1</div>
  )
}
