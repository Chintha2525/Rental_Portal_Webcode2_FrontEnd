import React, { useContext, useState } from "react";
import { UserContext } from "./Context";
import Calendar from "./Calendar";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

function CartItems() {
  const cartitems = useContext(UserContext);
  let a = cartitems.CartItems;

  let addItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id === id);
    console.log(index);
    if (a[index].Quantity !== 5) {
      a[index].Quantity += 1;
    }
    cartitems.setCartItems([...a]);
  };

  let removeItems = (id) => {
    console.log(id);
    let index = a.findIndex((cart) => cart._id === id);
    console.log(index);
    if (a[index].Quantity !== 0) {
      a[index].Quantity = a[index].Quantity - 1;
    }
    cartitems.setCartItems([...a]);
  };

  let removeFromCart = (id) => {
    const indexVal = a.findIndex(obj => obj._id === id);
    a.splice(indexVal, 1);
    cartitems.setCartItems([...a])
  };

  var total = cartitems.CartItems.reduce((acc, curr) => {
    return (acc = acc + curr.Price * curr.Quantity * curr.Hours);
  }, 0);

  const [amount, setAmount] = useState();

  const finalOrder = (e) => {
    setAmount(total);
    console.log(amount);
    e.preventDefault();
    if (total === 0) {
      alert("Please add items to cart");
    } else {
      var options = {
        key: "rzp_test_nM68sSAtt5ZXMo",
        key_secret: "hECizEx7tDJuogrfSfW5fHeH",
        amount: total * 100,
        currency: "INR",
        name: "Equipment Rental Portal",
        description: "testing purpose",
        handler: function (response) {
          removeFromCart();
          alert(response.razorpay_payment_id);
          alert(
            "We have received your order and will reach out to you by phone shortly."
          );
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Razor Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="table-body">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Days</th>
                <th scope="col">Total Hours</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartitems.CartItems.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.Name}</td>
                    <td>{item.Price}</td>
                    <td>
                      <Calendar id={item._id} />
                    </td>
                    <td>{item.Hours}</td>
                    <td>
                      <div className="row">
                        <div className="col-lg-2">
                          <RemoveCircleRoundedIcon
                            onClick={() => {
                              removeItems(item._id);
                            }}
                          />
                        </div>
                        <div className="text-center col-lg-3">
                          <span>{item.Quantity}</span>
                        </div>

                        <div className="col-lg-2">
                          <AddCircleRoundedIcon
                            onClick={() => {
                              addItems(item._id);
                            }}
                          />
                        </div>
                      </div>
                    </td>
                    <td>{item.Price * item.Quantity * item.Hours}</td>
                    <td>
                      <CancelRoundedIcon
                        onClick={() => {
                          removeFromCart(item._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h3>Total Amount: {total}</h3>
        <button onClick={finalOrder} className="btn btn-primary sm-1">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CartItems;
