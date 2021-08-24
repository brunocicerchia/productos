import React from "react";
import NavbarClass from "./Navbar";
import '../App.css';
import ItemListContainer from "./itemListContainer";

//Component Class
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{padding: 0}}>
                    <NavbarClass marca="TuTiendita" />
                </div>
                <div className="container">
                    <ItemListContainer />
                </div>
            </div>
        )
    }
}

export default App;