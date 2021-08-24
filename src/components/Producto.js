import React from 'react';
import ItemCount from './itemCount';

const Producto = ({ title, price, description, image, onClick, key}) => {
    return (
        <div key={key} className="col-md-3 producto">
            <div className="card">
                <img src={image} className="card-img-top producto-img mx-auto d-block" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price}</p>
                    <ItemCount />
                </div>
            </div>
        </div>
    );
};

export default Producto;