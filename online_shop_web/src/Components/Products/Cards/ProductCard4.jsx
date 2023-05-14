import { useEffect, useState } from "react";
import "../../../Styles/ProductCard4.scss";
import { setInWishList, removeFromWishList } from "../../../api";


/*+++++++++++++++++++++++++++++ Estilos ++++++++++++++++++++++++++++++++*/

const StyleSneakerCard = {
    border: "1px solid #dddd",
  fontSize: "12px",
};

/*---------------------------------------------------------------------*/

export function ProductCard4({props}) {
    const [newImg, setNewImg] = useState(null);
    const [liked, setLiked] = useState(false)
    const imgs = require.context("../../../Images", true);
    
//++++++++++++++++++++++++++++++++++++++++ Funcion Animacion LikeDislike ++++++++++++++++++++++++++++++++++++//
    function AnimationLikeDislike(id) {
        const btn = document.getElementById(id + "Like");
        if (btn.classList.contains("Liked")) {
            btn.style.color = "black";
            btn.textContent = "♡";
            btn.classList.remove("Liked");
            removeFromWishList({id_user: localStorage.getItem("id"), id_product: id});
        } 
        else {
            btn.style.color = "#f0116e";
            btn.textContent = "♥";
            btn.classList.add("Liked");
            setInWishList({id_user: localStorage.getItem("id"), id_product: id});
        }
    }
  //-----------------------------------------------------------//

  useEffect(() => {
    console.log(props)
    if(props.liked === true)
        setLiked(true);
    }, [])
  return (
        <div
        className="p-3 ContainerCard pr-0 col-12 m-0 col-md-6 col-lg-4 col-xl-3 "
        id={props.id}
        style={StyleSneakerCard}
        >
            <div className="row">
                <div id={props.id + "ContainerTitle"} className="col-10">
                    <div className="row">
                        <div className="col-12 title">
                        <h4 className="brand text-dark">
                            <b>{props.brand}</b>
                        </h4>
                        <h5 className="text-secondary model">{props.model}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-1 ContainerAddLikeButton p-0">
                    <button
                        id={props.id + "Like"}
                        style={liked ? {color: "#f0116e"} : {color: "#333333"}}
                        className={`AddLikeButton d-none ${liked ? "Liked": ""}`}
                        onClick={() => AnimationLikeDislike(props.id)}
                    >
                    <b>{`${liked ? "♥": "♡"}`}</b>
                    </button>
                </div>
            </div>
        <a 
            name="ContainerCard"
            className="text-decoration-none"
            href={`./products/${props.id}`}>
            <div className="row d-flex justify-content-evenly">
                <div
                id={"dataPageProductL" + props.id}
                className="dataPageProduct d-none col-3 d-flex justify-content-center"
                >
                    <div className="w-50">
                    </div>
                </div>
                    <div
                    id={"zapa_img" + props.id}
                    className="d-flex col-12 justify-content-center ContainerImg"
                    >
                    <img
                        alt=""
                        id="mainSneaker"
                        className="w-75 m-3 zapa"
                        src={imgs(props.images)}
                    />
                    </div>
                    <div
                    id={"dataPageProductR" + props.id}
                    className="dataPageProduct d-none col-3 d-flex justify-content-center"
                    >
                    <div>
                        <div>
                        <p className="text-secondary text-center">
                            <b>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Itaque, perferendis recusandae voluptatum saepe sint quibusdam
                            in aspernatur earum pariatur consequuntur, omnis enim laborum,
                            fuga quia eos molestiae temporibus nam neque.
                            </b>
                        </p>
                        </div>
                        <h6 className="text-center">Pick a color</h6>
                    </div>
                </div>
            </div>
        </a>
        <div
            className="row text-center mt-4"
        >
            <div className="col-1"></div>
            <div className="col-6 d-flex">
            <button className="btnAddToCart px-3 mx-4 d-none">
                <h6 className="m-0">Add to cart</h6>
            </button>
            <button className="btnBuyNow px-3 d-none">
                <h6 className="m-0">Buy Now</h6>
            </button>
            </div>
            <div className="col-1"></div>
            <div className="col-4 priceLabel m-0 d-flex justify-content-center">
            <h2 className="mx-5 text-light my-0">
                <b>{props.price}€</b>
            </h2>
            </div>
        </div>
        <div>
            <div className="row"></div>
        </div>
        </div>
  );
}
