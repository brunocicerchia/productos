import React from 'react';

class ItemCount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {contador : 1, stock: 10, isStock: true, warning: "block"}
    }

    addOne(e) {
        e.preventDefault()
        if(this.state.isStock === true) {
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

    removeOne(e) {
        e.preventDefault()
        if(this.state.isStock === true) {
            if(this.state.contador > 0) {
                this.setState(prevState => ({
                    contador: prevState.contador -1
                }));
            } else {
                console.log("No podes pedir items negativos!!")
            }
        } else {
            console.log("No hay mas stock para este producto")
        }
    }

    onAdd(e) {
        e.preventDefault()
        console.log("Proximamente")
    }

    render() {
        return <form>
            <div class="mb-3 text-center">
                <p>{this.state.contador}</p>
                <button className="btn btn-success" onClick={this.addOne.bind(this)} style={{margin: "5px"}}>+</button>
                <button className="btn btn-warning" onClick={this.removeOne.bind(this)} style={{margin: "5px"}}>-</button>
            </div>
            <button className="btn btn-primary" onClick={this.onAdd.bind(this)} style={{margin: "5px"}}>Agregar al carrito</button>
        </form>
    }
}

export default ItemCount;