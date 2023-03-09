

import '../../Styles/ProductCard.scss'


export function ProductCard({props}){
    
    return(
        <div className="bg-danger card p-3">
            <h1>{props.title}</h1>
            <h3>{props.desc}</h3>
        </div>
    )
}