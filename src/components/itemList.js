import React, {useEffect} from "react";
import Producto from "./Producto";
import '../App.css';
import { task } from "../helpers/callsToPromise";
import { render } from "@testing-library/react";
//Function Class
const ItemList = () => {

    useEffect(() => {
        task.then(
            (result) => {
                render(
                    <div className="row">
                    {result.map((item) => (
                        <Producto
                            title={item.title}
                            price={item.price}
                            description={item.description}
                            image={item.image}
                            key={Math.random()}
                        />
                    ))}</div>
                )
            },
            (err) => console.log(err)
        )
    }, []);

    return(
        <ul>
        Cargando productos!
        </ul>
    )
}

export default ItemList;