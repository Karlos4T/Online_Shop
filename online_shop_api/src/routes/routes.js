import { Router } from "express";
import { getProducts, uploadProducts } from "../functions/products";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World");
});

router.get("/products", getProducts);

router.post("/products", uploadProducts);

export default router;