import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
const baseUrl = "http://localhost:5000/api/products";
  const getProducts = async () => {
    const {data} = await axios.get(baseUrl);
    setProducts(data.products);
  };

  const addProducts = async (product) => {
    await axios.post(baseUrl, product);
  }

  const deleteProduct = async(id) => {
    await axios.delete(`${baseUrl}/${id}`)
  };

  const updateProduct = async (id, product) => {
await axios.put(`${baseUrl}/${id}`, product)
  } 
useEffect(() => {getProducts()}, [
    products
]);
  return (
    <ProductContext.Provider value={{ products, getProducts, addProducts, deleteProduct, updateProduct }}>{children}</ProductContext.Provider>
  );
};

export const productList = () => useContext(ProductContext);