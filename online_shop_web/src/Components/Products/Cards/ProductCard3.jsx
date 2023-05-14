import '../../../Styles/ProductCard3.scss'

export function ProductCard3({props}){
    const title = props.title.toUpperCase()
    const imgs = require.context("../../../Images", true)
    return(
        <a className='col-4 px-4 text-decoration-none' href={`./products/${props.id}`}>
            <div className="product-card-3 m-3 bg-transparent"> 
                <div style={{backgroundColor: props.colors}} className="img-container d-flex align-items-center justify-content-center flex-column py-3">
                    <img className="w-50" src={imgs(props.images)} alt=""/>
                    <div style={{background: `linear-gradient(0deg, ${props.colors}, transparent, transparent, transparent)`}} className="gradient w-100 h-100"></div>
                </div>
                <div className='info p-3 pt-4 bg-dark'>
                    <h2 className='font-fith text-center'><b className=''>{props.title.toUpperCase()}</b></h2>
                    <h4 className='font-fourth text-center'>{props.model.toUpperCase()}</h4>
                    <h1 className='font-main text-center py-5'>{props.price}€</h1>
                    <div className='d-flex justify-content-center align-items-center'>
                        <h6 className='text-light text-center'>{props.likes}</h6>
                        <h4><b className='h2 px-1' style={{color: "#fc026e"}}>♥</b></h4>
                    </div>
                </div>
            </div>
        </a>
    )
}