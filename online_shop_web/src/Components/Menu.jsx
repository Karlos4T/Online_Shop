import '../Styles/Menu.scss'

export function Menu(props){
    return(
        <div className="container-fluid menu d-flex justify-content-between align-items-center">
            <div className="text-light p-2 w-25">
            </div>
            <div className="row d-flex">
                <a style={{color: props.colors}} className="w-auto p-3 text-decoration-none h5" href="../../"><b>Home</b></a>
                <a style={{color: props.colors}} className="w-auto p-3 text-decoration-none h5" href="../products"><b>Product</b></a>
                <a style={{color: props.colors}} className="w-auto p-3 text-decoration-none h5" href="../profile"><b>Profile</b></a>
            </div>
            <div className="w-25 d-flex justify-content-end">
                <a style={{color: props.colors}} className="w-auto p-3 text-decoration-none h5" href="../login"><i className="fa-regular fa-user h3 p-3 px-5 m-0"></i></a>
            </div>
        </div>
    )
}