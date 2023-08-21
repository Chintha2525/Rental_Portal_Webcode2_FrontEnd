import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { UserProvider } from './Components/Context'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from "./Components/Home"
import Login from "./Components/Login"
import Products from "./Components/Products"
import CartItems from './Components/CartItems'
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct';
import CreateProduct from './Components/CreateProduct';
import Contact from './Components/Contact';
import Option from './Components/Option';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={
            <React.Fragment>
              <Header />
              <Home />
              <Option />
            </React.Fragment>
          } />

          <Route exact path='/products' element={
            <React.Fragment>
              <Header />
              <Products />
              <Option />
            </React.Fragment>
          } />

          <Route exact path='/cartitems' element={
            <React.Fragment>
              <Header />
              <br />
              <CartItems />
              <Option />
            </React.Fragment>
          } />

          <Route exact path='/login' element={
            <React.Fragment>
              <Header />
              <Login />
              <Option />
            </React.Fragment>
          } />

          <Route path="/addproduct" element={<AddProduct />} />

          <Route path="/editproduct/:id" element={<EditProduct />} />

          <Route path="/create-product" element={<CreateProduct />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
