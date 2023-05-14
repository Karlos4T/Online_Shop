import { connect } from "../database"

export const getWishList = async (req, res) => {
    try{
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `id_user`, `id_product` FROM `wishlist`");
        res.send(rows)
    }
    catch(err){
        res.send(err.message);
    }
}

export const getWishListUser = async (req, res) => {
    try{
        const db = await connect();
        const wish = [];
        const [rows] = await db.query("SELECT `id_product` FROM `wishlist` WHERE `id_user` = ?", [req.params.id]);
        if (rows){
            rows.map((row) => {wish.push(row.id_product)});
            console.log(`${wish}`)
            if (wish.length > 0)
            {
                const [resp] = await db.query(`SELECT * FROM products WHERE id IN (${wish})`);
                res.send(resp);
            }
            else
                res.send([])
        }
    }
    catch(err){
        res.send(err.message);
    }
}


export const insertIntoWishList = async (req, res) => {
    console.log(req.body)
    try{
        const db = await connect();
        const resp = await db.query("INSERT INTO `wishlist` (`id_user`, `id_product`) VALUES (?, ?)", 
            [req.body.id_user, req.body.id_product]);
        if (resp)
            res.send("Liked");
    }
    catch(err){
        res.send(err.message);
    }
}


export const removeFromWishList = async (req, res) => {
    console.log(req.body)
    try{
        const db = await connect();
        const resp = await db.query("DELETE FROM `wishlist` WHERE `id_user` = ? AND `id_product` = ?", 
            [req.body.id_user, req.body.id_product]);
        if (resp)
            res.send("Unliked");
    }
    catch(err){
        res.send(err.message);
    }
}