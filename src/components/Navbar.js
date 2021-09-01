import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class NavbarClass extends React.Component {
    render() {
        return <nav className="navbar navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <NavLink className="navbar-brand route" to="/"><p style={{color: 'dark'}}>BazarOnline</p></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <p class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </p>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <NavLink className="nav-link route" activeClassName="active-item" to="/category/electronics"><li class="dropdown-item">Electronica</li></NavLink>
                                        <NavLink className="nav-link route" activeClassName="active-item" to="/category/jewelery"><li class="dropdown-item">Joyeria</li></NavLink>
                                        <NavLink className="nav-link route" activeClassName="active-item" to="/category/men's clothing"><li class="dropdown-item">Ropa de hombre</li></NavLink>
                                        <NavLink className="nav-link route" activeClassName="active-item" to="/category/women's clothing"><li class="dropdown-item">Ropa de mujer</li></NavLink>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    }
}

export default NavbarClass;