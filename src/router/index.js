import { Route, Routes } from "react-router-dom";
import { Home, Detail, Cart, Products } from "../pages";

const Router = () => {
    return(

    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/:id" element={<Detail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />

    </Routes>

    );

};

export default Router;