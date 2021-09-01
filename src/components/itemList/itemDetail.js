import React from 'react';
import ItemCount from '../itemCount';

const ItemDetail = ({ producto }) => {
    return (
            <div key={producto.key} id={producto.id} className="col-md-3 producto">
                <div className="card">
                    <img src={producto.image} className="card-img-top producto-img mx-auto d-block" alt={producto.title} />
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <p className="card-text">${producto.price}</p>
                        <ItemCount />
                    </div>
                </div>
            </div>
    );
};

export default ItemDetail;