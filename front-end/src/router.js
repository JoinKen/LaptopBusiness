import React from "react";
import Home from '../src/Pages/Home';
import Cart from '../src/Pages/Cart';
import ProductDetail from './Pages/ProductDetail';

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
        path: "/Product",
        exact: true,
        main: () => <ProductDetail />
    }
]
export default router;