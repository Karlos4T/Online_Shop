import { useState, useEffect } from "react";
import { getCollections } from "../../api";
import '../../Styles/BottomMenu.scss';

export const BottomMenu = () => {
    const [collections, setCollections] = useState([]);
    
    const handleCollection = async () => {
        const data = await getCollections();
        await setCollections(data);
        console.log(collections);
    }

    useEffect(() => {
        handleCollection();
    }, [])
    
    return(
        <div className="d-flex justify-content-evenly bg-secondary w-100">
            {collections.map((col) => {
                console.log(col.name)
                return(
                    <div className="item p-3">
                        <a className="text-light p-3 text-decoration-none">
                            {col.name}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}