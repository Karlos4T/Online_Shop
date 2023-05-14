import { connect } from "../database";

export const getProducts = async (req, res) => {
    try{
        if (req.params.quantity){
            const quantity = parseInt(req.params.quantity)
            const db = await connect();
            const [rows] = await db.query("SELECT `id`, `brand`, `title`, `model`, `desc`, `img_path`, `images`, `price`, `collection`, `colors`, `likes` FROM `products` LIMIT ?", [quantity]);
            res.send(rows);
        }
        else{
            const db = await connect();
            const [rows] = await db.query("SELECT `id`, `brand`, `title`, `model`, `desc`, `img_path`, `images`, `price`, `collection`, `colors`, `likes` FROM `products`");
            res.send(rows);
        }
    }
    catch(err){
        res.send(err.message);
    }
}

export const getProduct = async (req, res) => {
    try{   
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `brand`, `title`, `model`, `desc`, `img_path`, `images`, `price`, `collection`, `colors`, `likes` FROM `products` WHERE id = ?", req.params.id);
        res.send(rows);
    }
    catch(err){
        res.send(err.message);
    }
}


export const uploadProducts = async (req, res) => {
    try{
        const db = await connect();
        const [result] = await db.query("INSERT INTO `products` (`brand`, `title`, `model`, `desc`, `img_path`, `images`, `price`, `colors`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [req.body.brand, req.body.title, req.body.model, req.body.desc, req.body.path, req.body.img, req.body.price, req.body.colors]);
        res.json({
            id: result.insertId,
            ...req.body
        });
    }
    catch(err){
        res.send(err.message);
    }
}