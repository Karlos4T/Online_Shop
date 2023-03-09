import { connect } from "../database";

export const getProducts = async (req, res) => {
    try{   
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `title`, `desc`, `img_path`, `images`, `price`, `collection` FROM `products`");
        res.send(rows);
    }
    catch(err){
        res.send(err.message);
    }
}

export const uploadProducts = async (req, res) => {
    try{
        const db = await connect();
        const result = await db.query("INSERT INTO `products` (`title`, `desc`, `img_path`, `images`, `price`, `collection`) VALUES (?, ?, ?, ?, ?, ?)",
        [req.body.title, req.body.desc, req.body.img_path, req.body.images, req.body.price, req.body.collection]);
        res.send(req.body.title);
    }
    catch(err){
        res.send(err.message);
    }
}