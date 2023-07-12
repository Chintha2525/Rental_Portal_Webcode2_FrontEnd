import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Config } from "./Config";

function EditProduct() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [initialValues, setInitialValues] = useState({
    Name: "",
    Price: "",
    Url: "",
    Quantity: "",
    Hours: "",
  });

  const handleSubmit = async (values) => {
    try {
      await axios.put(`${Config.api}/updateprod/${id}`, values);
      alert("Product updated successfully");
      navigate("/addproduct");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const handleReset = (resetForm) => {
    resetForm();
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.Name) {
      errors.Name = "Please enter the Product Name";
    }
    if (!values.Price) {
      errors.Price = "Please enter the Price";
    }
    if (!values.Url) {
      errors.Url = "Please add the image URL";
    }
    if (!values.Quantity) {
      errors.Quantity = "Please enter the quantity";
    }
    if (!values.Hours) {
      errors.Hours = "Please enter the hours";
    }
    return errors;
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${Config.api}/oneproduct/${id}`);
        const product = response.data.product;
        setInitialValues({
          Name: product.Name,
          Price: product.Price,
          Url: product.Url,
          Quantity: product.Quantity,
          Hours: product.Hours,
        });
      } catch (error) {
        alert("Something went wrong");
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="container">
      <h1>Edit Product</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validateForm} onReset={handleReset}>
        {/* {({ resetForm }) => ( */}
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" className="form-control" id="name" name="Name" />
            <ErrorMessage name="Name" component="div" className="error-message" style={{ color: "red" }} />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="text" className="form-control" id="price" name="Price" />
            <ErrorMessage name="Price" component="div" className="error-message" style={{ color: "red" }} />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <Field type="text" className="form-control" id="imageUrl" name="Url" />
            <ErrorMessage name="Url" component="div" className="error-message" style={{ color: "red" }} />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <Field type="number" className="form-control" id="quantity" name="Quantity" />
            <ErrorMessage name="Quantity" component="div" className="error-message" style={{ color: "red" }} />
          </div>
          <div className="form-group">
            <label htmlFor="hours">Hours</label>
            <Field type="number" className="form-control" id="hours" name="Hours" />
            <ErrorMessage name="Hours" component="div" className="error-message" style={{ color: "red" }} />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Update Product
          </button>
          {" "}
          <Link to="/addproduct" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </Form>
        {/* )} */}
      </Formik>
    </div>
  );
}

export default EditProduct;




