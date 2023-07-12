import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Config } from "./Config";
import Loading from "./Loading";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

function AddProduct() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [productId, setProductId] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const products = await axios.get(`${Config.api}/getproduct`);
        setProductList(products.data.product);
        setLoading(false);
      } catch (error) {
        alert("Something went wrong");
      }
    };
    fetchData();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${Config.api}/deleteprod/${id}`);
      setProductList((prevList) =>
        prevList.filter((product) => product._id !== id)
      );
      alert("Deleted Successfully");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  const editProduct = (id) => {
    setProductId(id);
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <br /> <br />
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0">Product Details</h1>
        <div className="card-header py-3">

          <Link to={"/create-product"} >
            <button className='create'>
              Create Product
            </button>
          </Link>
        </div>
        <Button variant="outlined" color="error" onClick={logout}>
          Logout
        </Button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image url</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((product) => (
                    <tr key={product._id}>
                      <td>{product._id}</td>
                      <td>{product.Name}</td>
                      <td>{product.Price}</td>
                      <td>{product.Url}</td>
                      <td>

                        <Stack direction="row" spacing={2}>
                          <Link
                            to={`/editproduct/${product._id}`}
                            onClick={() => editProduct(product._id)}
                          >
                            <Button variant="contained" endIcon={<SendIcon />}>
                              Edit
                            </Button>
                          </Link>


                          <Button variant="outlined" startIcon={<DeleteIcon />}
                            onClick={() => deleteProduct(product._id)}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProduct;
