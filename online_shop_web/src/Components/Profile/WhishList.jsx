import { useEffect, useState } from "react"




export function WishList(){
    const [wishList, setWishList] = useState([])
    const [products, setProducts] = useState([]);

    async function handleData(){
        const data = await getProducts();
        await setProducts(data);
        const wishlist = await getWishList(localStorage.getItem("id"));

        data.forEach(product => {
            product.liked = false;
            wishlist.forEach(wish => {
                if(wish.id_product == product.id)
                    wishList.join
            })
        })
    }

    useEffect(() => {
        handleData();
    }, [])

    const handleWishList = () => {
        
        setWishList()

    }



    useEffect(() => {
        
    },[])

    return(

    )
}