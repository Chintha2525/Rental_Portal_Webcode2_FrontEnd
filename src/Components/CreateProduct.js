import axios from "axios";
import { useFormik } from "formik";
import { Config } from "./Config"
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProduct() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Name: "",
      Price: "",
      Url: "",
      Quantity: "",
      Hours: ""
    },
    validate: (values) => {
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
    },
    onSubmit: async (values) => {
      try {
        await axios.post(`${Config.api}/product`, values);
        alert("Added Successfully");
        navigate('/addproduct');
      } catch (error) {
        console.log(error);
        alert("Error");
      }
    },
  });

  return (
    <div className="create-product">
      <div>
        <br /> <br /> <br />
        <h2 className="create-product-header">Create Products Form</h2>
      </div>
      <br />
      <form onSubmit={formik.handleSubmit}>
        <div className="row create-product-inner">
          <div className="col-lg-8">
            <div className="form-group">
              <label>Name*</label>
              <input
                name="Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
                type="text"
                className={`form-control form-control-user ${formik.touched.Name && formik.errors.Name
                    ? "error-box"
                    : ""
                  } ${formik.touched.Name && !formik.errors.Name
                    ? "success-box"
                    : null
                  }`}
              />
              {formik.touched.Name && formik.errors.Name ? (
                <span style={{ color: "red" }}>{formik.errors.Name}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Price*</label>
              <input
                name="Price"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Price}
                type="text"
                className={`form-control form-control-user ${formik.touched.Price && formik.errors.Price
                    ? "error-box"
                    : ""
                  } ${formik.touched.Price && !formik.errors.Price
                    ? "success-box"
                    : null
                  }`}
              />
              {formik.touched.Price && formik.errors.Price ? (
                <span style={{ color: "red" }}>{formik.errors.Price}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Product Image URL*</label>
              <input
                name="Url"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Url}
                type="text"
                className={`form-control form-control-user ${formik.touched.Url && formik.errors.Url ? "error-box" : ""
                  } ${formik.touched.Url && !formik.errors.Url ? "success-box" : null
                  }`}
              />
              {formik.touched.Url && formik.errors.Url ? (
                <span style={{ color: "red" }}>{formik.errors.Url}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Quantity*</label>
              <input
                name="Quantity"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Quantity}
                type="number"
                className={`form-control form-control-user ${formik.touched.Quantity && formik.errors.Quantity
                    ? "error-box"
                    : ""
                  } ${formik.touched.Quantity && !formik.errors.Quantity
                    ? "success-box"
                    : null
                  }`}
              />
              {formik.touched.Quantity && formik.errors.Quantity ? (
                <span style={{ color: "red" }}>{formik.errors.Quantity}</span>
              ) : null}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Hours*</label>
              <input
                name="Hours"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Hours}
                type="number"
                className={`form-control form-control-user ${formik.touched.Hours && formik.errors.Hours
                    ? "error-box"
                    : ""
                  } ${formik.touched.Hours && !formik.errors.Hours
                    ? "success-box"
                    : null
                  }`}
              />
              {formik.touched.Hours && formik.errors.Hours ? (
                <span style={{ color: "red" }}>{formik.errors.Hours}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12">
            <br />
            <button type="submit" className="btn btn-primary">
              Create Product
            </button>{" "}
            <Link to="/addproduct" className="btn btn-secondary ml-2">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
