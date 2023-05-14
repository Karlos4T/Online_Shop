import '../../../Styles/ProductCard2.scss'


export function ProductCard2({props}){
    const imgs = require.context("../../../Images", true)
    console.log(props)
    return(
        <div style={{backgroundColor: props.colors}} className="product-card-2 my-3 d-flex align-items-center justify-content-center flex-column"> 
            <img className="w-50" src={imgs(props.images)} alt=""/>
            <h6 className='text-secondary'><b className='text-decoration-none'>{props.model}</b></h6>
        </div>
    )
}