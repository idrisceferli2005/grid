import React from "react";
import "./AdminPanel.css";
import BasicModal from "../../utils/modal/Modal";
import { useState } from "react";
import { productList } from "../../../context/productContext";

const AdminPanel = () => {

    const {products, addProducts, deleteProduct, updateProduct} = productList(); 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [formData, setFormData] = useState({
    image: "",
    name: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
        await addProducts(formData)
        handleClose();
        setFormData({
            image: "",
            name: "",
            category: "",
            price: "",
        })
    } catch (error) {
        console.log(error)
    }
  }

  const handleDeleteProduct = async (id) => {
    try {
        await deleteProduct(id);
    } catch (error) {
        console.log(error)
    }
  };
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
        await updateProduct(formData._id, formData);
        handleClose();
        setFormData({
            image: "",
            name: "",
            category: "",
            price: "",
        })
    } catch (error) {
        console.log(error)
    }
  };
  


  
  return (
    <div className="admin-container">
      <main className="content">
        <header>
          <h1>Productlarin Siyahisi</h1>
          <button className="add-btn" onClick={handleOpen}>
            Create
          </button>
        </header>
        <section>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products && products.length > 0 ? (
                products.map((product) => (
                  <tr key={product._id}>
                    <td className="product-id">{product._id}</td>
                    <td>
                      <img
                        className="product-image"
                        src={product.image}
                        alt=""
                      />
                    </td>
                    <td className="product-title">
                      {product.name.slice(0, 20)}...
                    </td>
                    <td className="product-category">{product.category}</td>
                    <td className="product-price">{product.price}Azn</td>
                    <td>
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setFormData(product);
                          handleOpen();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDeleteProduct(product._id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No products</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
        <BasicModal
          open={open}
          handleClose={handleClose}
          formData={formData}
          handleChange={handleChange}
          handleSubmit={formData._id ? handleUpdateProduct : handleAddProduct}
        />
      </main>
    </div>
  );
};

export default AdminPanel;