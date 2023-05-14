import { Router } from "express";
import { getProducts, uploadProducts, getProduct } from "../functions/products";
import { getCollections } from "../functions/collections";
import { getUser, getUsers, insertUser, checkUser } from "../functions/users";
import { getWishList, getWishListUser, insertIntoWishList, removeFromWishList } from "../functions/wishlist";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/products", getProducts);

router.post("/products", uploadProducts);

router.get("/products/:quantity", getProducts);

router.get("/product/:id", getProduct);

router.get("/collections", getCollections);

router.post('/images', (req, res) => {
    console.log(req.body)
})

router.get("/users", getUsers);

router.get("/users/:id", getUser);

router.post("/users", insertUser);

router.post("/checkuser", checkUser);

router.get("/wishlist", getWishList);

router.get("/wishlist/:id", getWishListUser);

router.post("/wishlist", insertIntoWishList);

router.delete("/wishlist", removeFromWishList)

export default router;