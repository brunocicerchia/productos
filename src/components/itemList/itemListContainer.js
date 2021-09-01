import React from "react";
import ItemList from "./itemList";
import '../../App.css';
import { useParams } from "react-router-dom";

//Component Class
const ItemListContainer = () => {
    const { categoryId } = useParams();

    return (
        <ItemList category={categoryId} />
    )
}

export default ItemListContainer;