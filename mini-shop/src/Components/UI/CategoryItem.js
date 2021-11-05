import React from 'react';
import { Link } from 'react-router-dom';

const CategoryItem = props => {
    return (
        <div className="category-item">
            <Link to={`/get_product?categories=${props.id}`}>
                <img src={`https://shopapi.rc.liadev.ir${props.image}`} alt={props.name} />
                <div className="title">{props.name}</div>
                <div>id:{props.id}</div>
            </Link>
        </div>
    )
};
export default CategoryItem;