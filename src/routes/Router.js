import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/homepage/index";
import DetailsPage from "../pages/detailPage/index";
// import CartCheckOutPage from "../components/views/CartCheckOutPage";
// import ContactUsPage from "../components/views/ContactUsPage";
// import PageNotFound from "../components/views/PageNotFound";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<HomePage />} />
                <Route path="/product/:id" element={<DetailsPage />} />
                {/* <Route path="/cart" element={<CartCheckOutPage />} />
                <Route path="/contact-us" element={<ContactUsPage />} />
                <Route path="*" element={<PageNotFound />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;