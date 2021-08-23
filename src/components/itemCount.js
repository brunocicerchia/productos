import React from 'react';

class ItemCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {contador : 1, stock: 10, isStock: true, warning: "block"}
    }

    onAdd(e) {
        e.preventDefault()
        if(this.state.isStock == true) {
            if(this.state.contador < this.state.stock) {
                this.setState(prevState => ({
                    contador: prevState.contador +1
                }));
            } else {
                console.log("Solo hay 10 items restantes!")
            }    
        } else {
            console.log("No hay mas stock para este producto")
        }       
    }     

    render() {
        return <form>
            <div class="mb-3 text-center">
                <h3>Stock disponible: 10 unidades</h3>
                <p>{this.state.contador}</p>
                <button className="btn btn-success" onClick={this.onAdd.bind(this)} style={{margin: "5px"}}>+</button>
                <button className="btn btn-warning" onClick={this.onRemoveOne.bind(this)} style={{margin: "5px"}}>-</button>
            </div>
        </form>
    }
}

export default ItemCount;