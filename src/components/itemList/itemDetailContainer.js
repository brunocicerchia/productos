import React, {useEffect, useState} from "react";
import ItemDetail from "./itemDetail";
import '../../App.css';
import { useParams } from "react-router-dom";

//Component Class
const ItemDetailContainer = () => {
    const [producto, productos] = useState([]);
    const { productId } = useParams();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + productId)
            .then(res=>res.json())
            .then(data=>productos(data))
    }, []);

    return (
        <div className="row">
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer;