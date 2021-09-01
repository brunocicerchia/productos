import React, {useEffect, useState} from "react";
import ItemDetail from "./itemDetail";
import '../../App.css';

//Component Class
const ItemDetailContainer = () => {
    const [producto, productos] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>productos(data))
    });

    console.log(producto);

    return (
        <div className="row">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer;