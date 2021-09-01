import React, {useEffect, useState} from "react";
import Producto from "../Producto";
import '../../App.css';
//Function Class
const ItemList = ({ category }) => {
    const [producto, productos] = useState([]);

    useEffect(() => {
        if(category == null) {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>productos(data))
        } else {
            fetch('https://fakestoreapi.com/products/category/' + category)
            .then(res=>res.json())
            .then(data=>productos(data))
        }
    }, );

    return(
        <div className="container">
            {producto.map((p) => (
                <Producto
                    title={p.title}
                    price={p.price}
                    description={p.description}
                    image={p.image}
                    key={p.id}
                    id={p.id}
                />
            ))}
        </div>
    )
}

export default ItemList;