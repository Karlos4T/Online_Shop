import { useEffect, useState } from "react"
import { Menu } from "../Menu";
import { Product } from "./Product";



export function Products(){
    const data = ["perro", "gato", "pez"];
    const [products, setProducts] = useState([]);

    function handleData(){
        setProducts(data);
    }

    useEffect(() => {
        handleData();
    }, [])


    return(
        <div>
            <Menu></Menu>
            <h1>PRODUCTS</h1>
            <a className="btn btn-success" href="./editproducts">Edit Products</a>
            {console.log(products)}
            {products.map((item, i) => {
                return(
                    <Product
                    key={i}
                    props={item}/>
                )
            })}
        </div>
    )
}