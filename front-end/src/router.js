import React from "react";
import Home from '../src/Pages/Home';
import Cart from '../src/Pages/Cart';
import ProductDetail from './Pages/ProductDetails';

const router = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/Cart",
        exact: true,
        main: () => <Cart />
    },
    {
        path: "/productDetail",
        exact: false,
        main: () => <ProductDetail />
    }
]
export default router;