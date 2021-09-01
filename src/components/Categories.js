import React from 'react';
import { useParams } from 'react-router-dom';

const Categories = () => {
    const { categoryId } = useParams();
    console.log(categoryId);

    return(
        <div>
            <h3>Categories</h3>
        </div>
    )
}

export default Categories;