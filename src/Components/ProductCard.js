import axios from "axios";
import React, { useContext } from "react";
import { Config } from "./Config";
import { UserContext } from "./Context";

function ProductCard({ item }) {
  const cart = useContext(UserContext);
  const CartItem = cart.CartItems;
  const setcart = cart.setCartItems;
  const Add = async (_id) => {
    let product = await axios.get(`${Config.api}/oneproduct/${_id}`);
    console.log(product.data);
    let addproduct = product.data.product;
    CartItem.push(addproduct);
    setcart([...CartItem]);
  };
  return (
    <div className="col-lg-4 mt-4" style={{ background: "aliceblue" }}>
      <div className="card card-prod" style={{ width: "17em" }}>
        <img
          className="card-img"
          src={item.Url}
          alt="Product img"
          width={"80px"}
          height="200px"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {item.Name}</h5>
          <p className="card-text">Price/Hr: {item.Price}</p>
          <button
            className="btn card-btn"
            disabled={CartItem.some((obj) => obj._id === item._id)}
            onClick={() => {
              Add(item._id);
            }}
          >
            {CartItem.some((obj) => obj._id === item._id)
              ? "Added to cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;