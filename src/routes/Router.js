import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/index";
import AllProducts from '../components/products.js';
import DetailsPage from "../pages/detailPage/index";
import CartCheckOutPage from "../pages/cart/index"
import ContactPage from "../pages/contact/index"
import PageNotFound from "../pages/pagenotfound/index"
import CheckOutSuccess from '../pages/checkout/index';

function Router() {
    return (

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<AllProducts />} />
                <Route path="/product/:id" element={<DetailsPage />} />
                <Route path="/cart" element={<CartCheckOutPage />} />
                <Route path="/checkout" element={<CheckOutSuccess />} />
                <Route path="/contact-us" element={<ContactPage />} />
                <Route path="*" element={<PageNotFound />} />  
            </Routes>

    );
}

export default Router;