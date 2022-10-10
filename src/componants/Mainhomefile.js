import React from "react";
import Foodcat from "./Foodcategories/Foodcat";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Count from './Count/Count'
import Thirdsection from "./Thirdsection/Thirdsection";

function Mainhomefile() {
    return (
        <>
            <Home />
            <Thirdsection />
            <Count />
            <Foodcat />
        </>
    )
}
export default Mainhomefile;