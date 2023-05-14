import { useEffect, useState } from "react";
import { getUser, getWishList } from "../api";
import { Menu } from "./Menu";
import { Products } from "./Products/Products";
import { ProductsDisplay } from "./Products/ProductsDisplay";


export function Profile(){
    const [user, setUser] = useState({});
    const [wishlist, setInWishList] = useState([]);

    const handleUsers = async () => {
        const [data] = await getUser(localStorage.getItem("id"));
        await setUser(data);
    }

    const handleWishList = async () => {
        const data = await getWishList(localStorage.getItem("id"));
        await setInWishList(data);
        await console.log(wishlist)
    }
    
    const logOut = () => {
        if(localStorage.getItem("name")){
            localStorage.removeItem("name")
        }
        if(localStorage.getItem("id")){
            localStorage.removeItem("id")
        }
    }

    useEffect(() => {
        handleUsers();
        handleWishList();
    }, [])
    
    return(
        <div>
            <Menu></Menu>
            <div className="pt-5"></div>
            <h1>{(`Bienvenido ${user.name}`)}</h1>
            <button onClick={() => logOut()}>Cerrar sesión</button>
            
            <ProductsDisplay products={wishlist} card={5}/>
        </div>
    )
}