import { useEffect, useState } from "react"
import { Menu } from "./Menu";
import { Products } from "./Products/Products";
import { getProducts, getWishList } from "../api";

export const LayoutProducts = () => {
    const [products, setProducts] = useState([]);
    const [inWishList, setInWishList] = useState([])
    const [loading, setLoading] = useState(false);

    async function handleData(){
        await setLoading(true)
        const data = await getProducts();
        setProducts(data);
    }
    
    async function handleWishList(){
        await setLoading(true)
        const wishlist = await getWishList(localStorage.getItem("id"));
        setInWishList(wishlist)
    }

    function fillLikes(){
        products.forEach(product => {
            product.liked = true;
            inWishList.forEach(wish => {
                if(wish.id_product == product.id)
                product.liked = true;
            })
        })
        setLoading(false);
    }

    useEffect(() => {
        handleData();
        handleWishList();
        fillLikes();
        console.log(products)
    }, [])

    return(
        <div>
            <Menu></Menu>
            {loading == false ? <Products products={products}/> : <h1>Loading...</h1>}
        </div>
    )
}