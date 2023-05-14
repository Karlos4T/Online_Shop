import { ProductCard } from "./Cards/ProductCard";
import { ProductCard2 } from "./Cards/ProductCard2";
import { ProductCard3 } from "./Cards/ProductCard3";
import { ProductCard4 } from "./Cards/ProductCard4";
import { ProductCard5 } from "./Cards/ProductCard5";


export function ProductsDisplay({products, card}){
    
    return(
        <div>
            <div className="w-100 d-flex flex-wrap p-3 justify-content-start container-fluid">
                {products.map((item, i) => {
                    switch (card) {
                        case 1:
                            return(
                                <ProductCard
                                key={i}
                                props={item}/>
                                )
                            break;
                        case 2:
                            return(
                                <ProductCard2
                                key={i}
                                props={item}/>
                                )
                            break;
                        case 3:
                            return(
                                <ProductCard3
                                key={i}
                                props={item}
                                />
                            )
                            break;
                        case 4:
                            return(
                                <ProductCard4
                                key={i}
                                props={item}
                                />
                            )
                            break;
                        case 5:
                            return(
                                <ProductCard5
                                key={i}
                                props={item}
                                />
                            )
                            break;
                        default:
                            return(
                                <ProductCard4
                                key={i}
                                props={item}
                                />
                            )
                            break;
                    }
                })}
            </div>
        </div>
    )
}
