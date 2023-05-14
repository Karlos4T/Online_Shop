import { connect } from "../database"

export const getUsers = async (req, res) => {
    try{
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `name`, `mail`, `password`, `fecha_reg` FROM `profiles`");
        res.send(rows);
    }
    catch(err){
        res.send(err.message);
    }
}

export const getUser = async(req, res) => {
    try{
        const db = await connect();
        const [rows] = await db.query("SELECT `id`, `name`, `mail`, `password`, `fecha_reg` FROM `profiles` WHERE `id` = ?", [req.params.id]);
        res.send(rows);
    }
    catch(err){
        res.send(err.message);
    }
}

export const insertUser = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT `mail` FROM `profiles` WHERE `mail` = ?", [req.body.mail], (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.lenght > 0) {
                res.status(200).send(result[0])
            } else
                res.status(400).send("Usuario no encontrado")
        }
    });
    if (rows.length <= 0){
        const resp = await db.query("INSERT INTO `profiles` (`name`, `mail`, `password`, `fecha_reg`) VALUES (?, ?, ?, ?)", 
            [req.body.name, req.body.mail, req.body.password, req.body.bornDate])
        if (resp)    
            res.send("Registro completo");
    } else {
        res.send("Usuario registrado");
    }
}

export const checkUser = async (req, res) => {
    const db = await connect();
    const [rows] = await db.query("SELECT `mail`, `password` FROM `profiles` WHERE `mail` = ?", [req.body.mail]);
    if (rows.length > 0){
        if (rows[0].password == req.body.password){
            const [rows] = await db.query("SELECT `id`, `name`, `mail` FROM `profiles` WHERE `mail` = ?", [req.body.mail]);
            res.json(rows[0]);
        }
        else
        res.send("Contraseña y mail no coinciden");
    } else {
        res.send("Correo no registrado")
    }
}

export const delUsersTab = async (req, res) => {
    const db = await connect();
    const resp = await db.query("DELETE FROM `profiles` WHERE `id` = 0");
}