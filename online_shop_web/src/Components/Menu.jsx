

export function Menu(){
    return(
        <div className="container-fluid bg-dark d-flex justify-content-between align-items-center">
            <h2 className="text-light p-2 w-25">menu</h2>
            <div className="row d-flex">
                <a className="w-auto p-3 text-decoration-none text-light" href="./">Home</a>
                <a className="w-auto p-3 text-decoration-none text-light" href="./products">Product</a>
                <a className="w-auto p-3 text-decoration-none text-light" href="./profile">Profile</a>
            </div>
            <div className="w-25"></div>
        </div>
    )
}