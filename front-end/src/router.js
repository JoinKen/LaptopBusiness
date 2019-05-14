import Home from '../src/Pages/Home';
import React from "react";

const router = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    // {
    //     path:"/Product",
    //     exact: false,
    //     main :() => <Product/>   
    // }
]
export default router;