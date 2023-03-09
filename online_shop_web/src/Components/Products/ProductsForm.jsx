import { Menu } from "../Menu";



export function ProductsForm(){
    return(
        <div className="container-fluid p-0">
            <Menu></Menu>
            <div className="container">
                <form className="mt-5 d-flex justify-content-center flex-column align-items-center" action="">
                    <div className="row d-flex justify-content-between">
                        <input className="w-auto mx-3 " type="text" name="title" placeholder="Nombre" id=""/>
                        <input className="w-auto mx-3 " type="text" name="collection" placeholder="coleccion" id="" />
                    </div>
                    <textarea className="w-50 my-5" name="desc" id="" cols="30" rows="10" placeholder="Descripcion"></textarea>
                    <div className="row d-flex">
                        <input className="w-auto" type="file" name="image" id=""/>
                        <input className="w-auto" type="number" name="price" id="" placeholder="€"/>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
