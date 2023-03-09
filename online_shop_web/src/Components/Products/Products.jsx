import { useEffect, useState } from "react"
import { getProducts } from "../../api";
import { Menu } from "../Menu";
import { ProductCard } from "./ProductCard";



export function Products(){
    //const data = ["perro", "gato", "pez"];
    const [products, setProducts] = useState([]);

    async function handleData(){
        const data = await getProducts();
        //console.log(datas);
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
            <div className="d-flex justify-content-between container">
                {products.map((item, i) => {
                return(
                    <ProductCard
                    key={i}
                    props={item}/>
                    )
                })}
            </div>
        </div>
    )
}