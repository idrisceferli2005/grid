import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

export default function BasicModal({
  open,
  handleClose,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {formData._id ? "Update Product" : "Create Product"}
          </Typography>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image
              </label>
              <input
                type="url"
                className="form-control"
                id="image"
                placeholder="image"
                required
                accept="image/*"
                value={formData.image}
                onChange={handleChange}
                name="image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                placeholder="Category"
                required
                value={formData.category}
                onChange={handleChange}
                name="category"
              />
            </div>
 
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                placeholder="Price"
                required
                value={formData.price}
                onChange={handleChange}
                name="price"
              />
            </div>
            <button type="submit" className="btn btn-primary submit">
              {formData._id ? "Update" : "Create"}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}