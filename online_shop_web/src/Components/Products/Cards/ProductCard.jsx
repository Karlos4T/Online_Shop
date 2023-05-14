import '../../../Styles/ProductCard.scss'
const imgs = require.context("../../../Images", true);

export function ProductCard({props}){
    return(
        <a className='col-md-4 col-sm-6 text-decoration-none' href={`./products/${props.id}`}>
            <div className="item bg-fith border-fourth">
                <div className="gradient h-100 w-100"></div>
                <div className='top'>
                    <div className='img-container py-3 d-flex justify-content-center'>
                        <img src={imgs(props.images)} alt="" />
                    </div>
                </div>
                <div className='bottom p-3'>
                    <div className='d-flex justify-content-between align-items-end'>
                        <h5 className='font-second'>{props.title}</h5>
                        <h6 className='font-second'>{props.price}€</h6>
                    </div>
                </div>
            </div>
        </a>
    )
}