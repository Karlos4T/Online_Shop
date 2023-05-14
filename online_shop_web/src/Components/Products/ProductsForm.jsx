import { useEffect, useState } from "react";
import { getCollections, uploadImg, uploadProducts } from "../../api";
import { Menu } from "../Menu";

export function ProductsForm(){
    const [collections, setCollections] = useState([]);
    const [product, setProducts] = useState({
        brand: "",
        title: "",
        model: "",
        desc: "",
        collection: 0,
        price: 0,
        path: "",
        img: "./img1.png",
        colors: "#ffffff"
    });

    const handleCollections = async () => {
        const data = await getCollections();
        await setCollections(data);
    }

    function handleProducts(e){
        const fs = window.requestFileSystem || window.webkitRequestFileSystem;

        // Crear un nuevo directorio
        fs(window.TEMPORARY, 1024 * 1024, function(fs) {
        fs.root.getDirectory('./miDirectorio', { create: true }, function(dirEntry) {
            console.log('Directorio creado:', dirEntry);
        }, errorHandler);
        }, errorHandler);

        // Función para manejar errores
        function errorHandler(error) {
        console.error('Error:', error);
        }
        e.preventDefault();
        uploadProducts(product);
    }

    const handleTitle = (data) => {
        setProducts({
            ...product,
            title: data,
        })
        console.log(data);
    }

    const handleDesc = (data) => {
        setProducts({
            ...product,
            desc: data
        })
        console.log(data);
    }

    const handleModel = (data) => {
        setProducts({
            ...product,
            model: data
        })
        console.log(data);
    }

    const handleBrand = (data) => {
        setProducts({
            ...product,
            brand: data
        })
        console.log(data);
    }

    const handlePrice = (data) => {
        setProducts({
            ...product,
            price: data
        })
        console.log(data);
    }

    const handleColor = (data) => {
        setProducts({
            ...product,
            colors: data
        })
        console.log(product);
    }

    const handlePath = (data) => {
        setProducts({
            ...product,
            path: data
        })
        console.log(data);
    }

    const handleImg = (data) => {
        data = `./${data}`
        setProducts({
            ...product,
            img: data
        })
        console.log(data);
    }

    useEffect(() => {
        handleCollections();
    }, [])

    return(
        <div className="container-fluid p-0">
            <Menu></Menu>
            <div style={{height: '10vh'}}></div>
            <div className="container">
                <form className="mt-5 d-flex justify-content-center flex-column align-items-center" method="POST" action="" encType="multipart/form-data">
                    <div className="row d-flex justify-content-between">
                        <input className="w-auto mx-3" value={product.brand} onChange={(e) => {handleBrand(e.target.value)}} type="text" name="brand" placeholder="Brand" id="" />
                        <input className="w-auto mx-3" value={product.title} onChange={(e) => {handleTitle(e.target.value)}} type="text" name="title" placeholder="Nombre" id=""/>
                        <input className="w-auto mx-3" value={product.model} onChange={(e) => {handleModel(e.target.value)}} type="text" name="brand" placeholder="Model" id="" />
                    </div>
                    <textarea className="w-50 my-5"  value={product.desc} onChange={(e) => {handleDesc(e.target.value)}} id="" cols="30" rows="10" placeholder="Descripcion"></textarea>
                    <div className="row d-flex">
                        <input className="w-auto" name="photo" onChange={(e) => {handleImg(e.target.files[0].name)}} type="file" id=""/>
                        <input className="w-auto" value={product.value} onChange={(e) => {handlePrice(e.target.value)}} type="number" name="price" id="" placeholder="€"/>
                        <input className="w-25" onChange={(e) => {handleColor(e.target.value)}} type="color"/>
                    </div>
                    <input type="submit"  onClick={(e) => handleProducts(e)}/>
                </form>
            </div>
        </div>
    )
}
