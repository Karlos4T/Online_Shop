import { useState } from "react"
import "../Styles/Login.scss"
import { uploadUser, checkUser } from "../api";
import { Menu } from "./Menu";

export function Login(){
    const [dataUser, setDataUser] = useState({
        name: "",
        surname: "",
        mail: "",
        bornDate: "",
        password: ""
    });


    function switchToSingin(){
        const loginContainer = document.getElementById("containerLogin");
        const singinContainer = document.getElementById("containerSingin");
        const loginBtn = document.getElementById("loginBtn");
        const singinBtn = document.getElementById("singinBtn");

        singinBtn.style.backgroundColor = "aliceblue";
        loginBtn.style.backgroundColor = "rgb(167, 172, 176)";
        loginContainer.classList.replace("d-block", "d-none");
        singinContainer.classList.replace("d-none", "d-block");
    }

    function switchToLogin(){
        const loginContainer = document.getElementById("containerLogin");
        const singinContainer = document.getElementById("containerSingin");
        const loginBtn = document.getElementById("loginBtn");
        const singinBtn = document.getElementById("singinBtn");

        loginBtn.style.backgroundColor = "aliceblue";
        singinBtn.style.backgroundColor = "rgb(167, 172, 176)";
        loginContainer.classList.replace("d-none", "d-block");
        singinContainer.classList.replace("d-block", "d-none");
    }

    /*Funciones para rellenar dataUser*/
    function handleName(e){
        setDataUser({...dataUser, name: e.target.value});
        console.log(dataUser)
    }

    function handleSurname(e){
        setDataUser({...dataUser, surname: e.target.value});
        console.log(dataUser)

    }

    function handleMail(e){
        setDataUser({...dataUser, mail: e.target.value});
    }

    function handlePasword(e){
        setDataUser({...dataUser, password: e.target.value});
    }

    function handleBornDate(e){
        setDataUser({...dataUser, bornDate: e.target.value});
    }
    /*------------------------------ */

    if (localStorage.getItem("name")){
        return(
            <div className="w-100">
                <Menu></Menu>
                <div className="pt-5">
                    <h1>no</h1>
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
            <Menu></Menu>
            <div style={{height: '100vh'}} className="w-100 d-flex justify-content-center align-items-center">
                <div className="loginContainer d-flex justify-content-center row col-10 col-md-4 mt-5">
                    <div className="top d-flex justify-items-center p-0">
                        <div className="w-100 row p-0 m-0">
                            <button id="loginBtn" onClick={switchToLogin} className="col-6 py-2 topLeft">Login</button>
                            <button id="singinBtn" onClick={switchToSingin} className="col-6 py-2 topRight">Sign in</button>
                        </div>
                    </div>
                    <div id="containerLogin" className="d-block">
                        <h3 className="text-center mt-3">Login</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10">
                                <input name="mail" required value={dataUser.mail} onChange={handleMail} placeholder="correo" type="text" className="w-100 my-3 p-2"/>
                                <input name="password" required value={dataUser.password} onChange={handlePasword} placeholder="contraseña" type="text" className="w-100 my-3 p-2"/>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <button className="btnFacebook p-2 px-3 text-light">Login with Meta</button>
                                    <button className="btnGoogle p-2 px-3">Login with google</button>
                                </div>
                            <button type="submit" onClick={() => checkUser(dataUser)} className="w-100 my-3 p-2 submit">Continuar</button>
                        </div>
                        </div>
                    </div>
                    <div id="containerSingin" className="d-none">
                        <h3 className="text-center mt-3">Sign in</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="col-10">
                                <div className="row px-2 d-flex justify-content-between">
                                    <input name="name" required value={dataUser.name} onChange={handleName} placeholder="Nombre" type="text" className="my-3 p-2 col-5"/>
                                    <input name="surname" required value={dataUser.surname} onChange={handleSurname} placeholder="Apellidos" type="text" className="my-3 p-2 col-6"/>
                                </div>
                                <input name="mail" required value={dataUser.mail} onChange={handleMail} placeholder="correo" type="text" className="w-100 my-3 p-2"/>
                                <input name="bornDate" required onChange={handleBornDate} type="date" className="p-2 col-6"/>
                                <input name="password" required value={dataUser.password} onChange={handlePasword} placeholder="contraseña" type="text" className="w-100 my-3 p-2"/>
                                <hr />
                                <button type="submit" onClick={() => uploadUser(dataUser)} className="w-100 my-3 p-2 submit">Continuar1</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}