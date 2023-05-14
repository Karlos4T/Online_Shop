import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct, getProducts } from "../../api"
import "../../Styles/ProductPage.scss"
import { ProductsWaterfall } from "./ProductsWaterfall";
import { Menu } from "../Menu"
import '../../Styles/ProductPage.scss'

export function ProductPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState({
        images: "./free.png"
    });
    const params = useParams();

    const handleProducts = async () => {
        setLoading(true);
        const [data1] = await getProduct(params.id);
        await setProduct(data1);
        const data2 = await getProducts();
        await setProducts(data2);
        if(products.length() > 0)
            setLoading(false);
    }
    const imgs = require.context("../../Images", true)
    
    useEffect(() => {
        handleProducts();
    }, [])
    console.log(product);
    
    return(
        <div className="container-fluid container-product-page p-0">
            <div style={{backgroundColor: product.colors}} className="background">
                <div></div>
                <h1 style={{WebkitTextStrokeColor: product.colors}} className="bg-name-left">{product.model}</h1>
                <h1 style={{WebkitTextStrokeColor: 'rgb(241, 241, 241)'}} className="bg-name-left">{product.model}</h1>
            </div>
            <div className="row product-container h-100">
                <Menu style={product}></Menu>
                    <div className="col-3 d-none d-lg-flex flex-column h-100 my-3 align-items-center">
                        <img className="w-50 my-4" src={imgs(`./logo/Nike.png`)} alt="" />
                        {loading == true ? <ProductsWaterfall props={products}></ProductsWaterfall> : <h3>Loading...</h3>}
                    </div>
                    <div className="col-8 col-md-5 h-100 d-flex flex-column justify-content-center align-items-center">
                        <img className="product" src={imgs(product.images)} alt=""/>
                        <div></div>
                    </div>
                    <div className="col-4 p-3 container-desc h-100 d-flex flex-column align-items-center justify-content-end">
                        <div></div>
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <h1>{product.title}</h1>
                            <div className="d-flex desc align-items-center flex-column p-3">
                                <p className="text-center"><b>{product.desc}</b></p>
                            </div>
                        </div>
                        <div className="w-100 my-2 d-flex justify-content-center">
                            <button className="add-cart px-5"><h1>Add to cart</h1></button>
                        </div>
                        <h1 className="price">{product.price}€</h1>
                </div>
            </div>
        </div>
    )
}