import { useEffect, useState } from 'react'
import { getProducts } from '../../api';
import { Products } from '../Products/Products';
import { ProductsDisplay } from '../Products/ProductsDisplay';



export function Section2(){
    const [products, setProducts] = useState([]);

    const imgs = require.context("../../Images", true)

    const handleData = async () => {
        const data = await getProducts(3);
        await setProducts(data);
    }

    useEffect(() => {
        handleData();
    }, [])

    return(
        <div>
            <h1 className='text-center'>Most <b style={{color: "#fc026e"}}>♥</b> Sneakers</h1>
            <ProductsDisplay products={products} card={3}/>
        </div>
    )
}