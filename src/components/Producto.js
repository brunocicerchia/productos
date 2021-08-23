import React from 'react';

const Producto = ({ title, price, description, image, onClick, key}) => {
    return (
        <div key={key} className="col-md-3 producto">
            <div className="card">
                <img src={image} className="card-img-top producto-img mx-auto d-block" alt="foto"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p> 
                    <button className="btn btn-primary" onClick={onClick}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Producto;