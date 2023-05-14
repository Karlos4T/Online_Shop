import { ProductCard4 } from "./Cards/ProductCard4";

export function Products({products}){
    
    return(
        <div>
            <div style={{height: '10vh'}}></div>
            <h1>PRODUCTS</h1>
            <a className="btn btn-success" href="./editproducts">Edit Products</a>
            <div className="w-100 d-flex flex-wrap p-3 justify-content-start container-fluid">
                {products.map((item, i) => {
                    return(
                        <ProductCard4
                            key={i}
                            props={item}/>
                        )
                    }
                )}
            </div>
        </div>
    )
}
