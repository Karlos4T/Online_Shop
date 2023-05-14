import { useEffect, useState } from "react";
import "../../../Styles/ProductCard5.scss";
import { removeFromWishList } from "../../../api";


export const ProductCard5 = ({props}) => {
    const [modified, setModified] = useState(false);

    function deleteWish(){
        removeFromWishList({id_product: props.id, id_user: localStorage.getItem("id")})
        window.location.reload()
    }

    useEffect(() => {

    }, [modified])

    const imgs = require.context("../../../Images", true);
    return(
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="cube">
                <div className="h-100 flippety p-3 d-flex justify-content-center align-items-center" style={{backgroundColor: props.colors}}>
                    <img className="w-100" src={imgs(props.images)} alt="" />
                </div>
                <div className="h-100 flop d-flex justify-content-center align-items-center" style={{backgroundColor: props.colors}}>
                    <a onClick={() => deleteWish()} className="w-50 h-100 d-flex justify-content-center align-items-center text-decoration-none h2 m-0">
                        🗑️
                    </a>
                    <a href={`../products/${props.id}`} className="w-50 h-100 d-flex justify-content-center align-items-center text-decoration-none h2 m-0">
                        👀
                    </a>
                </div>
            </div>
        </div>
    )
}