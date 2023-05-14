import { ProductCard2 } from "./Cards/ProductCard2";
import { getProducts } from "../../api";
import { useState, useEffect } from "react";
import '../../Styles/ProductsWaterfall.scss'


export function ProductsWaterfall({props}){ 
    console.log(props);

    return(
        <div className="products-waterfall h-100 p-4">
        {   
            props.map((item) => {
                return(
                    <a className="text-decoration-none" href={`./${item.id}`}>
                        <ProductCard2 props={item}></ProductCard2>
                    </a>
                )
            })
        }
        </div>
    )
}