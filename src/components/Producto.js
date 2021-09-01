import React from 'react';
import ItemCount from './itemCount';
import '../App.css';
import { NavLink } from 'react-router-dom';

const Producto = ({ title, price, description, image, key, id}) => {
    return (
        <NavLink to={`/producto/${id}`}>
            <div className="row item" key={parseInt(key, 10)} id={id}>
                <div className="col-md-2">
                    <img src={image} className="card-img-top producto-img mx-auto d-block" alt={title} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <b><p className="card-text">${price}</p></b>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Producto;