import { connect } from "../database";



export const getCollections = async (req, res) => {
    try{   
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `name` FROM `collections`");
        res.send(rows);
    }
    catch(err){
        res.send(err.message);
    }
}