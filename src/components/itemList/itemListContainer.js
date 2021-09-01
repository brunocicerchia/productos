import React from "react";
import ItemList from "./itemList";
import '../../App.css';

//Component Class
class ItemListContainer extends React.Component {

    onClickProduct(title) {
        this.setState({title : title});
    }

    render() {
        return (
            <ItemList />
        )
    }
}

export default ItemListContainer;