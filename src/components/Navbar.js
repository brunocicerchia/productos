import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class NavbarClass extends React.Component {
    render() {
        return <nav className="navbar navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <h3 style={{color: 'white'}}>Tiendita</h3>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link route" activeClassName="active-item" to="/">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link route" activeClassName="active-item" to="/productos">Productos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link route" activeClassName="active-item" to="/itemDetail">itemDetalContainer</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    }
}

export default NavbarClass;