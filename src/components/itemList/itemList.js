import React, {useEffect, useState} from "react";
import Producto from "../Producto";
import '../../App.css';
import { task } from "../../helpers/callsToPromise";
//Function Class
const ItemList = () => {
    const [producto, productos] = useState([]);

    useEffect(() => {
        task.then((data) => productos(data));
    }, []);

    return(
        <div className="row">
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