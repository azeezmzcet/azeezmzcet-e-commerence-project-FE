// App.js
import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./components/FiltredProducts/FilteredProducts";
import SingleProduct from "./components/FiltredProducts/SingleProduct";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.user);
  const registeredUsers = useSelector((state) => state.user.registeredUsers);

  const { authUser } = user;

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/register" element={<Registration /> } />

          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        

          
          <Route path="/filteredProducts/:type" element={<FilteredProducts />} />
          <Route path="/filteredProducts/:type/:id" element={<SingleProduct />} />

         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
